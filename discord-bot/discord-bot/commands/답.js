const keywords = ['어어', '우우', '세요', '세여', '여워', '마자', '건가', '버려', '합격', '조져', '접자'];

export default {
    name: '답',
    trigger: (content) => keywords.some(word => content.includes(word)),
    execute: (message) => {
        const text = message.content;
        
        if (text.includes('어어')) {
            message.reply('조용.');
        } else if (text.includes('우우')) {
            message.reply('옘병하네');
        } else if (text.includes('세요') || text.includes('세여')) {
            message.reply('싫어요');
        } else if (text.includes('여워')) {
            message.reply('감사해요');
        } else if (text.includes('마자')) {
            message.reply('아닌데요');
        } else if (text.includes('건가')) {
            message.reply('아니요');
        } else if (text.includes('버려')) {
            message.reply('줍줍');
        } else if (text.includes('합격')) {
            message.reply('(끄덕)');
        } else if (text.includes('조져')) {
            message.reply('어흐 하기싫어');
        } else if (text.includes('접자')) {
            message.reply('ㅇㅇ');
        }
    }
};