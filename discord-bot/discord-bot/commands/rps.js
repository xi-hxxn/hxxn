const rps = ['가위', '바위', '보'];
const emojis = { 가위: '✌️', 바위: '✊', 보: '🖐' };

export default {
  trigger: (content) => content.startsWith('!') && rps.includes(content.slice(1)),
  execute: (message) => {
    const userChoice = message.content.slice(1);
    const botChoice = rps[Math.floor(Math.random() * rps.length)];

    let result;
    if (userChoice === botChoice) result = '보고 내지마세요. 빨리 내요';
    else if (
      (userChoice === '가위' && botChoice === '보') ||
      (userChoice === '바위' && botChoice === '가위') ||
      (userChoice === '보' && botChoice === '바위')
    ) result = '퉤';
    else result = '풉ㅋ';

    message.reply(
      `나: ${emojis[userChoice]} vs ` +
      `붐: ${emojis[botChoice]}\n` +
      `${result}`
    );
  }
};