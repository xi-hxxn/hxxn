const keywords = ['닝닝', '안나', '카리나', '지민'];

export default {
    name: '에스파',
    trigger: (content) => keywords.some(word => content.includes(word)),
    execute: (message) => {
        const text = message.content;
        
        if (text.includes('닝닝') || text.includes('안나')) {
            message.reply('으휴');
        } else if (text.includes('카리나') || text.includes('지민')) {
            message.reply('ㅇㅅㅇ');
        }
    }
};