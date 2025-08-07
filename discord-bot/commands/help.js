export default {
  trigger: content => content === '!봇붐',
  execute: message => {
    message.reply(
      '**사용 가능한 명령어**\n' +
      '`!운세` - 운세인척 아무말 🍀\n' +
      '`!가위` / `!바위` / `!보` - 가위바위보 게임 ✊✌️🖐\n' +
      '`!정신차려` - 봇붐 뺨치기 (관리자 전용) 🔁'
    );
  }
};