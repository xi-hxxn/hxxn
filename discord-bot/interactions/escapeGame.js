export default async function handleInteraction(interaction) {
    if (!interaction.isButton()) return;

    const { customId } = interaction;

    if (customId === 'choice_open_door') {
        await interaction.reply('문을 열었더니… 🧟 좀비가?!');
    } else if (customId === 'choice_stay') {
        await interaction.reply('당신은 방에 남아 무사히 탈출합니다. 🎉');
    } else {
        await interaction.reply('알 수 없는 선택입니다...');
    }
}