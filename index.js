// 1. 주요 클래스 가져오기
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// 2. 클라이언트 객체 생성 (Guilds관련, 메시지관련 인텐트 추가)
const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
]});

// 3. 봇이 준비됐을때 한번만(once) 표시할 메시지
client.once(Events.ClientReady, readyClient => {
console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// 4. 누군가 ping을 작성하면 pong으로 답장한다.
client.on('messageCreate', (message) => {
    if(message.content.includes('붐')){
        if(message.content.includes('핑크붐')){
            message.reply('나가');
        } else {
            message.reply('끼에에엑');
        }
    }
})

client.on('messageCreate', (message) => {
    if(message.content.includes('카리나')){
        message.reply('ㅇㅅㅇ');
    }
})

client.on('messageCreate', (message) => {
    if(message.content.includes('닝닝')){
        message.reply('풉킥');
    }
})

client.on('messageCreate', (message) => {
    if(message.content.includes('치킨')){
        message.reply('줜맛탱');
    }
})

client.on('messageCreate', (message) => {
    if(message.content.includes('배그')){
        message.reply('안해');
    }
})

// 5. 시크릿키(토큰)을 통해 봇 로그인 실행
client.login(token);