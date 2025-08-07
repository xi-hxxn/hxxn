import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { userState } from '../interactions/pubg1.js'; // 상대 경로로 import

export default {
    trigger: content => content === '!시작',
    execute: async message => {
        const userId = message.author.id;
        userState.set(userId, { stage: 1 }); // 유저 상태 초기화

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('open_door').setLabel('문 열기').setStyle(ButtonStyle.Secondary),
                new ButtonBuilder().setCustomId('stay').setLabel('기다리기').setStyle(ButtonStyle.Secondary)
            );

        await message.reply({
            content: '게임을 시작합니다! 방 안에 적이 있습니다. 어떻게 할까요?',
            components: [row]
        });
    }
};
