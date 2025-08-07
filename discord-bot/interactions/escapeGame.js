import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

const responses = {
    M24: [
        'M24로 헤드샷! 🎯',
        '에임이 똥이라... 빗나가서 죽었습니다. 💀',
    ],
    AUG: [
        '장전캔슬 시전! 🔥',
        '총알을 빼앗겼습니다.',
    ],
    PUNCH: [
        '선빵필승! 🥊',
        '주먹을 날렸지만... 역으로 당했습니다. 😵',
        '상대가 피해 도망갑니다! 🏃‍♂️',
    ],
};

function getRandomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}

async function safeReply(interaction, options) {
    if (interaction.replied || interaction.deferred) {
        return await interaction.followUp(options);
    } else {
        return await interaction.reply(options);
    }
}

export default async function handleInteraction(interaction) {
    if (!interaction.isButton()) return;

    const { customId } = interaction;

    if (responses[customId]) {
        const reply = getRandomResponse(responses[customId]);

        // 새로운 버튼들 (2차 선택지 예시)
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('run')
                .setLabel('도망가기')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('wait')
                .setLabel('존버하기')
                .setStyle(ButtonStyle.Secondary),
        );

        await interaction.reply({
            content: reply + '\n\n다음 행동은?',
            components: [row],
        });
    } else if (customId === 'run') {
        await safeReply(interaction, {
            content: '수류탄을 피했습니다.',
            components: [],
        });

    } else if (customId === 'wait') {
        await safeReply(interaction, {
            content: '그 자리에 조용히 숨어있습니다...',
            components: [],
        });

    } else {
        await safeReply(interaction, {
            content: '알 수 없는 선택입니다...',
            components: [],
        });
    }
}