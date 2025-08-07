export default {
    name: '붐',
    trigger: (content) => content.includes('붐'),
    execute: (message) => {
        if (message.content.includes('핑크붐')) {
            message.reply('나가');
        } else if (message.content.includes('붐업')) {
                message.reply('ㅗ');
        } else if (message.content.includes('붐따')) {
            message.reply('ㅜ');
        } else if (message.content.includes('붐둥이')) {
            message.reply('뀨');
        } else if (message.content.includes('붐새')) {
            message.reply('ㅋ');
        } else {
            message.reply('끼에에엑');
        }
    }
};