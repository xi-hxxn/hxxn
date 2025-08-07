const keywords = ['배그', '치킨'];

export default {
    name: '배그',
    trigger: (content) => keywords.some(word => content.includes(word)),
    execute: (message) => {
        const text = message.content;

        if (text.includes('배그')) {
            message.reply('안해');
        } else if (text.includes('치킨')) {
            message.reply('줜맛탱');
        }
    }
};