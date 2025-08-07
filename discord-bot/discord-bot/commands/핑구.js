const keywords = ['핑구', '인민핑'];

export default {
    name: '핑구',
    trigger: (content) => keywords.some(word => content.includes(word)),
    execute: (message) => {
        if (message.content.includes('핑구')) {
            message.reply('인민핑');
        } else if (message.content.includes('인민핑')) {
            message.reply('떼쟁이');
        }
    }
};