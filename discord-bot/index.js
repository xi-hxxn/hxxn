// ESM 스타일 import
import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Client, GatewayIntentBits } from 'discord.js';
import handleInteraction from './interactions/escapeGame.js';

// ESM 환경에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// config.json 읽기
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf-8'));
const { token, announceChannelId, adminIds } = config;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.commands = [];

// 명령어 불러오기
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = await import(`./commands/${file}`);
    client.commands.push(command.default || command);
}

// 웹서버 (UptimeRobot용)
const app = express();
app.get('/', (req, res) => {
    console.log('[✅] 웹서버 접속 감지');
    res.send('봇붐은 살아있습니다!');
});
app.listen(3000, () => {
    console.log('[🌐] 웹서버 3000번 포트 실행 중');
});

// 봇 준비 완료 메시지
client.once('ready', async () => {
    console.log(`봇붐 준비완료 ${client.user.tag}`);

    try {
        const channel = await client.channels.fetch(announceChannelId);
        if (channel?.isTextBased()) {
            // channel.send('봇붐 개같이 부활!');
        }
    } catch (err) {
        console.error('봇붐 부활 실패', err);
    }
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

// 메시지 명령어 처리
client.on('messageCreate', async message => {
    if (message.author.bot) return;

    // 커스텀 명령어 처리
    for (const command of client.commands) {
        if (command.trigger(message.content)) {
            command.execute(message);
            return;
        }
    }

    // 봇 재시작 명령어
    if (message.content === '!정신차려') {
        if (adminIds.includes(message.author.id)) {
            await message.reply('♻️...');
            console.log(`🔁 ${message.author.tag}님이 봇붐 때리는중`);
            // 🔥 핵심: 파일 수정으로 Replit 재시작 유도
            fs.writeFileSync(path.join(__dirname, 'restart.txt'), `${Date.now()}`);
            //process.exit(); // 재시작
        } else {
            message.reply('🚫 봇붐은 아무나 못 때려요');
        }
    }
    });

const interactionHandlers = [];

const interactionFiles = fs.readdirSync(path.join(__dirname, 'interactions')).filter(file => file.endsWith('.js'));
for (const file of interactionFiles) {
    const handler = await import(`./interactions/${file}`);
    interactionHandlers.push(handler.default);
}

client.on('interactionCreate', async (interaction) => {
    for (const handler of interactionHandlers) {
        try {
            await handler(interaction);
        } catch (err) {
            console.error(`⚠️ ${handler.name || 'Unnamed'} 핸들러 오류:`, err);
        }
    }
});

client.login(token);