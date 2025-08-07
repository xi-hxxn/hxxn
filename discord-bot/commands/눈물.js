export default {
    name: '눈물',
    trigger: (content) => 
        content.includes('ㅜㅜ') || content.includes('ㅠ') || content.includes('눈물'),
    execute: (message) => {
        message.reply('즙 짜지 마세요');
  }
};