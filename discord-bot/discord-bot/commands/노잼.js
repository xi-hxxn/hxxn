const keywords = ['노잼', '뭐요', '머요', '쩝'];

export default {
    name: '노잼',
    trigger: (content) => keywords.some(word => content.includes(word)),
    execute: (message) => {
        const text = message.content;

        if (text.includes('노잼')) {
            message.reply('뭐요');
        } else if (text.includes('뭐요') || text.includes('머요')) {
            message.reply('ㅇㅉㄹㄱ');
        } else if (text.includes('쩝')) {
                message.reply('쩝박사');
        }
    }
};