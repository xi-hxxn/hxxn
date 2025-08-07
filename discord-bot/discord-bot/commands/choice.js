import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export default {
    trigger: content => content === '!선택',
    execute: async message => {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('choice_open_door')
                    .setLabel('문 열기')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('choice_stay')
                    .setLabel('기다리기')
                    .setStyle(ButtonStyle.Secondary),
            );

        await message.reply({
            content: '당신 앞에 문이 있습니다. 어떻게 할까요?',
            components: [row],
        });
    }
};
