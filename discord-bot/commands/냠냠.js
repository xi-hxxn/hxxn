const keywords = ['메뉴'];

export default {
    name: '냠냠',
    trigger: (content) => keywords.some(word => content.includes(word)),
    execute: (message) => {
        const text = message.content;

        if (text.includes('메뉴')) {
            message.reply('닭가슴살과 쌀밥');
        }
    }
};