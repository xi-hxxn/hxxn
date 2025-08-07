import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

const userState = new Map(); // 사용자별 게임 상태 저장

const stages = {
    1: {
        message: '방 안에 적이 있습니다. 어떻게 할까요?',
        buttons: [
            { id: 'open_door', label: '문 열기' },
            { id: 'stay', label: '기다리기' }
        ]
    },
    2: {
        message: '소리가 났습니다. 다음 행동은?',
        buttons: [
            { id: 'run_window', label: '창문으로 도망' },
            { id: 'hide', label: '숨어있기' }
        ]
    },
    3: {
        message: '당신은 무사히 탈출했거나… 끝났습니다. 🎮',
        buttons: []
    }
};

const buttonStageMap = {
    open_door: 2,
    stay: 2,
    run_window: 3,
    hide: 3
};

export default async function handleInteraction(interaction) {
    if (!interaction.isButton()) return;

    const userId = interaction.user.id;
    const clickedId = interaction.customId;
    const nextStage = buttonStageMap[clickedId]; // 버튼 ID로 다음 단계 결정

    if (!nextStage || !stages[nextStage]) {
        if (interaction.replied || interaction.deferred) {
            await interaction.reply({
                content: '게임이 종료되었습니다. 다시 시작하려면 !시작 을 입력하세요.',
                components: []
            });
        }
        userState.delete(userId);
        return;
    }

    userState.set(userId, { stage: nextStage });

    const stageData = stages[nextStage];
    const row = new ActionRowBuilder();
    stageData.buttons.forEach(btn =>
        row.addComponents(
            new ButtonBuilder()
                .setCustomId(btn.id)
                .setLabel(btn.label)
                .setStyle(ButtonStyle.Primary)
        )
    );

    if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
            content: stageData.message,
            components: stageData.buttons.length ? [row] : []
        });
    } else {
        await interaction.reply({
            content: stageData.message,
            components: stageData.buttons.length ? [row] : []
        });
    }
}

// ⬇️ userState를 다른 파일에서도 사용할 수 있도록 export
export { userState };