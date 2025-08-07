import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export default {
    trigger: content => content === '!낙하',
    execute: async message => {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('M24')
                    .setLabel('M24 줍기')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('AUG')
                    .setLabel('AUG 줍기')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('PUNCH')
                    .setLabel('냅다 주먹질')
                    .setStyle(ButtonStyle.Secondary),
            );

        await message.reply({
            content: '집에 적이랑 같이 들어왔습니다. 어떻게 할까요?',
            components: [row],
        });
    }
};
