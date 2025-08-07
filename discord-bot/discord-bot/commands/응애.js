const keywords = ['응애', '쓰레기', '배불', '세여', '저주', '미틴'];

export default {
    name: '응애',
    trigger: (content) => keywords.some(word => content.includes(word)),
    execute: (message) => {
        if (message.content.includes('응애')) {
            message.reply('바보');
        } else if (message.content.includes('쓰레기')) {
            message.reply('뿡애');
        } else if (message.content.includes('배불')) {
            message.reply('돼응');
        } else if (message.content.includes('저주')) {
            message.reply('쌰갈');
        } else if (message.content.includes('미틴')) {
            message.reply('미띤');
        }
    }
};