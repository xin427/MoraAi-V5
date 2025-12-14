require('./lib/menu');
const {
	downloadContentFromMessage,
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	InteractiveMessage,
	getContentType
} = require('@whiskeysockets/baileys');
const axios = require('axios');
const cheerio = require('cheerio');
const chalk = require('chalk');
const { color } = require('./lib/color');
const cron = require('node-cron');
const didyoumean = require('didyoumean');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const fsx = require('fs-extra');
const gis = require('g-i-s');
const moment = require('moment-timezone');
const ms = require('parse-ms');
const nou = require('node-os-utils');
const os = require('os');
const path = require('path');
const PhoneNumber = require('awesome-phonenumber');
const { performance } = require('perf_hooks');
const { randomBytes } = require('crypto');
const speed = require('performance-now');
const similarity = require('similarity');
const toMS = require('ms');
const util = require('util');
const yts = require('yt-search');
const readmore = String.fromCharCode(8206).repeat(4001);

const { 
	addAfkUser, 
	checkAfkUser, 
	getAfkId, 
	getAfkPosition, 
	getAfkReason, 
	getAfkTime 
} = require('./lib/afk');

const { 
	addFilter, 
	addSpam, 
	isFiltered, 
	isSpam, 
	ResetSpam 
} = require('./lib/antispam');

const { 
	addPremiumUser, 
	checkPremiumUser, 
	expiredCheck, 
	getAllPremiumUser, 
	getPremiumExpired, 
	getPremiumPosition 
} = require('./lib/premium');

const { 
	exec, 
	execSync, 
	spawn 
} = require("child_process");

const { 
	toAudio, 
	toPTT, 
	toVideo 
} = require('./lib/converter');

const { 
	smsg, 
	await, 
	clockString, 
	delay, 
	enumGetKey, 
	fetchBuffer, 
	fetchJson, 
	format, 
	formatDate, 
	formatp, 
	generateProfilePicture, 
	getBuffer, 
	getGroupAdmins, 
	getRandom, 
	isUrl, 
	json, 
	logic, 
	msToDate, 
	parseMention, 
	runtime, 
	sleep, 
	sort, 
	toNumber 
} = require('./lib/myfunc');

const { 
	CatBox, 
	fileIO, 
	pomfCDN 
} = require('./lib/uploader');

const { 
	gameSlot, 
	gameCasinoSolo, 
	gameMerampok, 
	daily, 
	transferLimit, 
	transferUang, 
	buy, 
	setUang, 
	setLimit 
} = require('./lib/game');

const { 
	createUser,
	createServer,
	getEggStartupCommand,
	manageServer,
	deleteServer,
	deleteUser
} = require('./lib/cpanel');

const {
	jadibot,
	stopjadibot,
	listjadibot
} = require('./jadibot');

const threshold = 0.72

const alightScrape = require('./lib/api/alightmotion');
const BukaLapak = require('./lib/api/bukalapak');
const chatSimi = require('./lib/api/simsimi');
const gempa = require('./lib/api/bmkg');
const GDrive = require('./lib/api/drive');
const hentai = require('./lib/api/hentai');
const jktNews = require('./lib/api/jktNews');
const Kusonime = require('./lib/api/kusonime');
const lyrics = require('./lib/api/lyrics');
const otakuDesu = require('./lib/api/otakudesu');
const pinterest = require('./lib/api/pinterest');
const PlayStore = require('./lib/api/playstore');
const quotesAnime = require('./lib/api/quotesAnime');
const remini = require('./lib/api/remini');
const savePin = require('./lib/api/savepin');
const saveTube = require('./lib/api/savetube');
const scrapeSoundCloud = require('./lib/api/soundcloud');

const { 
	ffCh, 
	ffChSkill, 
	ffNews, 
	ffPet, 
	ffPetSkill 
} = require('./lib/api/freefire');

const {
	komiku,
	detail
} = require('./lib/api/komiku');

const { 
	tiktokSearchVideo, 
	tiktokDownloaderVideo 
} = require('./lib/api/tiktok');

const { 
	wallpaper, 
	wikimedia, 
	happymod, 
	ringtone, 
	umma, 
	githubstalk, 
	npmstalk, 
	mlstalk 
} = require('./lib/api/scraper');

const afk = JSON.parse(fs.readFileSync('./src/afk.json'));
const ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'));
const bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'));
const premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'));
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'));
const contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
const userNumber = JSON.parse(fs.readFileSync('./src/data/role/user.json'));

const audionye = JSON.parse(fs.readFileSync('./media/database/audio.json'));
const setiker = JSON.parse(fs.readFileSync('./media/database/sticker.json'));
const imagenye = JSON.parse(fs.readFileSync('./media/database/image.json'));
const videonye = JSON.parse(fs.readFileSync('./media/database/video.json'));

const tebakgambar = {}
const tebakgame = {}
const tebakhero = {}
const tebakff = {}
const tebakkabupaten = {}
const tebakjkt48 = {}
const tebakhewan = {}
const tebakml = {}
const tebakchara = {}
const tebaklogo = {}
const tebakaplikasi = {}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const mathgame = {}

try {
	let rawData = fs.readFileSync(`./src/${tempatDB}`);
	global.db.data = JSON.parse(rawData) || {};
} catch (err) {
	console.error(`⚠️ Gagal memuat ${tempatDB}, menggunakan struktur default.`);
	global.db.data = {};
}

global.db.data = {
	sticker: global.db.data.sticker || {},
	database: global.db.data.database || {},
	game: global.db.data.game || {},
	others: global.db.data.others || {},
	users: global.db.data.users || {},
	chats: global.db.data.chats || {},
	settings: global.db.data.settings || {},
};

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');

let ucapanWaktu = "Selamat Malam 🌌";

if (time2 < "05:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "11:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "15:00:00") {
	ucapanWaktu = "Selamat Siang 🌅";
} else if (time2 < "18:00:00") {
	ucapanWaktu = "Selamat Sore 🌇";
} else if (time2 < "19:00:00") {
	ucapanWaktu = "Selamat Petang 🌆";
}

module.exports = haruka = async (haruka, m, msg, chatUpdate, store) => {
	try {
		const {
			type,
			quotedMsg,
			mentioned,
			now,
			fromMe
		} = m
		const body = m.body
		const budy = m.text
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : prefa
		const isCmd = body.startsWith(prefix)
		const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
		const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
		const args = body.trim().split(/ +/).slice(1);
		const botNumber = await haruka.decodeJid(haruka.user.id);
		const pushname = m.pushName || "No Name"
		const text = q = args.join(" ");
		const getQuoted = (m.quoted || m);
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || '';
		const qmsg = (quoted.msg || quoted);

		const isMedia = /image|video|sticker|audio/.test(mime);
		const isImage = (type == 'imageMessage');
		const isVideo = (type == 'videoMessage');
		const isAudio = (type == 'audioMessage');
		const isDocument = (type == 'documentMessage');
		const isLocation = (type == 'locationMessage');
		const isContact = (type == 'contactMessage');
		const isSticker = (type == 'stickerMessage');
		const isText = (type == 'textMessage');
		const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage');
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');

		const isGroup = m.key.remoteJid.endsWith('@g.us');
		const groupMetadata = m.isGroup ? await haruka.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
		const AntiNsfw = m.isGroup ? ntnsfw.includes(m.chat) : false

		if (m.isGroup) {
			m.metadata = await haruka.groupMetadata(m.chat)
			m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []))
			m.isAdmin = m.admins.some((b) => b.id === m.sender)
			m.participant = m.key.participant
			m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
		}

		const clientId = haruka.user.id.split(':')[0];
		const senderbot = m.key.fromMe ? haruka.user.id.split(':')[0] + "@s.whatsapp.net" || haruka.user.id : m.key.participant || m.key.remoteJid;
		const senderId = senderbot.split('@')[0];
		const isBot = clientId.includes(senderId);

		const isAfkOn = checkAfkUser(m.sender, afk)
		const isUser = userNumber.includes(m.sender);
		const isVip = db.data && db.data.users && db.data.users[m.sender] ? db.data.users[m.sender].vip : false;
		const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const isPremium = isCreator || checkPremiumUser(m.sender, premium);
		expiredCheck(haruka, m, premium);

		let usernomor = await PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international');
		let ownnomor = await PhoneNumber('+' + ownerNumber.replace('@s.whatsapp.net', '')).getNumber('international');

		const fconver = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `👤 *${pushname}*\n📞 *${usernomor}*`
			}
		};

		const fmen = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `📝 *Pesan Menfess Baru!* ✨`
			}
		};

		async function reactionMessage(emo) {
			haruka.sendMessage(m.chat, {
				react: {
					text: emo,
					key: m.key
				}
			});
		}

		async function newReply(teks) {
			if (typereply === 'v1') {
				m.reply(teks);
			} else if (typereply === 'v2') {
				haruka.sendMessage(m.chat, {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							previewType: "PHOTO",
							thumbnail: thumb,
							sourceUrl: wagc
						}
					},
					text: teks
				}, {
					quoted: m
				});
			} else if (typereply === 'v3') {
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			} else if (typereply === 'v4') {
				const newrep = {
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: ucapanWaktu,
							body: botName,
							thumbnailUrl: thumbUrl,
							sourceUrl: website
						}
					},
					text: teks
				};
				return haruka.sendMessage(m.chat, newrep, {
					quoted: m,
				});
			}
		};

		async function sendButton(chat, judul, teks, button, m) {
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: { 
									businessOwnerJid: haruka.decodeJid(haruka.user.id) 
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownerName,
								hasMediaAttachment: false
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, { 
				quoted: m 
			})

			await haruka.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}

		async function sendButtonImage(chat, judul, teks, buffer, button, m) {
			const uploadFile = { upload: haruka.waUploadToServer };
			const imageMessage = await prepareWAMessageMedia(
				{
					image: buffer,
				},
				uploadFile,
			);
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: { 
									businessOwnerJid: haruka.decodeJid(haruka.user.id) 
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownerName,
								imageMessage: imageMessage.imageMessage,
								hasMediaAttachment: true
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, {
				quoted: m
			})

			haruka.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}

		async function sendButtonVideo(chat, judul, teks, buffer, button, m) {
			const uploadFile = { upload: haruka.waUploadToServer };
			const videoMessage = await prepareWAMessageMedia(
				{
					video: buffer,
				},
				uploadFile,
			);
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: {
									businessOwnerJid: haruka.decodeJid(haruka.user.id)
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownerName,
								videoMessage: videoMessage.videoMessage,
								hasMediaAttachment: true
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, {
				quoted: m
			})

			haruka.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}

		async function sendButtonDocument(chat, judul, teks, thumb, button, m) {
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									newsletterName: saluranName, 
									serverMessageId: -1
								},
								businessMessageForwardInfo: {
									businessOwnerJid: haruka.decodeJid(haruka.user.id)
								},
								externalAdReply: {
									title: ucapanWaktu,
									body: pushname,
									thumbnailUrl: thumbUrl,
									sourceUrl: wagc,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								thumbnailUrl: thumbUrl,
								subtitle: ownerName,
								hasMediaAttachment: true,
								...(await prepareWAMessageMedia({
									document: thumb, 
									mimetype: 'image/png', 
									fileLength: 10000000000, 
									jpegThumbnail: thumb, 
									fileName: saluranName 
								}, { 
									upload: haruka.waUploadToServer
								}))
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, {
				quoted: m
			})

			await haruka.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		};

		function capitalizeWords(str) {
			return str
				.split(' ')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join(' ');
		}

		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}

		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x);

			let user = db.data.users[m.sender] || {};
			if (typeof user !== 'object') db.data.users[m.sender] = {};
	
			let isPremium = checkPremiumUser(m.sender, premium);
			let limitUser = isPremium ? 1000 : 100;
			let uangUser = user.vip 
				? global.uang.vip 
				: isPremium 
					? global.uang.premium 
					: global.uang.free;

			if (!('vip' in user)) user.vip = false;
			if (!('badword' in user)) user.badword = 0;
			if (!('title' in user)) user.title = '';
			if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex');
			if (!('nick' in user)) user.nick = haruka.getName(m.sender);
			if (!isPremium) user.premium = false;
			if (!('totalLimit' in user)) user.totalLimit = limitUser;
			if (!isNumber(user.limit)) user.limit = limitUser;
			if (!('uang' in user)) user.uang = uangUser;
			if (!('lastclaim' in user)) user.lastclaim = new Date().getTime();
			if (!('lastrampok' in user)) user.lastrampok = new Date().getTime();
			if (!('pctime' in user)) user.pctime = '';

			db.data.users[m.sender] = user;

			let chats = db.data.chats[m.chat] || {};
			if (typeof chats !== 'object') db.data.chats[m.chat] = {};

			if (!('badword' in chats)) chats.badword = false;
			if (!('antiforeignnum' in chats)) chats.antiforeignnum = false;
			if (!('antiviewonce' in chats)) chats.antiviewonce = false;
			if (!('antibot' in chats)) chats.antibot = false;
			if (!('antispam' in chats)) chats.antispam = false;
			if (!('antimedia' in chats)) chats.antimedia = false;
			if (!('antiimage' in chats)) chats.antiimage = false;
			if (!('antivideo' in chats)) chats.antivideo = false;
			if (!('antiaudio' in chats)) chats.antiaudio = false;
			if (!('antisticker' in chats)) chats.antisticker = false;
			if (!('anticontact' in chats)) chats.anticontact = false;
			if (!('antilocation' in chats)) chats.antilocation = false;
			if (!('antidocument' in chats)) chats.antidocument = false;
			if (!('antilink' in chats)) chats.antilink = false;
			if (!('antilinkgc' in chats)) chats.antilinkgc = false;
			if (!('mute' in chats)) chats.mute = false;
			if (!('liststore' in chats)) chats.liststore = {};

			db.data.chats[m.chat] = chats;

			let setting = db.data.settings[botNumber] || {};
			if (typeof setting !== 'object') db.data.settings[botNumber] = {};

			if (!('totalhit' in setting)) setting.totalhit = 0;
			if (!('totalError' in setting)) setting.totalError = 0;
			if (!('online' in setting)) setting.online = false;
			if (!('safesearch' in setting)) setting.safesearch = false;
			if (!('autosticker' in setting)) setting.autosticker = false;
			if (!('autodownload' in setting)) setting.autodownload = false;
			if (!('autobio' in setting)) setting.autobio = false;
			if (!('autoread' in setting)) setting.autoread = false;
			if (!('autorecordtype' in setting)) setting.autorecordtype = false;
			if (!('autorecord' in setting)) setting.autorecord = false;
			if (!('autotype' in setting)) setting.autotype = false;
			if (!('autoblocknum' in setting)) setting.autoblocknum = false;
			if (!('onlygc' in setting)) setting.onlygc = false;
			if (!('onlypc' in setting)) setting.onlypc = false;
			if (!('watermark' in setting)) setting.watermark = { packname: global.packname, author: global.author };
			if (!('about' in setting)) setting.about = {
				bot: { nick: haruka.getName(botNumber), alias: botName },
				owner: { nick: haruka.getName(ownerNumber + '@s.whatsapp.net'), alias: ownerNumber }
			};

			db.data.settings[botNumber] = setting;

		} catch (err) {
			console.error('⚠️ Terjadi kesalahan:', err);
		}

		const react = async () => {
			const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
			for (const emoji of emojis) {
				await sleep(80);
				await haruka.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
			}
			await sleep(50);
			const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
			await haruka.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
		};
		
		async function loading() {
			const lod = [
				"█▒▒▒▒▒▒▒▒▒▒▒ 10%",
				"████▒▒▒▒▒▒▒▒ 30%",
				"███████▒▒▒▒▒ 50%",
				"██████████▒▒ 80%",
				"████████████ 100%"
			];
			const { key } = await haruka.sendMessage(m.chat, { 
				text: mess.wait 
			}, { 
				quoted: m 
			});

			for (let i = 0; i < lod.length; i++) {
				await sleep(600);
				await haruka.sendMessage(m.chat, { 
					text: lod[i], 
					edit: key 
				});
			}
		};

		async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
			const { default: { Image } } = await import('node-webpmux');
			const img = new Image();

			const json = {
				'sticker-pack-id': 'Natsxe',
				'sticker-pack-name': packname,
				'sticker-pack-publisher': author,
				'emojis': categories,
				'is-avatar-sticker': 1,
				...extra
			};

			let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
			let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8');
			let exif = Buffer.concat([exifAttr, jsonBuffer]);

			exif.writeUIntLE(jsonBuffer.length, 14, 4);

			await img.load(buffer);
			img.exif = exif;

			return await img.save(null);
		}

		function generateRandomPassword(length) {
			let result = '';
			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			const charactersLength = characters.length;

			for (let i = 0; i < length; i++) {
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}

			return result;
		};

		async function generateRandomHexName(length) {
			return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
		};

		function formatBytes(bytes) {
			if (bytes === 0) return '0 Byte';

			const k = 1024;
			const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB'];
			const i = Math.floor(Math.log(bytes) / Math.log(k));

			return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
		}

		function formatDuration(ms) {
			let seconds = Math.floor((ms / 1000) % 60);
			let minutes = Math.floor((ms / (1000 * 60)) % 60);
			let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
			return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
		}

		if (!m.isGroup && !isCreator && !isPremium && db.data.settings[botNumber].onlygc) {
			if (command) {
		let message = "⚠️ *「 WARNING 」* ⚠️\n";
		message += "Hai! 👋 Bot ini hanya bisa digunakan di grup.\n\n";
		message += "🤔 Ingin bot aktif di grup kamu?\n";
		message += "*Sewa atau beli premium sekarang!*\n\n";
		message += "Hubungi admin: wa.me/6285769043152";

				return newReply(message);
			}
		};

		if (!isCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
			if (command) {
		let message = "⚠️ *「 WARNING 」* ⚠️\n";
		message += "Hai! 👋 Bot ini hanya bisa digunakan di private chat.\n\n";
		message += "🤔 Ingin bot aktif di chat kamu?\n";
		message += "*Sewa atau beli premium sekarang!*\n\n";
		message += "Hubungi admin: wa.me/6285759043152";

				return newReply(message);
			}
		}

		if (budy && !m.isNewsletter) {
			if (!m.isGroup && isCmd && !m.key.fromMe) {
				db.data.users[m.sender].pctime = new Date().getTime();
			}

			if (!m.isGroup && !isCmd && !m.key.fromMe) {
				const lastInteraction = new Date().getTime() - db.data.users[m.sender].pctime;
				if (lastInteraction > 21600000) {
					db.data.users[m.sender].pctime = new Date().getTime();

					if (m.sender === '6285184513459@s.whatsapp.net') {
						await haruka.sendMessage(m.chat, { 
							text: `Halo kak ${pushname}, senang banget bisa ngobrol lagi! Ada yang bisa aku bantu hari ini? 😊`, 
							ai: true 
						});
						haruka.sendMessage(m.chat, { 
							text: `Ketik *.menu* untuk melihat menu dan pilih fitur yang kamu butuhkan! 💬`, 
							ai: true 
						});
					} 

					else if (m.sender === '6285184513459@s.whatsapp.net') {
						await haruka.sendMessage(m.chat, { 
							text: `Ehh... ada kak Viona nih, kakak orang yang di spesialin owner aku itu kan? 🤔\nKalo iya, wahhh makasih banget udah mampir ke sini ya, Kak! 🤭❤️`, 
							ai: true 
						});
						haruka.sendMessage(m.chat, { 
							text: `Untuk mulai, ketik *.menu* agar aku bisa bantu dengan fitur-fitur yang ada! 💬`, 
							ai: true 
						});
					}

					else {
						await haruka.sendMessage(m.chat, { 
							text: `Halo kak ${pushname}, lama gak ngobrol nih! Ada yang bisa aku bantu? 😊`, 
							ai: true 
						});
						haruka.sendMessage(m.chat, { 
							text: `Ketik *.menu* untuk melihat menu yang tersedia dan pilih fitur yang kamu butuhkan! 💬`, 
							ai: true 
						});
					}
				}
			}
		}

		if (!haruka.public) {
			if (!isCreator && !m.key.fromMe) return;
		};

		if (db.data.settings[botNumber].online) {
			if (command) {
				haruka.sendPresenceUpdate('unavailable', m.chat);
			}
		}

		if (db.data.settings[botNumber].autoread) {
			haruka.readMessages([m.key]);
		}

		if (db.data.settings[botNumber].autobio) {
			haruka.updateProfileStatus(`${botName} Telah Berjalan Selama ${runtime(process.uptime())}`).catch(_ => _);
		}

		if (db.data.settings[botNumber].autorecordtype) {
			if (command) {
				let mix = ['composing', 'recording'];
				let mix2 = mix[Math.floor(mix.length * Math.random())];
				haruka.sendPresenceUpdate(mix2, m.chat);
			}
		}

		if (db.data.settings[botNumber].autorecord) {
			if (command) {
				let mix = ['recording'];
				let mix2 = mix[Math.floor(mix.length * Math.random())];
				haruka.sendPresenceUpdate(mix2, m.chat);
			}
		}

		if (db.data.settings[botNumber].autotype) {
			if (command) {
				let pos = ['composing'];
				haruka.sendPresenceUpdate(pos, m.chat);
			}
		}

		if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
			return haruka.updateBlockStatus(m.sender, 'block');
		}

		if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true) { 
			if (isCreator || isAdmins || !isBotAdmins) return;
			haruka.sendMessage(m.chat, { text: `Maaf, kamu akan dihapus karena admin/owner grup telah mengaktifkan anti-nomor asing, hanya kode negara +${antiforeignnumber} yang boleh bergabung` }, { quoted: m });
			await sleep(2000);
			await haruka.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
		}

		let list = []
		for (let i of owner) {
			list.push({
				displayName: await haruka.getName(i),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await haruka.getName(i)}\nFN:${await haruka.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
			})
		}

		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.data.users)
			for (let jid of user) {
				const limitUser = db.data.users[jid].vip ? global.limit.vip : checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
				db.data.users[jid].limit = limitUser
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		});

		if (m.message) {
			console.log(chalk.black.bgWhite('[ MESSAGE ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ FROM ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
		};

		if (db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
			let val = { ...m };
			let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message;
			delete msg[Object.keys(msg)[0]].viewOnce;
			val.message = msg;
			await haruka.sendMessage(m.chat, { 
				forward: val 
			}, { 
				quoted: m 
			});
		}

		if (db.data.chats[m.chat].antibot) {
			if (m.isBaileys) {
				if (m.key.fromMe || isAdmins || isCreator || !isBotAdmins) return
				await haruka.sendMessage(m.chat, { delete: m.key });
				haruka.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		};

		if (db.data.chats[m.chat].antispam) {
			if (m.isGroup && m.message && isFiltered(m.chat)) {
				console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'dari', color(m.pushName));
				return await haruka.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		if (db.data.chats[m.chat].antimedia && isMedia) {
			if (isCreator || isAdmins || !isBotAdmins){
			} else {
				return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
			}
		}

		if (db.data.chats[m.chat].image && m.mtype) {
			if (m.mtype === "imageMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antivideo && m.mtype) {
			if (m.mtype === "videoMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antisticker && m.mtype) {
			if (m.mtype === "stickerMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antiaudio && m.mtype) {
			if (m.mtype === "audioMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antilocation && m.mtype) {
			if (m.mtype === "locationMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].antidocument && m.mtype) {
			if (m.mtype === "documentMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].anticontact && m.mtype) {
			if (m.mtype === "contactMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return haruka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
				}
			}
		}

		if (db.data.chats[m.chat].badword) {
			for (let bak of bad) {
				if (budy === bak) {
					let baduser = await db.data.users[m.sender].badword;
					haruka.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.key.id,
							participant: m.key.participant
						}
					});
				}
			}
		}

		if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd) {
			try {
				if (budy.match(`instagram.com`)) {
					await haruka.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`);
					haruka.sendMessage(m.chat, { video: { url: anu.result.media }, caption: `Auto Download ✅` }, { quoted: m });
					await haruka.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`tiktok.com`)) {
					await haruka.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`);
					haruka.sendMessage(m.chat, { video: { url: anu.result.Medium.url }, caption: `Auto Download ✅` }, { quoted: m });
					await haruka.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`facebook.com`)) {
					await haruka.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`);
					haruka.sendMessage(m.chat, { video: { url: anu.result.video_sd }, caption: `Auto Download ✅` }, { quoted: m });
					await haruka.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				} else if (budy.match(`youtube.com|youtu.be`)) {
					await haruka.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
					let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`);
					haruka.sendMessage(m.chat, { video: { url: anu.result.result }, caption: `` }, { quoted: m });
					await haruka.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
				}
			} catch (err) {
				await haruka.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
			}
		}

		if (db.data.settings[botNumber].autosticker) {
			if (m.key.fromMe) return;
			if (m.isGroup) return;

			if (/image/.test(mime) && !/webp/.test(mime)) {
				let mediac = await haruka.downloadAndSaveMediaMessage(quoted);
				haruka.sendImageAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author });
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return;
				let mediac = await haruka.downloadAndSaveMediaMessage(quoted);
				haruka.sendVideoAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author });
			}
		}

		if (db.data.settings[botNumber].safesearch && command && !m.key.fromMe && !isCreator) {
			if (budy.match(/colmek|coli|desah|bokep|tobrut|seksi|sex|sexy|memek|kontol|titit|telanjang|ngentod|ngentot|ngewe|ewe|ewean/i)) {
				newReply(`🚫 Ups, kata tersebut dilarang di sini ya, kak! Mari jaga lingkungan chat ini tetap positif dan nyaman untuk semua orang. 😊`);
				return;
			}
		}

		if (!isCreator && !m.key.fromMe && m.message) {
			if (budy.match(`@${ownerNumber}`)) {
				await haruka.sendMessage(m.chat, { 
					text: `👋 Hai kak! Sepertinya kakak lagi butuh bantuan dari *${ownerName}*, ya?\n\nOwner mungkin lagi sibuk nih, tapi tenang aja, nanti bakal dibales secepatnya! ✨ Sabar yaa~ 😊`
				}, {
					quoted: m
				});
			}
		};

		if (db.data.chats[m.chat].antilinkgc) {
			if (budy.match(`chat.whatsapp.com`)) {
				if (isAdmins) return
				if (m.key.fromMe) return
				if (isCreator) return

				await haruka.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.key.id,
						participant: m.key.participant
					}
				});
			}
		}

		if (db.data.chats[m.chat].antilink) {
			const linkPatterns = [
				/http/i,
				/https/i,
				/www\./i,
				/wa\.me/i,
				/t\.me/i,
				/bit\.ly/i,
				/goo\.gl/i,
				/y2u\.be/i,
				/discord\.gg/i,
				/telegram\.me/i
			];
			const containsLink = linkPatterns.some(pattern => pattern.test(budy));
			if (containsLink) {
				if (isAdmins || m.key.fromMe || isCreator) return
				await haruka.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.key.id,
						participant: m.key.participant
					}
				});
			}
		}

		if (m.isGroup) {
			if (db.data.chats[m.chat].mute && !isCreator) {
				return
			}
		}

		const feature = () => {
			var mytext = fs.readFileSync("./case.js").toString();
			var numUpper = (mytext.match(/case '/g) || []).length;
			return numUpper;
		}

		for (let i of audionye) {
			if (budy === i) {
				let audiobuffy = fs.readFileSync(`./media/${i}.mp3`);
				haruka.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
			}
		}

		for (let i of setiker) {
			if (budy === i) {
				let stickerbuffy = fs.readFileSync(`./media/${i}.webp`);
				haruka.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m });
			}
		}

		for (let i of imagenye) {
			if (budy === i) {
				let imagebuffy = fs.readFileSync(`./media/${i}.jpg`);
				haruka.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
			}
		}

		for (let i of videonye) {
			if (budy === i) {
				let videobuffy = fs.readFileSync(`./media/${i}.mp4`);
				haruka.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
			}
		}

		if (m.isGroup && db.data.chats[m.chat].liststore[body]) {
			let teks = db.data.chats[m.chat].liststore[body].response
			if (db.data.chats[m.chat].liststore[body].img) {
				haruka.sendMessage(m.chat, {
					image: {
						url: db.data.chats[m.chat].liststore[body].img
					},
					caption: teks
				}, {
					quoted: m
				})
			} else if (db.data.chats[m.chat].liststore[body].video) {
				haruka.sendMessage(m.chat, {
					video: {
						url: db.data.chats[m.chat].liststore[body].video
					},
					caption: teks
				}, {
					quoted: m
				})
			} else {
				const contentText = {
					text: teks,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							containsAutoReply: true,
							title: `Store List 🛍️`,
							body: botName,
							previewType: "PHOTO",
							thumbnailUrl: `https://pomf2.lain.la/f/sdzl7dc2.jpg`,
							sourceUrl: wagc
						}
					}
				};
				haruka.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
		}

		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
			let hash = db.data.sticker[m.msg.fileSha256.toString('base64')];
			let { text, mentionedJid } = hash;
			let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
				userJid: haruka.user.id,
				quoted: m.quoted && m.quoted.fakeObj
			});
			messages.key.fromMe = areJidsSameUser(m.sender, haruka.user.id);
			messages.key.id = m.key.id;
			messages.pushName = m.pushName;
			if (m.isGroup) messages.participant = m.sender;
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			};
			haruka.ev.emit('messages.upsert', msg);
		}

		if (m.message && !isUser) {
			userNumber.push(m.sender)
			fs.writeFileSync('./src/data/role/user.json', JSON.stringify(userNumber, null, 2))
		}

		if (m.isGroup && !m.key.fromMe) {
			let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
			for (let ment of mentionUser) {
				if (checkAfkUser(ment, afk)) {
					let getId2 = getAfkId(ment, afk)
					let getReason2 = getAfkReason(getId2, afk)
					let getTimee = Date.now() - getAfkTime(getId2, afk)
					let anu2 = ms(getTimee)
					newReply(
						`Eh, jangan di-tag dulu ya! Dia lagi AFK nih~ 🤭\n\n` +
						`*Alasan:* ${getReason2}\n` +
						`*Udah sejak:* ${anu2.hours} Jam, ${anu2.minutes} Menit, ${anu2.seconds} Detik`
					)
				}
			}

			if (checkAfkUser(m.sender, afk)) {
				let getId = getAfkId(m.sender, afk)
				let getReason = getAfkReason(getId, afk)
				let getTime = Date.now() - getAfkTime(getId, afk)
				let anu = ms(getTime)
				afk.splice(getAfkPosition(m.sender, afk), 1)
				fs.writeFileSync('./src/afk.json', JSON.stringify(afk))
				haruka.sendTextWithMentions(
					m.chat, 
					`Yeay! @${m.sender.split('@')[0]} udah balik dari AFK nih~ 🥳\n\n` +
					`*Alasan:* ${getReason}\n` +
					`*Selama:* ${anu.hours} Jam, ${anu.minutes} Menit, ${anu.seconds} Detik`, 
					m
				)
			}
		}

		haruka.autosholat = haruka.autosholat ? haruka.autosholat : {};
		if (!(m.chat in haruka.autosholat)) {
			let jadwalSholat = {
				Fajr: "03:30",
				Dhuhr: "11:50",
				Asr: "15:30",
				Maghrib: "18:50",
				Isha: "20:10",
			};
			const date = new Date((new Date).toLocaleString("en-US", {
				timeZone: "Asia/jakarta"
			}));
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

			for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
				if (timeNow === waktu) {
					haruka.autosholat[m.chat] = [
						haruka.sendMessage(m.chat, {
							text: `📢 *Waktu Sholat ${sholat} Telah Tiba!* 🕌\n\n"Sesungguhnya sholat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman." *(QS. An-Nisa: 103)*\n\nSegeralah tinggalkan aktivitasmu sejenak, ambillah air wudhu, dan tunaikan sholat tepat pada waktunya. Jangan sampai kita termasuk orang yang lalai.`,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: `Selamat Beribadah, Kak! 🕌`,
									body: 'jaktim, jakarta, Japan',
									previewType: "PHOTO",
									thumbnailUrl: 'https://files.catbox.moe/0xvhqu.jpg',
									sourceUrl: wagc
								}
							}
						}),
						setTimeout(() => {
							delete haruka.autosholat[m.chat];
						}, 60000)
					];
				}
			}
		};

		if (command) {
			if (isFiltered(m.sender) && !isCreator && !m.key.fromMe) return newReply(`Don't spam! please give pause for a few seconds.`)
			addFilter(m.sender);
		}

		if (isCmd) {
			if (command) {
				const code = fs.readFileSync("./case.js", "utf8")
				var regex = /case\s+'([^']+)':/g;
				var matches = [];
				var match;
				while ((match = regex.exec(code))) {
					matches.push(match[1]);
				}
				const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
				if (!help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
					let mean = didyoumean(command, help);
					let sim = similarity(command, mean);
					let similarityPercentage = parseInt(sim * 100);
					if (mean && command.toLowerCase() !== mean.toLowerCase()) {
						const pesanTemplate = `*Eits, kayaknya ada yang salah nih...* 😅\n_Mungkin yang kakak maksud itu:_\n\n➠ *${prefix + mean}* (${similarityPercentage}%)\n\n_Coba ketuk *Menu* buat lihat daftar lengkapnya ya!_ 🌟`;
						haruka.sendMessage(m.chat,{
							image: thumb,
							caption: pesanTemplate,
							footer: botName,
							buttons: [
								{
									buttonId: prefix + mean,
									buttonText: {
										displayText: prefix + mean
									}
								},
								{
									buttonId: `${prefix}menu`,
									buttonText: {
										displayText: "📜 Kembali ke Menu"
									}
								}
							],
							viewOnce: true,
						}, {
							quoted: m
						});
					}
				}
			}
		};

		const JwbTrue = (tebak, exp, tambahan) => {
			let teks = `*🎮 ${tebak} 🎮*\n\nKiw Kiww Bener 🎉\n+Rp ${exp} saldo` + tambahan
			const context = {
				text: teks,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999, 
					isForwarded: true, 
						forwardedNewsletterMessageInfo: {
						newsletterName: saluranName,
						newsletterJid: saluran,
					},
					externalAdReply: {
						title: `Jawaban Benar 🥳`,
						body: tebak,
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/f8749fccf9b3320cd6307.png`,
						sourceUrl: wagc
					}
				}
			};
			return haruka.sendMessage(m.chat, context, {
				quoted: m,
			});
		}

		const waktuHabis = (jawaban) => {
			let teks = `Kroco, Waktu Abis🥳\n\n*Jawaban:*\n${jawaban}`
			const context = {
				text: teks,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999, 
					isForwarded: true, 
					forwardedNewsletterMessageInfo: {
						newsletterName: saluranName,
						newsletterJid: saluran,
					},
					externalAdReply: {
						title: `Waktu Habis ⏰`,
						body: "Dasar Kroco",
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png`,
						sourceUrl: wagc
					}
				}
			};
			return haruka.sendMessage(m.chat, context, {
				quoted: m,
			});
		}

		if (tebakgame[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgame[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakgame[m.chat][2]
					JwbTrue("Tebak Game", tebakgame[m.chat][2], `\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgame[m.chat][3])
					delete tebakgame[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakhero[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakhero[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakhero[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakhero[m.chat][2]
					JwbTrue("Tebak Hero", tebakhero[m.chat][2], `\n\nKirim perintah .tebakhero\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhero[m.chat][3])
					delete tebakhero[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakff[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakff[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakff[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakff[m.chat][2]
					JwbTrue("Tebak Free Fire", tebakff[m.chat][2], `\n\nKirim perintah .tebakff\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakff[m.chat][3])
					delete tebakff[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakkabupaten[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkabupaten[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkabupaten[m.chat][2]
					JwbTrue("Tebak Kabupaten", tebakkabupaten[m.chat][2], `\n\nKirim perintah .tebakkabupaten\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkabupaten[m.chat][3])
					delete tebakkabupaten[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakjkt48[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakjkt48[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakjkt48[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakjkt48[m.chat][2]
					JwbTrue("Tebak JKT48", tebakjkt48[m.chat][2], `\n\nKirim perintah .tebakjkt48\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakjkt48[m.chat][3])
					delete tebakjkt48[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakhewan[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakhewan[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakhewan[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakhewan[m.chat][2]
					JwbTrue("Tebak Hewan", tebakhewan[m.chat][2], `\n\nKirim perintah .tebakhewan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhewan[m.chat][3])
					delete tebakhewan[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakml[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakml[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakml[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakml[m.chat][2]
					JwbTrue("Tebak Sound ML", tebakml[m.chat][2], `\n\nKirim perintah .tebakml\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakml[m.chat][3])
					delete tebakml[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakchara[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakchara[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakchara[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakchara[m.chat][2]
					JwbTrue("Tebak Anime", tebakchara[m.chat][2], `\n\nKirim perintah .tebakchara\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakchara[m.chat][3])
					delete tebakchara[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebaklogo[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaklogo[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaklogo[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaklogo[m.chat][2]
					JwbTrue("Tebak Logo", tebaklogo[m.chat][2], `\n\nKirim perintah .tebaklogo\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklogo[m.chat][3])
					delete tebaklogo[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakaplikasi[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakaplikasi[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakaplikasi[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakaplikasi[m.chat][2]
					JwbTrue("Tebak Aplikasi", tebakaplikasi[m.chat][2], `\n\nKirim perintah .tebakaplikasi\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakaplikasi[m.chat][3])
					delete tebakaplikasi[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakgambar[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakgambar[m.chat][2]
					JwbTrue("Tebak Gambar", tebakgambar[m.chat][2], `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgambar[m.chat][3])
					delete tebakgambar[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkata[m.chat][2]
					JwbTrue("Tebak Kata", tebakkata[m.chat][2], `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkata[m.chat][3])
					delete tebakkata[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (asahotak[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == asahotak[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += asahotak[m.chat][2]
					JwbTrue("Asah Otak", asahotak[m.chat][2], `\n\nKirim perintah .asahotak\nuntuk bermain lagi 🎮`)
					clearTimeout(asahotak[m.chat][3])
					delete asahotak[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (lengkapikalimat[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == lengkapikalimat[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += lengkapikalimat[m.chat][2]
					JwbTrue("Lengkapi Kalimat", lengkapikalimat[m.chat][2], `\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(lengkapikalimat[m.chat][3])
					delete lengkapikalimat[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakbendera[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakbendera[m.chat][2]
					JwbTrue("Tebak Bendera", tebakbendera[m.chat][2], `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakbendera[m.chat][3])
					delete tebakbendera[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (caklontong[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == caklontong[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += caklontong[m.chat][2]
					JwbTrue("Cak Lontong", caklontong[m.chat][2], `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
					clearTimeout(caklontong[m.chat][3])
					delete caklontong[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (susunkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == susunkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += susunkata[m.chat][2]
					JwbTrue("Susun Kata", susunkata[m.chat][2], `\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮`)
					clearTimeout(susunkata[m.chat][3])
					delete susunkata[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkalimat[m.chat][2]
					JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2], `\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkalimat[m.chat][3])
					delete tebakkalimat[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (siapaaku[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == siapaaku[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += siapaaku[m.chat][2]
					JwbTrue("Tebak Siapa", siapaaku[m.chat][2], `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
					clearTimeout(siapaaku[m.chat][3])
					delete siapaaku[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tekateki[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tekateki[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tekateki[m.chat][2]
					JwbTrue("Teka Teki", tekateki[m.chat][2], `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
					clearTimeout(tekateki[m.chat][3])
					delete tekateki[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebakkimia[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
				jawaban = json.unsur.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkimia[m.chat][2]
					JwbTrue("Teka Kimia", tebakkimia[m.chat][2], `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkimia[m.chat][3])
					delete tebakkimia[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebaklirik[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaklirik[m.chat][2]
					JwbTrue("Teka Lirik", tebaklirik[m.chat][2], `\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklirik[m.chat][3])
					delete tebaklirik[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaktebakan[m.chat][2]
					JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2], `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaktebakan[m.chat][3])
					delete tebaktebakan[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else reactionMessage('❌');
			}
		}

		async function cekgame(gamejid) {
			if (tekateki[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tekateki[gamejid][0]
				})
				return true
			} else if (caklontong[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: caklontong[gamejid][0]
				})
				return true
			} else if (susunkata[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: susunkata[gamejid][0]
				})
				return true
			} else if (mathgame[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal Mathgame belum selesai"
				}, {
					quoted: mathgame[gamejid][0]
				})
				return true
			} else if (tebaktebakan[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaktebakan[gamejid][0]
				})
				return true
			} else if (tebaklirik[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaklirik[gamejid][0]
				})
				return true
			} else if (tebakkimia[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkimia[gamejid][0]
				})
				return true
			} else if (siapaaku[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: siapaaku[gamejid][0]
				})
				return true
			} else if (tebakkalimat[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkalimat[gamejid][0]
				})
				return true
			} else if (tebakbendera[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakbendera[gamejid][0]
				})
				return true
			} else if (tebakkata[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkata[gamejid][0]
				})
				return true
			} else if (asahotak[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: asahotak[gamejid][0]
				})
				return true
			} else if (lengkapikalimat[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: lengkapikalimat[gamejid][0]
				})
				return true
			} else if (tebakgame[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakgame[gamejid][0]
				})
				return true
			} else if (tebakhero[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakhero[gamejid][0]
				})
				return true
			} else if (tebakff[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakff[gamejid][0]
				})
				return true
			} else if (tebakkabupaten[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkabupaten[gamejid][0]
				})
				return true
			} else if (tebakjkt48[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakjkt48[gamejid][0]
				})
				return true
			} else if (tebakhewan[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakhewan[gamejid][0]
				})
				return true
			} else if (tebakml[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakml[gamejid][0]
				})
				return true
			} else if (tebakchara[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakchara[gamejid][0]
				})
				return true
			} else if (tebaklogo[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaklogo[gamejid][0]
				})
				return true
			} else if (tebakaplikasi[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakaplikasi[gamejid][0]
				})
				return true
			} else if (tebakgambar[gamejid]) {
				haruka.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakgambar[gamejid][0]
				})
				return true
			} else {
				return false
			}
		}

		switch (command) {		
			case 'tebakgambar': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgambar[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgambar[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgambar[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakgame': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgame[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgame[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgame[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakhero': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://api.haruka.my.id/api/tebakhero')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakhero[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah hero?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakhero[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakhero[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakff': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://api.haruka.my.id/api/tebakff')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakff[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Karakter Apa Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakff[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakff[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkabupaten': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebakkabupaten.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakkabupaten[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Logo Kabupaten Manakah ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakkabupaten[m.chat]) {
								waktuHabis(result.title)
								delete tebakkabupaten[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakjkt48': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/memberjkt48.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakjkt48[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Siapakah Nama Member JKT48 Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakjkt48[m.chat]) {
								waktuHabis(result.name)
								delete tebakjkt48[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakhewan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebakhewan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakhewan[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Hewan Apakah Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakhewan[m.chat]) {
								waktuHabis(result.title)
								delete tebakhewan[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakhero2':
			case 'tebakml': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebakhero2.json')
					let result = await pickRandom(anu)
					let audio = await pickRandom(result.url)
					console.log("Jawaban: " + result.title)
					let key = await haruka.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					})
					tebakml[m.chat] = [
						await haruka.sendMessage(m.chat, {
							text: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: key
						}), result, 250,
						setTimeout(() => {
							if (tebakml[m.chat]) {
								waktuHabis(result.title)
								delete tebakml[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakanime':
			case 'tebakchara': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let res = await fetchJson('https://www.haruka.my.id/cdn/game/characters.json')
					let anu = res.data
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakchara[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.images.jpg.image_url
							},
							caption: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakchara[m.chat]) {
								waktuHabis(result.name)
								delete tebakchara[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaklogo': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebaklogo.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklogo[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `*Logo Apa Ini?*\n\n${result.deskripsi}\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebaklogo[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklogo[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakaplikasi': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/tebakaplikasi.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakaplikasi[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.image
							},
							caption: `Gambar diatas adalah aplikasi?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakaplikasi[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakaplikasi[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkata[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'asahotak': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/asahotak.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					asahotak[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (asahotak[m.chat]) {
								waktuHabis(result.jawaban)
								delete asahotak[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'lengkapikalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.haruka.my.id/cdn/game/lengkapikalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					lengkapikalimat[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (lengkapikalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete lengkapikalimat[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakbendera': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakbendera[m.chat] = [
						await haruka.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakbendera[m.chat]) {
								waktuHabis(result.name)
								delete tebakbendera[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkalimat[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkalimat[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaksiapa': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					siapaaku[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (siapaaku[m.chat]) {
								waktuHabis(result.jawaban)
								delete siapaaku[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebakkimia': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.unsur)
					tebakkimia[m.chat] = [
						await haruka.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkimia[m.chat]) {
								waktuHabis(result.unsur)
								delete tebakkimia[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaklirik': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklirik[m.chat] = [
						await haruka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebaklirik[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklirik[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tebaktebakan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaktebakan[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebaktebakan[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaktebakan[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'susunkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					susunkata[m.chat] = [
						await haruka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (susunkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete susunkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'caklontong': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					caklontong[m.chat] = [
						await haruka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (caklontong[m.chat]) {
								waktuHabis(result.jawaban)
								delete caklontong[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tekateki': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tekateki[m.chat] = [
						await haruka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tekateki[m.chat]) {
								waktuHabis(result.jawaban)
								delete tekateki[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'bantuan': {
				try {
					if (m.chat in tebakgambar) {
						let json = tebakgambar[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakgame) {
						let json = tebakgame[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhero) {
						let json = tebakhero[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakff) {
						let json = tebakff[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkabupaten) {
						let json = tebakkabupaten[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakjkt48) {
						let json = tebakjkt48[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhewan) {
						let json = tebakhewan[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakml) {
						let json = tebakml[m.chat][1]
						m.reply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakchara) {
						let json = tebakchara[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklogo) {
						let json = tebaklogo[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakaplikasi) {
						let json = tebakaplikasi[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkata) {
						let json = tebakkata[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in asahotak) {
						let json = asahotak[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in lengkapikalimat) {
						let json = lengkapikalimat[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakbendera) {
						let json = tebakbendera[m.chat][1]
						m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkalimat) {
						let json = tebakkalimat[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in siapaaku) {
						let json = siapaaku[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkimia) {
						let json = tebakkimia[m.chat][1]
						m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklirik) {
						let json = tebaklirik[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaktebakan) {
						let json = tebaktebakan[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in susunkata) {
						let json = susunkata[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in caklontong) {
						let json = caklontong[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tekateki) {
						let json = tekateki[m.chat][1]
						m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'nyerah': {
				try {
					if (m.chat in siapaaku) {
						clearTimeout(siapaaku[m.chat][3])
						delete siapaaku[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkalimat) {
						clearTimeout(tebakkalimat[m.chat][3])
						delete tebakkalimat[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakbendera) {
						clearTimeout(tebakbendera[m.chat][3])
						delete tebakbendera[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkata) {
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in asahotak) {
						clearTimeout(asahotak[m.chat][3])
						delete asahotak[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in lengkapikalimat) {
						clearTimeout(lengkapikalimat[m.chat][3])
						delete lengkapikalimat[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakgame) {
						clearTimeout(tebakgame[m.chat][3])
						delete tebakgame[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakhero) {
						clearTimeout(tebakhero[m.chat][3])
						delete tebakhero[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakff) {
						clearTimeout(tebakff[m.chat][3])
						delete tebakff[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkabupaten) {
						clearTimeout(tebakkabupaten[m.chat][3])
						delete tebakkabupaten[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakjkt48) {
						clearTimeout(tebakjkt48[m.chat][3])
						delete tebakjkt48[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakhewan) {
						clearTimeout(tebakhewan[m.chat][3])
						delete tebakhewan[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakml) {
						clearTimeout(tebakml[m.chat][3])
						delete tebakml[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakchara) {
						clearTimeout(tebakchara[m.chat][3])
						delete tebakchara[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaklogo) {
						clearTimeout(tebaklogo[m.chat][3])
						delete tebaklogo[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakaplikasi) {
						clearTimeout(tebakaplikasi[m.chat][3])
						delete tebakaplikasi[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkimia) {
						clearTimeout(tebakkimia[m.chat][3])
						delete tebakkimia[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaklirik) {
						clearTimeout(tebaklirik[m.chat][3])
						delete tebaklirik[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaktebakan) {
						clearTimeout(tebaktebakan[m.chat][3])
						delete tebaktebakan[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in susunkata) {
						clearTimeout(susunkata[m.chat][3])
						delete susunkata[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in caklontong) {
						clearTimeout(caklontong[m.chat][3])
						delete caklontong[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakgambar) {
						clearTimeout(tebakgambar[m.chat][3])
						delete tebakgambar[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tekateki) {
						clearTimeout(tekateki[m.chat][3])
						delete tekateki[m.chat]
						return haruka.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'backup': {
				if (!isCreator) return newReply(mess.owner);
				let sender = m.mentionedJid[0] || m.sender || slimecode.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
				let date = new Date();
				let filename = await generateRandomHexName(32);
				const { execSync } = require('child_process');
				const ls = (await execSync('ls')).toString().split('\n').filter((cek) => cek !== 'node_modules' && cek !== 'package-lock.json' && cek !== 'yarn.lock' && cek !== '');
				await newReply('Hasil backup akan dikirim lewat chat pribadi ya!');
				await execSync(`zip -r ${filename}.zip ${ls.join(' ')}`);
				const sentMessage = await haruka.sendMessage(sender, {
					document: await fs.readFileSync(`./${filename}.zip`),
					mimetype: 'application/zip',
					fileName: `${filename}.zip`,
					caption: 'Berhasil! Silakan download dan simpan file backup-nya ya.'
				});
				await execSync(`rm -rf ${filename}.zip`);
				console.log(`${filename}.zip telah dihapus dari file lokal.`);
			}
			break;

			case 'jadibot': {
				if (!isCreator && !isPremium) return newReply(mess.premium)
				await reactionMessage('✅');
				if (m.key.fromMe) return
				try {
					await jadibot(haruka, m, m.sender)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'stopjadibot': {
				if (!isCreator && !isPremium) return newReply(mess.premium)
				await reactionMessage('✅');
				if (m.key.fromMe) return
				try {
					await stopjadibot(haruka, m, m.sender)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'listjadibot': {
				if (!isCreator && !isPremium) return newReply(mess.premium)
				if (m.key.fromMe) return
				try {
					listjadibot(haruka, m)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'speed': case 'ping': {
				try {
					const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce((last, cpu, _, { length }) => {
						last.total += cpu.total;
						last.speed += cpu.speed / length;
						last.times.user += cpu.times.user;
						last.times.nice += cpu.times.nice;
						last.times.sys += cpu.times.sys;
						last.times.idle += cpu.times.idle;
						last.times.irq += cpu.times.irq;
						return last;
					}, {
						speed: 0,
						total: 0,
						times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
					});
					let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let osInfo = await nou.os.oos();
					let storage = await nou.drive.info();
					let respon = `✨ *Informasi Bot WhatsApp* ✨\n\n📡 *Jaringan Server*\n · *Ping:* ${latensi.toFixed(4)} Detik\n\n🖥️ *Informasi Server*\n · *OS:* ${osInfo}\n · *IP Address:* ${nou.os.ip()}\n · *Tipe OS:* ${nou.os.type()}\n\n💾 *RAM:*\n · *Total:* ${formatp(os.totalmem())}\n · *Digunakan:* ${formatp(os.totalmem() - os.freemem())}\n\n📂 *Penyimpanan:*\n · *Total:* ${storage.totalGb} GB\n · *Digunakan:* ${storage.usedGb} GB (${storage.usedPercentage}%)\n · *Tersedia:* ${storage.freeGb} GB (${storage.freePercentage}%)\n\n⏳ *Waktu Aktif Server:*\n${runtime(process.uptime())}\n\n⚙️ *CPU (${cpus.length} Core)*\n · *Model:* ${cpus[0].model.trim()}\n · *Kecepatan:* ${cpu.speed} MHz\n${Object.keys(cpu.times).map(type => ` · *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n\nTetap semangat ya kak! Mora selalu siap membantu 🥰`;
					await haruka.sendMessage(m.chat, {
						text: respon,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 999999, 
							isForwarded: true, 
							forwardedNewsletterMessageInfo: {
								newsletterName: saluranName,
								newsletterJid: saluran,
							},
							externalAdReply: {
								title: ucapanWaktu,
								thumbnailUrl: thumbUrl,
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, { quoted: m });
				} catch (err) {
					console.error(err);
				}
			}
			break;

			case 'addbadword': 
			case 'addbd': {
				if (!isCreator) return newReply(mess.owner);
				if (!groupAdmins) return newReply(mess.admin);
				if (args.length < 1) return newReply(`📝 *Kirim perintah:* ${prefix}addbadword [kata kasar]\nContoh: ${prefix}addbadword asshole`);
				bad.push(q);
				fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
				newReply('✅ *Kata kasar berhasil ditambahkan ke daftar!*');
			}
			break;

			case 'delbadword': 
			case 'deldb': {
				if (!isCreator) return newReply(mess.owner);
				if (!groupAdmins) return newReply(mess.admin);
				if (args.length < 1) return newReply(`📝 *Kirim perintah:* ${prefix}delbadword [kata kasar]\nContoh: ${prefix}delbadword asshole`);
				bad.splice(q);
				fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
				newReply('✅ *Kata kasar berhasil dihapus dari daftar!*');
			}
			break;

			case 'resetuser':
			case 'resetdbuser': {
				if (!isCreator) return newReply(mess.owner);
				newReply(`Berhasil menghapus semua data pengguna dari database.`);
				db.data.users = [];
			}
			break;

			case 'resethit':
			case 'resettotalhit': {
				if (!isCreator) return newReply(mess.owner);
				global.db.data.settings[botNumber].totalhit = 0;
				newReply(mess.done);
			}
			break;

			case 'setmenu': {
				if (!isCreator) return newReply(mess.owner);
				newReply(`Fitur *${command}* sudah tidak dapat digunakan lagi.`);
			}
			break;

			case 'setreply': {
				if (!isCreator) return newReply(mess.owner);
	
				if (!text) {
					return newReply(
						`Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} v1`
					);
				}

				if (text.startsWith('v')) {
					typereply = text; // Set tipe reply
					return newReply(mess.done); // Berikan konfirmasi sukses
				}

				// Jika input tidak valid
				return newReply(
					`Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} v1`
				);
			}
			break;

			case 'statustext':
			case 'upswtext':
			case 'upswteks': {
				if (!isCreator) return newReply(mess.owner);
				if (!q) return newReply('Teksnya mana?');
				await haruka.sendMessage('status@broadcast', { 
					text: q 
				}, { 
					backgroundColor: '#FF000000', 
					font: 3, 
					statusJidList: Object.keys(db.data.users) 
				});
				newReply('Sukses kirim status teks!');
			}
			break;

			case 'statusvideo':
			case 'upswvideo': {
				if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

				if (/video/.test(mime)) {
					// Unduh video dari pesan yang di-reply
					var videosw = await haruka.downloadAndSaveMediaMessage(quoted);

					// Dapatkan informasi default untuk caption
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;

					// Buat caption default
					let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
					`🎥 *Tipe Media:* ${mediaType}\n` +
					`⏰ *Waktu Dikirim:* ${sendTime}\n` +
					`👤 *Dikirim oleh:* ${sender}`;

					// Kirim video ke status WhatsApp
					await haruka.sendMessage('status@broadcast', {
						video: { url: videosw },
						caption: q ? q : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await newReply('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
				} else {
					newReply('⚠️ Tolong reply ke video dulu ya, Kak! 🎥');
				}
			}
			break;

			case 'statusimg':
			case 'statusimage':
			case 'upswimg': {
				if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

				if (/image/.test(mime)) {
					// Unduh gambar dari pesan yang di-reply
					var imagesw = await haruka.downloadAndSaveMediaMessage(quoted);

					// Dapatkan informasi default untuk caption
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;

					// Buat caption default
					let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
						`🖼️ *Tipe Media:* ${mediaType}\n` +
						`⏰ *Waktu Dikirim:* ${sendTime}\n` +
						`👤 *Dikirim oleh:* ${sender}`;

					// Kirim gambar ke status WhatsApp
					await haruka.sendMessage('status@broadcast', {
						image: { url: imagesw },
						caption: q ? q : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await newReply('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
				} else {
					newReply('⚠️ Tolong reply ke gambar dulu ya, Kak! 🖼️');
				}
			}
			break;

			case 'statusaudio':
			case 'upswaudio': {
				if (!isCreator) return newReply(mess.owner);
				if (/audio/.test(mime)) {
					var audiosw = await haruka.downloadAndSaveMediaMessage(quoted);
					await haruka.sendMessage('status@broadcast', {
						audio: { url: audiosw },
						mimetype: 'audio/mp4',
						ptt: true
					}, {
						backgroundColor: '#FF000000',
						statusJidList: Object.keys(db.data.users)
					});
					await newReply('Sukses kirim status audio!');
				} else {
					newReply('Reply audio dulu, ya!');
				}
			}
			break;

			case 'upsaluran': {
				if (!isCreator) return newReply(mess.owner)
				try {
					if (!mime && !text) {
						return newReply(`ah..ah..argz, kak! Kakak belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis Mora! ✨"
					if (/image/.test(mime)) {
						haruka.sendMessage(saluran, {
							image: media,
							caption: text ? text : defaultCaption,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnail: thumb,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						newReply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						haruka.sendMessage(saluran, {
							video: media,
							caption: text ? text : defaultCaption,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnail: thumb,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						newReply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						haruka.sendMessage(saluran, {
							audio: media,
							mimetype: mime,
							ptt: true,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnail: thumb,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						newReply(`🎵 Audio berhasil diunggah ke saluran, kak!`)
					} else if (/text/.test(mime) || text) {
						haruka.sendMessage(saluran, {
							text: text ? text : defaultCaption,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnail: thumb,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						newReply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					} else {
						newReply(`Hmm... Mora gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
					}
				} catch (error) {
					console.error(error)
					newReply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
			}
			break;

			case 'setimgmenu':
			case 'sim': {
				if (!isCreator) return newReply(mess.owner);
				let media = await haruka.downloadAndSaveMediaMessage(quoted);
				await fsx.copy(media, './media/icon.png');
				fs.unlinkSync(media);
				newReply('Gambar menu berhasil diset! 🎨');
			}
			break;

			case 'setvidmenu':
			case 'svm': 
			case 'setvgifmenu':
			case 'sgm': {
				if (!isCreator) return newReply(mess.owner);
				let media = await haruka.downloadAndSaveMediaMessage(quoted);
				await fsx.copy(media, './media/vidmenu.mp4');
				fs.unlinkSync(media);
				newReply('Video menu berhasil diset! 🎬');
			}
			break;

			case 'addtitle': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage: ${prefix + command} number|title`);
				nonya = text.split('|')[0];
				titlenya = text.split('|')[1];
				let oo = `${nonya}@s.whatsapp.net`;
				db.data.users[oo].title = titlenya;
				await newReply('Title berhasil ditambahkan! 🎉');
			}
			break;

			case 'deltitle': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage: ${prefix + command} number`);
				nonya = text.split(',')[0];
				let oo = `${nonya}@s.whatsapp.net`;
				db.data.users[oo].title = '';
				await newReply('Title berhasil dihapus! ✨');
			}
			break;

			case 'addlimit':
			case 'givelimit': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage: ${prefix + command} number|limit amount`);
				usernya = text.split('|')[0];
				limitnya = text.split('|')[1];
				let oo = `${usernya}@s.whatsapp.net`;
				db.data.users[oo].limit += limitnya;
				newReply('Limit berhasil ditambahkan! 🎯');
			}
			break;

			case 'dellimit': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage: ${prefix + command} number|limit amount`);
				usernya = text.split('|')[0];
				limitnya = text.split('|')[1];
				if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return newReply(`Limit dia kurang dari ${limitnya}`);
				db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya;
				newReply('Limit berhasil dikurangi! ✂️');
			}
			break;

			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh:\n${prefix + command} @tag|durasi(s/m/h/d)`);
				let [teks1, teks2] = text.split`|`;
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				const onWa = await haruka.onWhatsApp(nmrnya);
				if (!onWa.length > 0) return newReply('Nomor tersebut tidak terdaftar di WhatsApp! ❌');
				if (teks2) {
					addPremiumUser(nmrnya, teks2, premium);
					newReply(`✅ Berhasil menambahkan @${nmrnya.split('@')[0]} sebagai pengguna *Premium* selama *${teks2}*!`);
					db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.premium;
					db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.premium;
					db.data.users[nmrnya].premium = true;
					db.data.users[nmrnya].vip = true;
				} else {
					newReply(`Masukkan durasi yang valid!\nContoh: ${prefix + command} @tag|durasi(s/m/h/d)`);
				}
			}
			break;

			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh:\n${prefix + command} @tag`);
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (checkPremiumUser(nmrnya, premium)) {
					premium.splice(getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./src/data/role/premium.json', JSON.stringify(premium));
					newReply(`✅ Berhasil menghapus @${nmrnya.split('@')[0]} dari daftar *Premium*!`);
					db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.free;
					db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.free;
					db.data.users[nmrnya].premium = false;
					db.data.users[nmrnya].vip = false;
				} else {
					newReply(`⚠️ Pengguna @${nmrnya.split('@')[0]} bukan pengguna *Premium*!`);
				}
			}
			break;

			case 'listpremium': case 'listprem': {
				let txt = `*🌟 DAFTAR PENGGUNA PREMIUM 🌟*\n\n`;
				let men = [];
				if (premium.length === 0) {
					txt += `Tidak ada pengguna premium saat ini. 🫤`;
				} else {
					for (let i of premium) {
						men.push(i.id);
						txt += ` · *Nomor*: +${i.id.split('@')[0]}\n`;
						if (i.expired === 'PERMANENT') {
							txt += ` · *Kadaluwarsa*: PERMANEN ♾️\n\n`;
						} else {
							let anu = ms(i.expired - Date.now());
							txt += ` · *Kadaluwarsa*: ${anu.days}h, ${anu.hours}j, ${anu.minutes}m\n`;
							txt += ` · *Limit*: ${db.data.users[i.id].limit}\n`;
							txt += ` · *Uang*: Rp${db.data.users[i.id].uang.toLocaleString('id-ID')}\n\n`;
						}
					}
				}
				newReply(txt);
			}
			break;

			case 'addowner': {
				if (!isCreator) return newReply(mess.owner);
				if (!args[0]) return newReply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} ${ownerNumber}`);
				bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
				let ceknye = await haruka.onWhatsApp(bnnd);
				if (ceknye.length == 0) return newReply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
				owner.push(bnnd);
				fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
				newReply(`Nomor ${bnnd} sekarang menjadi Owner!!! 🎉`);
			}
			break;

			case 'delowner': {
				if (!isCreator) return newReply(mess.owner);
				if (!args[0]) return newReply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 628xxxxx`);
				ya = q.split("|")[0].replace(/[^0-9]/g, '');
				unp = owner.indexOf(ya);
				owner.splice(unp, 1);
				fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
				newReply(`Nomor ${ya} berhasil dihapus dari daftar owner! ❌`);
			}
			break;

			case 'listowner': {
				let teks = '┌──⭓「 *List Owner* 」\n│\n';
				for (let x of owner) {
					teks += `│⭔ ${x}\n`;
				}
				teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
				newReply(teks);
			}
			break;

			case 'delsession':
			case 'clearsession': {
				if (!isCreator) return newReply(mess.owner);
				fs.readdir("./session", async function(err, files) {
					if (err) {
						console.log('Gak bisa scan direktori: ' + err);
						return newReply('Gak bisa scan direktori nih: ' + err);
					}
					let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
						item.startsWith("m.sender-key") || item.startsWith("session-") || item.startsWith("app-state")
					);
					console.log(filteredArray.length);
					let teks = `Ditemukan ${filteredArray.length} file sampah nih\n\n`;
					if (filteredArray.length == 0) return newReply(teks);
					filteredArray.map(function(e, i) {
						teks += (i + 1) + `. ${e}\n`;
					});
					newReply(teks);
					await sleep(2000);
					newReply("Mau hapus file sampahnya... Tunggu yaa...");
					await filteredArray.forEach(function(file) {
						fs.unlinkSync(`./${sessionName}/${file}`);
					});
					await sleep(2000);
					newReply("Berhasil hapus semua file sampah di folder session! 🎉");
				});
			}
			break;

			case 'joingroup':
			case 'joingrup':
			case 'joingc':
			case 'join': {
				try {
					if (!isCreator) return newReply(mess.owner);
					if (!text) return newReply('Masukkan Link Grup yaa!');
					if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link-nya invalid nih!');
					let result = args[0].split('https://chat.whatsapp.com/')[1];
					haruka.groupAcceptInvite(result);
					await newReply(`Sudah gabung ke grup! 🎉`);
				} catch {
					newReply('Gagal gabung ke grup, coba lagi nanti!');
				}
			}
			break;

			case 'outgroup':
			case 'outgrup':
			case 'outgc':
			case 'out':
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				newReply('Selamat tinggal, semuanya 🥺');
				await haruka.groupLeave(m.chat);
			break;

			case 'joinchannel':
			case 'joinch': {
				try {
					if (!isCreator) return newReply(mess.owner);
					if (!text) return newReply('Masukkan Link saluran yaa!');
					if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link-nya invalid nih!');
					let data = args[0].split('https://whatsapp.com/channel/')[1];
					const res = await haruka.newsletterMetadata("invite", data);
					await haruka.newsletterFollow(res.id);
					newReply(`Sudah gabung ke saluran! 🎉`);
				} catch {
					newReply('Gagal gabung ke saluran, coba lagi nanti!');
				}
			}
			break;

			case 'outchannel':
			case 'outch': {
				try {
					if (!isCreator) return newReply(mess.owner);
					if (!text) return newReply('Masukkan Link saluran yaa!');
					if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link-nya invalid nih!');
					let data = args[0].split('https://whatsapp.com/channel/')[1];
					const res = await haruka.newsletterMetadata("invite", data);
					await haruka.newsletterUnfollow(res.id);
					newReply(`Sudah unfollow saluran! 🎉`);
				} catch {
					newReply('Gagal unfollow saluran, coba lagi nanti!');
				}
			}
			break;

			case 'getinfogc':
			case 'getinfogrup':
			case 'getinfogc': {
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply(`Kirim perintah ${prefix + command} _linkgrup_`);
				if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return newReply(mess.error);
				try {
					let result = args[0].split('https://chat.whatsapp.com/')[1];
					let data = await haruka.groupGetInviteInfo(result);
					let teks = `「 *GROUP METADATA* 」\n\n`;
					teks += ` · *ID :* ${data.id}\n`;
					teks += ` · *Name :* ${data.subject}\n`;
					teks += ` · *Owner :* ${data.owner}\n`;
					teks += ` · *Kirim Pesan :* ${data.announce ? 'Hanya Admin' : "Semua Orang"}\n`;
					teks += ` · *Persetujuan Admin :* ${data.joinApprovalMode ? 'Yes' : "No"}\n`;
					teks += ` · *Member Add Mode :* ${data.memberAddMode ? 'Yes' : "No"}\n`;
					teks += ` · *Desk :*\n${data.desc}\n\n`;
					teks += ` · *Anggota Teratas :*\n`;		
					for (let x of data.participants) {
						teks += ` · @${x.id.split('@')[0]}\n`;
					}
		
					let button = [{
						"name": "cta_copy",
						"buttonParamsJson": `{
							"display_text": "Salin ID",
							"id": "${data.id}",
							"copy_code": "${data.id}"
						}`
					}];
		
					sendButton(m.chat, '', teks, button, m);
				} catch (error) {
					newReply(mess.error);
				}
			}
			break;

			case 'getinfoch':
			case 'getinfochannel':
			case 'getchid': {
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply(`Kirim perintah ${prefix + command} _linkchannel_`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);

				function formatDate(timestamp) {
					const date = new Date(timestamp * 1000);
					const months = [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}

				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await haruka.newsletterMetadata("invite", result);
					let teks = `「 *NEWSLETTER METADATA* 」\n\n`;
					teks += ` · *Name :* ${data.name}\n`;
					teks += ` · *ID :* ${data.id}\n`;
					teks += ` · *Status :* ${data.state}\n`;
					teks += ` · *Dibuat Pada :* ${formatDate(data.creation_time)}\n`;
					teks += ` · *Subscribers :* ${data.subscribers}\n`;
					teks += ` · *Meta Verify :* ${data.verification}\n`;
					teks += ` · *React Emoji :* ${data.reaction_codes}\n`;
					teks += ` · *Description :*\n${data.description}\n`;

					let button = [{
						"name": "cta_copy",
						"buttonParamsJson": `{
							"display_text": "Salin ID",
							"id": "${data.id}",
							"copy_code": "${data.id}"
						}`
					}];

					sendButton(m.chat, '', teks, button, m);
				} catch (error) {
					newReply('*Data tidak ditemukan!* ☹️');
				}
			}
			break;

			case 'getsession': {
				if (!isCreator) return newReply(mess.owner);
				newReply('Tunggu sebentar yaa, aku lagi ambil file session-mu nih');
				let sesi = fs.readFileSync(`./${sessionName}/creds.json`);
				haruka.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'getdatabase': {
				if (!isCreator) return newReply(mess.owner);
				newReply('Tunggu sebentar yaa, aku lagi ambil file database-mu nih');
				let sesi = fs.readFileSync(`./src/${tempatDB}`);
				haruka.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: `${tempatDB}`
				}, {
					quoted: m
				});
			}
			break;

			case 'getdbuser': {
				if (!isCreator) return newReply(mess.owner);
				newReply('Tunggu sebentar yaa, aku lagi ambil file database usermu nih');
				let sesi = fs.readFileSync('./src/data/role/user.json');
				haruka.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'user.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'repo': case 'repository': {
				if (!text || !text.includes('/')) {
					return newReply(`Kakak bisa pakai format ini ya: *${prefix + command} username/repository*\n\nContoh: *${prefix + command} WhiskeySockets/Baileys*`);
				}
				const [username, repoName] = text.split('/');
				try {
					const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
					if (response.status === 200) {
						const repoData = response.data
						let formattedInfo = `📦 *Repository Name:* ${repoData.name}\n`;
						formattedInfo += `📝 *Description:* ${repoData.description}\n`;
						formattedInfo += `👤 *Owner:* ${repoData.owner.login}\n`;
						formattedInfo += `⭐ *Stars:* ${repoData.stargazers_count}\n`;
						formattedInfo += `🍴 *Forks:* ${repoData.forks_count}\n`;
						formattedInfo += `🔗 *URL:* ${repoData.html_url}\n\n`;
						formattedInfo += `🛠️ Pengen download ${command}? Ketik aja *${prefix}gitclone url* ya, kak! 🚀`;
						newReply(formattedInfo);
					} else {
						await newReply(`Tidak dapat mengambil informasi repositori.`)
					}
				} catch (error) {
					console.error(error)
					await newReply(`Repositori saat ini tidak tersedia.`)
				}
			}
			break;

			case 'myip':
			case 'ipbot':
				if (!isCreator) return newReply(mess.owner);
				var http = require('http');
				http.get({
					'host': 'api.ipify.org',
					'port': 80,
					'path': '/'
				}, function(resp) {
					resp.on('data', function(ip) {
						newReply("🔎 Oii, alamat IP publik aku nih: " + ip);
					})
				});
			break;

			case 'request':
			case 'reportbug': {
				if (!text) return newReply(`Contoh: ${prefix + command} hi dev, perintah ini gak jalan`);
				textt = `*| REQUEST/BUG |*`;
				teks1 = `\n\n*User* : @${m.sender.split("@")[0]}\n*Request/Bug* : ${text}`;
				teks2 = `\n\n*Hii ${pushname}, permintaan kamu sudah dikirim ke pemilik aku, tunggu sebentar ya...*`;
				for (let i of owner) {
					haruka.sendMessage(i + "@s.whatsapp.net", {
						text: textt + teks1,
						mentions: [m.sender],
					}, {
						quoted: m,
					});
				}
				haruka.sendMessage(m.chat, {
					text: textt + teks2 + teks1,
					mentions: [m.sender],
				}, {
					quoted: m,
				});
			}
			break;

			case 'shutdown':
				if (!isCreator) return newReply(mess.owner);
				newReply(`Aduh, mau ${command} nih, bentar ya!`);
				await sleep(3000);
				process.exit();
			break;

			case 'autoread':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q === 'true') {
					db.data.settings[botNumber].autoread = true;
					newReply(`Yay! Auto-read berhasil diubah ke ${q}`);
				} else if (q === 'false') {
					db.data.settings[botNumber].autoread = false;
					newReply(`Oke deh! Auto-read berhasil dimatikan, jadi gak bakal dibaca otomatis nih!`);
				}
			break;

			case 'unavailable':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q === 'true') {
					db.data.settings[botNumber].online = true;
					newReply(`Wah, sekarang bot aku lagi online, bisa nyapa-nyapa nih!`);
				} else if (q === 'false') {
					db.data.settings[botNumber].online = false;
					newReply(`Oke, bot aku jadi offline dulu ya, nanti nyapa-nyapanya kalau sudah aktif lagi 😎`);
				}
			break;

			case 'autorecordtype':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q === 'true') {
					db.data.settings[botNumber].autorecordtype = true;
					newReply(`Auto-record typing berhasil diubah ke ${q}!`);
				} else if (q === 'false') {
					db.data.settings[botNumber].autorecordtype = false;
					newReply(`Auto-record typing dimatikan, gak bakal ada rekaman ketik lagi ya!`);
				}
			break;

			case 'autorecord':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q === 'true') {
					db.data.settings[botNumber].autorecord = true;
					newReply(`Auto-record berhasil diubah ke ${q}, jadi semua aktivitas terrekam otomatis!`);
				} else if (q === 'false') {
					db.data.settings[botNumber].autorecord = false;
					newReply(`Auto-record dimatikan, gak bakal ada rekaman otomatis lagi!`);
				}
			break;

			case 'autotype':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q === 'true') {
					db.data.settings[botNumber].autotype = true;
					newReply(`Auto-typing berhasil diubah ke ${q}, jadi bot bakal ngetik otomatis deh!`);
				} else if (q === 'false') {
					db.data.settings[botNumber].autotype = false;
					newReply(`Auto-typing dimatikan, jadi bot gak bakal ngetik otomatis lagi!`);
				}
			break;

			case 'autobio':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q == 'true') {
					db.data.settings[botNumber].autobio = true;
					newReply(`Yay! AutoBio berhasil diubah ke ${q}, biografi otomatis aktif!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].autobio = false;
					newReply(`Oke, AutoBio berhasil dimatikan. Gak ada lagi bio otomatis nih!`);
				}
			break;

			case 'autosticker':
			case 'autostickergc':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q == 'true') {
					db.data.settings[botNumber].autosticker = true;
					newReply(`Sticker otomatis berhasil diubah ke ${q}, jadi semuanya bakal jadi sticker!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].autosticker = false;
					newReply(`Sticker otomatis dimatikan, gak ada sticker otomatis lagi deh!`);
				}
			break;

			case 'safesearch': {
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`🛡️ Contoh penggunaan:\n${prefix + command} true/false?`);
				if (q === 'true') {
					db.data.settings[botNumber].safesearch = true;
					newReply(`🛡️ *SafeSearch Shield* berhasil diaktifkan!\nSekarang bot akan menjaga chat dari konten yang tidak pantas. 😊`);
				} else if (q === 'false') {
					db.data.settings[botNumber].safesearch = false;
					newReply(`🛡️ *SafeSearch Shield* berhasil dimatikan.\nFitur perlindungan konten tidak aktif untuk saat ini.`);
				} else {
					newReply(`⚠️ Opsi tidak valid! Gunakan *on* untuk mengaktifkan atau *off* untuk mematikan.`);
				}
			}
			break;

			case 'autodownload':
			case 'autodl':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q == 'true') {
					db.data.settings[botNumber].autodownload = true;
					newReply(`Download otomatis berhasil diubah ke ${q}, jadi file bakal langsung terunduh otomatis!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].autodownload = false;
					newReply(`Download otomatis dimatikan, jadi file gak bakal langsung terunduh lagi!`);
				}
			break;

			case 'autoblock':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q == 'true') {
					db.data.settings[botNumber].autoblocknum = true;
					newReply(`Auto-Block berhasil diubah ke ${q}, jadi nomor yang mencurigakan bakal diblokir otomatis!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].autoblocknum = false;
					newReply(`Auto-Block dimatikan, jadi gak bakal ada pemblokiran otomatis lagi!`);
				}
			break;

			case 'onlygroup':
			case 'onlygc':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q == 'true') {
					db.data.settings[botNumber].onlygc = true;
					newReply(`Yeay! Onlygroup berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di grup aja!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].onlygc = false;
					newReply(`Oke, Onlygroup berhasil dimatikan, jadi bot bisa dipakai di mana saja deh!`);
				}
			break;

			case 'onlyprivatechat':
			case 'onlypc':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`Contoh: ${prefix + command} true/false?`);
				if (q == 'true') {
					db.data.settings[botNumber].onlypc = true;
					newReply(`Yeay! Only-Pc berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di chat pribadi!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].onlypc = false;
					newReply(`Oke, Only-Pc dimatikan, jadi bot bisa dipakai di grup juga deh!`);
				}
			break;

			case 'self':
				if (!isCreator) return newReply(mess.owner);
				haruka.public = false;
				newReply(`Bot sekarang dalam mode *Self Usage* aja, gak bisa dipakai oleh orang lain ya!`);
			break;

			case 'public':
				if (!isCreator) return newReply(mess.owner);
				haruka.public = true;
				newReply(`Bot sekarang kembali ke mode *Public Usage*, jadi bisa dipakai semua orang!`);
			break;

			case 'setexif':
			case 'setwm':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
				global.packname = text.split("|")[0];
				global.author = text.split("|")[1];
				newReply(`Yeay! Exif berhasil diubah! 🎉\n\n · Packname: ${global.packname}\n · Author: ${global.author}`);
			break;

			case 'setprefix':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
				global.prefa = text;
				newReply(`Prefix berhasil diubah menjadi ${text} ✨`);
			break;

			case 'setautoblock':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
				global.autoblocknumber = text;
				newReply(`Auto-Block number berhasil diubah menjadi ${text} 🚫`);
			break;

			case 'setantiforeign':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
				global.antiforeignnumber = text;
				newReply(`Anti-foreign number berhasil diubah menjadi ${text} 🌍❌`);
			break;

			case 'pushkontak': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.private);
				var name = text.split('/')[0];
				var chet = text.split('/')[1];
				if (!name) return newReply(`Contoh: ${prefix + command} nama/pesan`);
				if (!chet) return newReply(`Contoh: ${prefix + command} nama/pesan`);
				let kontak = {
					displayName: "Contact",
					contacts: [{
						displayName: name,
						vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
					}]
				}
				let push = await haruka.groupMetadata(m.chat)
				if (push.participants.length > 300) return newReply('Batas member maksimal: *300*')
				await reactionMessage('⏱️');
				for (let a of push.participants) {
					const repf = await haruka.sendMessage(a.id, { contacts: kontak })
					haruka.sendMessage(a.id, { text: chet }, { quoted: repf })
					await sleep(1000);
				}
				await newReply(mess.done);
			}
			break;

			case 'jpm': 
			case 'post': 
			case 'pushcontactgc': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} teks|jeda\n\n📸 *Reply gambar* untuk mengirim ke semua grup.\n⏱️ *Jeda:* 1000 = 1 detik\n\n*Contoh:* ${prefix + command} Halo semuanya!|9000`);
				await newReply(`⏳ *Sedang diproses...*`);
				let getGroups = await haruka.groupFetchAllParticipating();
				let groups = Object.entries(getGroups).map((entry) => entry[1]);
				let anu = groups.map((v) => v.id);
				for (let xnxx of anu) {
					let metadata = await haruka.groupMetadata(xnxx);
					let participants = metadata.participants;
					if (/image/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted);
						let mem = await CatBox(media);
						await haruka.sendMessage(xnxx, { 
							image: { url: mem }, 
							caption: text.split('|')[0], 
							mentions: participants.map(a => a.id) 
						});
						await sleep(text.split('|')[1]);
					} else {
						await haruka.sendMessage(xnxx, { 
							text: text.split('|')[0], 
							mentions: participants.map(a => a.id) 
						});
						await sleep(text.split('|')[1]);
					}
				}
				newReply(`✅ *Berhasil mengirim pesan ke semua grup!* 🎯`);
			}
			break;

			case 'pushcontact': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				if (!text) return newReply(`⚠️ *Teksnya mana, kak?* 📛`);
				let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
				newReply(`⏳ *Sedang mengirim pesan ke semua kontak...*`);
				for (let pler of mem) {
					await haruka.sendMessage(pler, { text: text });
				}
				newReply(`✅ *Pesan berhasil dikirim ke semua kontak!* 📲`);
			}
			break;

			case 'pushcontact2': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
				try {
					const metadata = await haruka.groupMetadata(text.split("|")[0]);
					const participants = metadata.participants;
					for (let mem of participants) {
						await haruka.sendMessage(
							`${mem.id.split('@')[0]}@s.whatsapp.net`, 
							{ text: text.split("|")[1] }
						);
						await sleep(5000);
					}
					newReply(`✅ *Pesan berhasil dikirim ke semua anggota grup!* 📨`);
				} catch {
					newReply(`⚠️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
				}
			}
			break;

			case 'pushcontact3': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda:* 1000 = 1 detik`);
				try {
					let jeda = text.split("|")[0];
					let caption = text.split("|")[1];
					let participants = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
					for (let men of participants) {
						if (/image/.test(mime)) {
							let media = await haruka.downloadAndSaveMediaMessage(quoted);
							let mem = await CatBox(media);
							await haruka.sendMessage(men, { 
								image: { url: mem }, 
								caption: caption 
							}, { quoted: m });
							await sleep(jeda);
						} else {
							await haruka.sendMessage(men, { 
								text: caption 
							}, { quoted: m });
							await sleep(jeda);
						}
					}
					newReply(`✅ *Pesan berhasil dikirim ke semua anggota!* 📨`);
				} catch {
					newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda:* 1000 = 1 detik`);
				}
			}
			break;

			case 'getcontact': case 'getcon': {
				if (!m.isGroup) return newReply(mess.group); // Hanya berlaku untuk grup
				if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
				bigpp = await haruka.sendMessage(m.chat, {
					text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
				}, {quoted: m, ephemeralExpiration: 86400});
				await sleep(1000);
				haruka.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
			}
			break;

			case 'savecontact': case 'svcontact': {
				if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
				if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
				let cmiggc = await haruka.groupMetadata(m.chat);
				let orgiggc = participants.map(a => a.id);
				vcard = '';
				noPort = 0;
				for (let a of cmiggc.participants) {
					vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
				}
				let nmfilect = './contacts.vcf';
				newReply('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
				require('fs').writeFileSync(nmfilect, vcard.trim());
				await sleep(2000);
				haruka.sendMessage(m.chat, {
					document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
				}, {ephemeralExpiration: 86400, quoted: m});
				require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
			}
			break;

			case 'sendcontact': case 'sencontact': {
				if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
				if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .sendcontact @tag name'); // Pastikan ada yang ditandai
				let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let snContact = {
					displayName: "Contact", contacts: [{
						displayName: snTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				haruka.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400});
			}
			break;

			case 'contacttag': case 'contag': {
				if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
				if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
				if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .contacttag @tag|name'); // Pastikan ada yang ditandai
				let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let sngContact = {
					displayName: "Contact", contacts: [{
						displayName: sngTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				haruka.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400});
			}
			break;

			case 'sendlocation': case 'sendloc': {
				let latitude = -6.175110;	// Latitude (contoh Jakarta)
				let longitude = 106.865039; // Longitude (contoh Jakarta)
				let caption = "Lokasi ini berada di Jakarta"; // Deskripsi opsional
				let whatsappNumber = m.chat; // Nomor penerima

				await haruka.sendMessage(whatsappNumber, {
					location: {
						degreesLatitude: latitude,
						degreesLongitude: longitude,
						caption: caption // Jika ada deskripsi, bisa ditambahkan di sini
					}
				});
			}
			break;

			case 'block': 
			case 'ban': {
				if (!isCreator) return newReply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await haruka.updateBlockStatus(users, 'block')
				await newReply(`Done`)
			}
			break;

			case 'unblock': 
			case 'unban': {
				if (!isCreator) return newReply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await haruka.updateBlockStatus(users, 'unblock')
				await newReply(`Done`)
			}
			break;

			case 'getcase': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply('Harap masukkan nama case yang ingin dicari! 🧐');
				try {
					const getCase = (cases) => {
						const fileContent = fs.readFileSync("./case.js", "utf-8");
						const caseBlock = fileContent.split(`case '${cases}'`)[1];
						if (!caseBlock) throw new Error('Case not found');
						return `case '${cases}'` + caseBlock.split("break")[0] + "break";
					}
					newReply(`${getCase(text)}`);
				} catch (err) {
					newReply(`Case '${text}' tidak ditemukan! 🚫`);
				}
			}
			break;

			case 'antibadword':
			case 'antitoxic':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].badword = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].badword = false
					newReply(`${commad} is disabled`)
				}
			}
			break;

			case 'nsfw': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args[0] === 'true') {
					if (AntiNsfw) return newReply('Already activated')
					ntnsfw.push(m.chat)
					fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
					newReply('Success in turning on nsfw in this group')
					var groupe = await haruka.groupMetadata(m.chat)
					var members = groupe['participants']
					var mems = []
					members.map(async adm => {
						mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					haruka.sendMessage(m.chat, {text: `*「 ⚠️Warning⚠️ 」*\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
				} else if (args[0] === 'false') {
					if (!AntiNsfw) return newReply('Already deactivated')
					let off = ntnsfw.indexOf(m.chat)
					ntnsfw.splice(off, 1)
					fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
					newReply('Success in turning off nsfw in this group')
				} else {
					await newReply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
				}
			}
			break;

			case 'antiaudio':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antiaudio = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antiaudio = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antiforeign':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antiforeignnum = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antiforeignnum = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antisticker':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antisticker = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antisticker = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antiimage':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antiimage = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antiimage = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antivideo':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antivideo = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antivideo = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'liat':
			case 'rvo':
			case 'readviewonce': {
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!m.quoted) return newReply(`Reply pesan view once-nya! 🙏`);
				if (m.quoted.mtype !== 'viewOnceMessageV2') return newReply(`Hmm... ini bukan pesan view once kak! 🤔`);
				let msg = m.quoted.message
				let type = Object.keys(msg)[0]
				let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
				let buffer = Buffer.from([])
				for await (const chunk of media) {
					buffer = Buffer.concat([buffer, chunk])
				}
				if (/video/.test(type)) {
					return haruka.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
				} else if (/image/.test(type)) {
					return haruka.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
				}
			}
			break;

			case 'antiviewonce':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antiviewonce = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antiviewonce = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antibot':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antibot = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antibot = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antispam':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antispam = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antispam = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antimedia':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antimedia = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antimedia = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antidocument':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antidocument = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antidocument = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'anticontact':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].anticontact = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].anticontact = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antilocation':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antilocation = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antilocation = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antilink': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antilink = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antilink = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'antilinkgc': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antilinkgc = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antilinkgc = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'mute': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins && !isCreator) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (text === 'true') {
					if (db.data.chats[m.chat].mute) return newReply('*Sudah Aktif Sebelumnya*')
					db.data.chats[m.chat].mute = true
					newReply('*Mute Activated !*')
				} else if (text === 'false') {
					db.data.chats[m.chat].mute = false
					newReply('*Mute Disabled !*')
				} else {
					newReply('true/false?')
				}
			}
			break

			case 'welcome':
			case 'left': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					welcome = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					welcome = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'adminevent': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					adminevent = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					adminevent = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'groupevent': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					groupevent = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					groupevent = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'sider':
			case 'gcsider': {
				var lama = 86400000 * 7
				const now = new Date().toLocaleString("en-US", {
					timeZone: "Asia/Jakarta"
				});
				const milliseconds = new Date(now).getTime();

				let member = groupMetadata.participants.map(v => v.id)
				if (!text) {
					var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
				} else {
					var pesan = text
				}
				var sum
				sum = member.length
				var total = 0
				var sider = []
				for (let i = 0; i < sum; i++) {
					let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
					if ((typeof db.data.users[member[i]] == 'undefined' || milliseconds * 1 - db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
						if (typeof db.data.users[member[i]] !== 'undefined') {
							if (db.data.users[member[i]].banned == true) {
								total++
								sider.push(member[i])
							}
						} else {
							total++
							sider.push(member[i])
						}
					}
				}
				if (total == 0) return newReply(`*Digrup ini tidak terdapat sider.*`)
				newReply(`*${total}/${sum}* anggota grup *${groupName}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => ' · @' + v.replace(/@.+/, '' + typeof db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - db.data.users[v].lastseen))).join('\n')}`);
			}
			break

			case 'hedsot':
			case 'buang':
			case 'kick': {
				if (!m.isGroup) return newReply('Eits, perintah ini cuma bisa dipakai di grup lho, kak! 🤭');
				if (!isCreator && !isAdmins) return newReply('Maaf ya kak, cuma admin atau owner yang bisa pakai perintah ini. 🙏');
				if (!isBotAdmins) return newReply('Aku belum jadi admin nih, kak. Jadikan aku admin dulu ya biar bisa bantu! 😢');

				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) {
					return newReply('Hmm... Kakak mau kick siapa nih? Sebutin dong orangnya! 🤔');
				}
	
				let users = m.mentionedJid[0] 
				? m.mentionedJid[0] 
				: m.quoted 
				? m.quoted.sender 
				: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

				if (ownerNumber.includes(users.replace('@s.whatsapp.net', ''))) {
					return newReply('Eh, itu kan owner aku, kak! Jangan usil dong, nanti aku dimarahin. 😣');
				}

				try {
					await haruka.groupParticipantsUpdate(m.chat, [users], 'remove');
					newReply('Yey, udah berhasil kak! Bye-bye orang yang tadi~ 👋✨');
				} catch (err) {
					console.error(err);
					newReply('Aduh, ada yang salah nih waktu aku coba kick orangnya. Coba cek lagi ya, kak. 😥');
				}
			};
			break;

			case 'wanumber': 
			case 'nowa': 
			case 'searchno': 
			case 'searchnumber': {
				if (!text) return newReply(`Kak, tolong kasih nomor dengan format yang benar ya!\n\nContoh: *${prefix + command} 6281234567x* 😄`);
	
				let inputnumber = text.split(" ")[0];
				newReply('Tunggu sebentar ya kak, Mora lagi cari nomornya... 🔍✨');

				function countInstances(string, word) {
					return string.split(word).length - 1;
				}
	
				let number0 = inputnumber.split('x')[0];
				let number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] || '';
				let random_length = countInstances(inputnumber, 'x');
				let randomxx = Math.pow(10, random_length); // Tentukan jumlah iterasi berdasarkan 'x'
	
				let resultText = `📱 *Hasil Pencarian Nomor WhatsApp:* 📱\n\n`;
				let nobio = `📌 *Nomor Tanpa Bio:* 📌\n`;
				let nowhatsapp = `🚫 *Nomor yang Tidak Terdaftar WhatsApp:* 🚫\n`;
	
				for (let i = 0; i < randomxx; i++) {
					let randomDigits = String(i).padStart(random_length, '0'); // Format angka sesuai jumlah 'x'
					let formattedNumber = `${number0}${randomDigits}${number1}`;
		
					try {
						let anu = await haruka.onWhatsApp(`${formattedNumber}@s.whatsapp.net`);
						if (anu.length === 0) {
							nowhatsapp += `- ${formattedNumber}\n`;
							continue;
						}
			
						let anu1;
						try {
							anu1 = await haruka.fetchStatus(anu[0].jid);
						} catch {
							anu1 = { status: '', setAt: null };
						}
			
						if (!anu1.status || anu1.status.length === 0) {
							nobio += `- wa.me/${anu[0].jid.split("@")[0]}\n`;
						} else {
							resultText += `🪀 *Nomor:* wa.me/${anu[0].jid.split("@")[0]}\n`;
							resultText += `🎗️ *Bio:* ${anu1.status}\n`;
							resultText += `🗓️ *Terakhir diperbarui:* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`;
						}
					} catch (err) {
						console.error(err);
						nowhatsapp += `- ${formattedNumber}\n`;
					}
				}
	
				let finalMessage = '✨ *Pencarian Selesai, Kak!* ✨\n\n';
				finalMessage += resultText;
				finalMessage += `\n${nobio}`;
				finalMessage += `\n${nowhatsapp}`;
				finalMessage += `\nKalau butuh bantuan lagi, panggil Mora ya! 🤗`;
	
				newReply(finalMessage);
			}
			break;

			case 'terima': {
				const teks = `⸙‹•══════════════♡᭄\n│ *Nama:* \n│ *Gender:* \n│ *Umur:* \n│ *Hobi:* \n│ *Kelas:* \n│ *Asal:* \n│ *Agama:* \n│ *Status:* \n╰═════ꪶ ۪⸙ ━ ━ ━ ━ ꪶ ̷⸙`
				m.reply(teks);
			};
			break;

			case 'tolak': {
				const teksAcak = [
					"Oke, kartu intro-nya nggak akan dikirim. 👍",
					"Sip, aku batalin kartu intro-nya. 😌",
					"Kartu intro nggak jadi aku kirim. Santai aja. 😉",
					"Intro-nya nggak akan dikirim, pesan diterima. ✅",
					"Baik, aku stop kartu intro-nya sekarang. ✋",
					"Kartu intro nggak perlu dikirim, catat ya! 📝",
					"Permintaan diterima, aku nggak kirim kartu intro. 📭",
					"Intro-nya nggak jadi dikirim. Siap aman! 🚫",
					"Paham, kartu intro aku tahan. 💬",
					"Kartu intro-nya aku skip aja, sesuai request. ⏭️",
					"Nggak masalah, kartu intro nggak aku kirim. 😄",
					"Santuy aja, aku udah batalin kartu intro-nya. 😌",
					"Permintaan diterima, nggak bakal ada kartu intro. 👍",
					"Kartu intro-nya di-cancel. Siap! 🛑",
					"Intro aku hold, tenang aja. 🤝",
					"Aku ngerti, kartu intro udah nggak aku kirim. ✋",
					"Kartu intro-nya off ya, aman terkendali. ✅",
					"Beres! Kartu intro aku skip dulu. 💡",
					"Pesan masuk, kartu intro nggak aku kirim. 🚷",
					"Tenang, kartu intro udah di-stop! 🚦"
				];

				const teks = teksAcak[Math.floor(Math.random() * teksAcak.length)];
				m.reply(teks);
			};
			break;

			case 'add': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);

				if (!text && !m.quoted) {
					newReply(`Cara pakai command: ${prefix + command} 62xxx`);
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
					try {
						await haruka.groupParticipantsUpdate(m.chat, [numbersOnly], 'add')
							.then(async (res) => {
								for (let i of res) {
									let invv = await haruka.groupInviteCode(m.chat);
						
									if (i.status == 408) return newReply('Oh no, sepertinya user baru saja keluar dari grup ini! 😔');
									if (i.status == 401) return newReply('Aduh, usernya kayaknya ngeblok bot ini deh! 😢');
									if (i.status == 409) return newReply('Wah, user ini udah masuk grup! 🎉');
									if (i.status == 500) return newReply('Maaf, grup ini sudah penuh! 😞');
									if (i.status == 403) {
										await haruka.sendMessage(m.chat, { 
											text: `@${numbersOnly.split('@')[0]} Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nLewat chat pribadi ya!`, 
											mentions: [numbersOnly] 
										}, { quoted: m });
							
										await haruka.sendMessage(`${numbersOnly ? numbersOnly : creator}`, { 
											text: `${'https://chat.whatsapp.com/' + invv}\n━━━━━━━━━━━━━━━━━━━━━\n\nAdmin: wa.me/${m.sender}\nUndang kamu ke grup ini\nAyo masuk kalau mau ya! 🙇`, 
											detectLink: true, 
											mentions: [numbersOnly] 
										}, { quoted: floc2 }).catch((err) => newReply('Gagal kirim undangan! 😔'));
									} else {
										newReply(mess.done);
									}
								}
							});
					} catch (e) {
						newReply('Gagal nambahin usernya nih, ada yang salah! 😢');
					}
				}
			}
			break;

			case 'promote':
			case 'pm': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return newReply('Hmm... kakak mau promote siapa?');
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Hmm... kakak mau ${command} siapa? 🤔`)
				await haruka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(mess.error))
			}
			break

			case 'demote':
			case 'dm': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return newReply('Hmm... kakak kamu demote siapa? 🤔')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Hmm... kakak mau ${command} siapa? 🤔`)
				await haruka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(mess.error))
			}
			break

			case 'revoke':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				await haruka.groupRevokeInvite(m.chat)
					.then(res => {
						m.reply(mess.done)
					}).catch(() => m.reply(mess.error))
				}
				break

			case 'setnamegc':
			case 'setsubject':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text) return newReply('Mau di namain apa kak grupnya? 🤔');
				await haruka.groupUpdateSubject(m.chat, text);
				newReply(mess.done);
			break;

			case 'setppgroup': 
			case 'setppgrup': 
			case 'setppgc': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				await haruka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
				newReply(mess.done)
			}
			break

			case 'deleteppgroup': 
			case 'delppgc': 
			case 'deleteppgc': 
			case 'delppgroup': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				await haruka.removeProfilePicture(m.chat)
			}
			break;

			case 'setppbot': {
				if (!isCreator) return newReply(mess.owner)
				if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				await haruka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
				newReply(mess.done)
			}
			break;
	
			case 'deleteppbot': 
			case 'delppbot': {
				if (!isCreator) return newReply(mess.owner);
				await haruka.removeProfilePicture(haruka.user.id)
				newReply(mess.done)
			}
			break;

			case 'setbiobot':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Where is the text?\nExample: ${prefix + command} Mora AI`)
				await haruka.updateProfileStatus(text)
				newReply(mess.done)
			}
			break;

			case 'setdesc':
			case 'setdesk':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text) return newReply('Text ?')
				await haruka.groupUpdateDescription(m.chat, text)
				newReply(mess.done)
			break;

			case 'listpc': {
				if (!isCreator) return newReply(mess.owner);
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
				let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`;
	
				for (let i of anu) {
					let nama = store.messages[i].array[0].pushName;
					teks += `*Name :* ${nama}\n`;
					teks += `*User :* @${i.split('@')[0]}\n`;
					teks += `*Chat :* https://wa.me/${i.split('@')[0]}\n\n`;
					teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
				}
				newReply(teks)
			}
			break;

			case 'listgc': {
				if (!isCreator) return newReply(mess.owner);
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
				let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`;
	
				for (let i of anu) {
					let metadata = await haruka.groupMetadata(i);
					teks += `*Name :* ${metadata.subject}\n`;
					teks += `*Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n`;
					teks += `*ID :* ${metadata.id}\n`;
					teks += `*Made :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`;
					teks += `*Member :* ${metadata.participants.length}\n\n`;
					teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
				}
				newReply(teks)
			}
			break;

			case 'listonline': case 'liston': {
				if (!m.isGroup) return newReply(mess.group);
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await haruka.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `@` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => newReply('*Data tidak ditemukan! ☹️*'))
			}
			break;

			case 'creategc': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) {
					return newReply(`Uhm, cara pakainya : ${prefix + command} Sekolah Menjadi Anime, Kak! 😊`);
				}
				await reactionMessage('⏱️');
				let cret = await haruka.groupCreate(text, []);
				let response = await haruka.groupInviteCode(cret.id);
				let caption = `Buka tautan ini untuk bergabung ke grup WhatsApp saya, Kak: https://chat.whatsapp.com/${response}`.trim();
				await reactionMessage('✅');
				haruka.sendMessage(m.chat, {
					text: caption,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: cret.subject,
							body: `Undangan chat grup`,
							thumbnailUrl: thumbUrl,
							sourceUrl: `https://chat.whatsapp.com/${response}`,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				});
			}
			break;

			case 'group':
			case 'grup': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (args[0] === 'close') {
					await haruka.groupSettingUpdate(m.chat, 'announcement')
						.then(() => newReply('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒'))
						.catch((err) => newReply(`⚠️ Gagal menutup grup: ${err}`));
				} else if (args[0] === 'open') {
					await haruka.groupSettingUpdate(m.chat, 'not_announcement')
						.then(() => newReply('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓'))
						.catch((err) => newReply(`⚠️ Gagal membuka grup: ${err}`));
				} else {
					newReply(`⚙️ Penggunaan perintah:\n · *${prefix + command} open* → Buka grup\n · *${prefix + command} close* → Tutup grup`);
				}
			}
			break;

			case 'editinfo': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (args[0] === 'open') {
					await haruka.groupSettingUpdate(m.chat, 'unlocked')
						.then(() => newReply('✅ Anggota sekarang bisa mengedit info grup! 📛✨'))
						.catch((err) => newReply(`⚠️ Gagal membuka izin edit info grup: ${err}`));
				} else if (args[0] === 'close') {
					await haruka.groupSettingUpdate(m.chat, 'locked')
						.then(() => newReply('✅ Hanya admin yang bisa mengedit info grup sekarang! 🔒🛡️'))
						.catch((err) => newReply(`⚠️ Gagal menutup izin edit info grup: ${err}`));
				} else {
					newReply(`⚙️ Penggunaan perintah:\n · *${prefix + command} open* → Izinkan anggota mengedit info grup\n · *${prefix + command} close* → Hanya admin yang bisa mengedit info grup`);
				}
			}
			break;

			case 'linkgroup':
			case 'linkgrup':
			case 'linkgc':
			case 'gclink':
			case 'grouplink':
			case 'gruplink':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				let response = await haruka.groupInviteCode(m.chat)
				haruka.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
					detectLink: true
				})
			break;

			case 'speedtest': case 'speed': {
				if (!isCreator) return newReply(mess.owner);
				let cp = require('child_process');
				let { promisify } = require('util');
				let exec = promisify(cp.exec).bind(cp);
				let o
					try {
						o = await exec('python3 speed.py');
					} catch (e) {
						o = e
					} finally {
						let { stdout, stderr } = o
						if (stdout.trim()) newReply(stdout);
						if (stderr.trim()) newReply(stderr);
					}
				}
			break;

			case 'tes':
			case 'test': {
				const caption = `Haii, Kak! ✨ Mora udah aktif nih dan siap nemenin Kakak kapan aja! 🤗💕\nKalau ada yang mau Kakak mulai atau mau cek seberapa cepat respons Mora, langsung aja klik tombol di bawah ya! 👇✨`;

				haruka.sendMessage(m.chat, {
					image: thumb,
					caption: caption,
					footer: `${botName} • Mora siap sedia buat Kakak! 💬`,
					buttons: [
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "🚀 Start" }
						},
						{
							buttonId: `${prefix}ping`,
							buttonText: { displayText: "📶 Cek Status" }
						}
					],
					viewOnce: true,
					headerType: 4
				}, { quoted: fconver });
			}
			break;

			case 'owner':
			case 'creator': {
				const caption = `Haii, Kak! Apa yang ingin kamu ketahui tentang Ownerku? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨`;
				haruka.sendMessage(m.chat,{
					image: thumb,
					caption: caption,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix}about`,
							buttonText: {
								displayText: "About Owner 👤"
							}
						},
						{
							buttonId: `${prefix}contact`,
							buttonText: {
								displayText: "Contact Owner ✨"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "View Menu 👀"
							}
						}
					],
					viewOnce: true,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: ucapanWaktu,
							body: pushname,
							thumbnailUrl: thumbUrl,
							sourceUrl: wagc,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				});
			}
			break;

			case 'contact': {
				await haruka.sendMessage(
					m.chat, 
					{
						contacts: {
							displayName: ownerName,
							contacts: contacts
						}
					}, {
						quoted: m
					}
				);
			}
			break;

			case 'about':{
				newReply('Data tidak ditemukan di dalam database.');
			}
			break;

			case 'brat': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`)
				await reactionMessage('⏱️');
				try {
					const buffer = await getBuffer(`https://siputzx-bart.hf.space/?q=${encodeURIComponent(text)}`)
					haruka.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName })
				} catch (err) {
					newReply('Terjadi kesalahan saat membuat stiker gambar. 😞');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ssweb': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply('Masukkan URL untuk di-screenshot!');
				await reactionMessage('⏱️');
				let sswebfull = `https://api.apiflash.com/v1/urltoimage?access_key=9a202a61afaa4ba0877f12f03e86ea96&url=${encodeURIComponent(text)}&format=png&fresh=true&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&time_zone=Asia/Jakarta`;
				try { 
					let response = await fetch(sswebfull);
					let json = await response.json(); 
					if (!json.url) {
						return newReply('Gagal mengambil screenshot. Pastikan URL yang dimasukkan valid.');
					}
					await haruka.sendMessage(m.chat, {
						image: {url: json.url},
						caption: mess.done
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.error(error);
					newReply('Terjadi kesalahan saat mengambil screenshot.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'qc':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply('Input teksnya!')
				const sender = m.sender
				const username = await haruka.getName(m.quoted ? m.quoted.sender : sender)
				const avatar = await haruka.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => 'https://files.catbox.moe/a6zaap.jpg')
				const json = {
					type: "quote",
					format: "png",
					backgroundColor: "#FFFFFF",
					width: 512,
					height: 512,
					scale: 2,
					"messages": [
						{
							"entities": [],
							"avatar": true,
							"from": {
								"id": 1,
								"name": username,
								"photo": {
									"url": avatar
								}
							},
							"text": text,
							"replyMessage": {}
						}
					],
				};
				axios.post("https://bot.lyo.su/quote/generate", json, {
					headers: {"Content-Type": "application/json"},
				})
				.then(async (res) => {
					const buffer = Buffer.from(res.data.result.image, "base64");
					let encmedia = await haruka.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName, categories: ['🤩', '🎉'], id: '12345', quality: 100, background: 'transparent'})
					await fs.unlinkSync(encmedia)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 's': case 'sticker': case 'stiker': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`Aduh, kak, limitmu habis! 🥲 Coba upgrade jadi premium ya!`);
				if (!quoted) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				if (!mime) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
	
				if (/image/.test(mime)) {
					let media = await haruka.downloadAndSaveMediaMessage(quoted);
					await haruka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 9) return newReply(`Durasi video terlalu panjang! 🕒 Kirim video dengan durasi 1-9 detik ya!`);
					let media = await haruka.downloadAndSaveMediaMessage(quoted);
					await haruka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
				} else {
					newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'swm': case 'steal': case 'stickerwm': case 'take': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`Aduh, kak, limitmu habis! 🥲 Coba upgrade jadi premium ya!`);
				if (!quoted) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				if (!mime) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);

				const swn = args.join(" ");
				const pcknm = swn.split("|")[0];
				const atnm = swn.split("|")[1];

				if (m.quoted.isAnimated === true) {
					haruka.downloadAndSaveMediaMessage(quoted, "gifee");
					haruka.sendMessage(m.chat, { 
						sticker: fs.readFileSync("gifee.webp") 
					}, m, { 
						packname: pcknm, 
						author: atnm 
					});
				} else if (/image/.test(mime)) {
					let media = await haruka.downloadAndSaveMediaMessage(quoted);
					await haruka.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 9) return newReply('Video terlalu panjang, maksimal 9 detik ya! ⏳');
					let media = await haruka.downloadAndSaveMediaMessage(quoted);
					await haruka.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else {
					newReply(`Kirim foto/video untuk dipakai ya, kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'smeme': case 'stickermeme': case 'stickmeme': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`Limit habis, kak! Coba upgrade premium untuk lanjut!`);
				if (!/webp/.test(mime) && /image/.test(mime)) {
					if (!text) return newReply(`Penggunaan: ${prefix + command} teks_atas|teks_bawah`);
		
					atas = text.split('|')[0] ? text.split('|')[0] : '';
					bawah = text.split('|')[1] ? text.split('|')[1] : '';
		
					let mee = await haruka.downloadAndSaveMediaMessage(quoted);
					let mem = await CatBox(mee);
					let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
		
					await haruka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author });
				} else {
					newReply(`Kirim atau balas gambar dengan caption ${prefix + command} teks_atas|teks_bawah untuk membuat meme!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tourl': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!mime) return newReply(`Kirim/Reply Video/Gambar Dengan Caption ${prefix + command}`);
				await reactionMessage('⏱️');
				try {
					let media = await haruka.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
						newReply(caption);
					} else if (!/image/.test(mime)) {
						let response = await CatBox(media);
						newReply(response);
					} else {
						newReply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					newReply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'toimage': 
			case 'toimg': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply('Reply Image')
				if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
				await reactionMessage('⏱️');
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
					haruka.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'remini':
			case 'hdr':
			case 'hd':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				haruka.enhancer = haruka.enhancer ? haruka.enhancer : {};
				if (m.sender in haruka.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)
				let query = m.quoted ? m.quoted : m;
				let mime = (query.msg || query).mimetype || query.mediaType || "";
				if (!mime) return newReply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`)
				if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`)
				haruka.enhancer[m.sender] = true;
				try {
					await reactionMessage('⏱️');
					let media = await haruka.downloadAndSaveMediaMessage(quoted);
					let proses = await remini(media, "enhance");
					await newReply('Gambar berhasil ditingkatkan kualitasnya! ✅');
					haruka.sendMessage(m.chat, {image: proses, caption: mess.done}, {quoted: m})
				} catch (err) {
					console.log(err);
					newReply('Terjadi kesalahan pada server.');
				}
				delete haruka.enhancer[m.sender];
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'fetch': case 'get': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text.startsWith('http')) return newReply(`No Query?\n\nExample : ${prefix + command} https://www.google.com`);
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text);
					const contentType = res.headers['content-type'] || '';

					// Jika bukan owner dan konten bukan HTML
					if (!isCreator && !contentType.includes('text/html')) {
						return newReply('Konten bukan HTML, dan Anda bukan owner.');
					}

					// Jika owner, lewati pengecekan tipe konten
					if (isCreator || contentType.includes('text/html')) {
						return newReply(util.format(res.data));
					} else {
						return newReply('Konten bukan HTML, dan Anda bukan owner.');
					}
				} catch (e) {
					return newReply(util.format(e));
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'toaudio': 
			case 'tomp3': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				if (!quoted) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				try {
					await reactionMessage('⏱️');
					let media = await haruka.downloadAndSaveMediaMessage(quoted);
					let audioBuffer = await toAudio(media, 'mp4');
					await haruka.sendMessage(m.chat, { 
						audio: audioBuffer, 
						mimetype: 'audio/mpeg'
					}, { quoted: m });
						newReply(`✅ Berhasil mengonversi ke MP3! 🎵`);
				} catch (err) {
					console.error('❌ Error:', err);
					newReply(`❌ Gagal mengonversi ke MP3. Cek konsol untuk detailnya.`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bass': 
			case 'blown': 
			case 'deep': 
			case 'earrape': 
			case 'fast': 
			case 'fat': 
			case 'nightcore': 
			case 'reverse': 
			case 'robot': 
			case 'slow': 
			case 'smooth': 
			case 'squirrel': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let set
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						await reactionMessage('⏱️');
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return newReply(err)
							let buff = fs.readFileSync(ran)
							haruka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
							fs.unlinkSync(ran)
						})
					} else newReply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
				} catch (e) {
					newReply(e)
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'listbadword':{
				let teks = '┌──⭓「 *VN List* 」\n│\n'
				for (let i of bad) {
					teks += `│⭔ ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
				newReply(teks)
			}
			break;

			case 'afk': {
				if (!m.isGroup) return newReply(mess.group); // Cek apakah perintah dijalankan di grup

				if (isAfkOn) return; // Cek apakah pengguna sudah dalam mode AFK

				// Tentukan alasan AFK
				let reason = text ? text : 'Nggak ada alasan yang disebutkan~ 🤭';

				// Tambahkan pengguna ke daftar AFK
				addAfkUser(m.sender, Date.now(), reason, afk);

				// Kirim pesan konfirmasi dengan mention
				haruka.sendTextWithMentions(
					m.chat,
					`🌙 *AFK Mode Aktif!* 🌙\n` + 
					`👤 *@${m.sender.split('@')[0]}* lagi AFK nih!\n` + 
					`💬 *Alasan:* ${reason}\n\n` + 
					`Jangan lupa balik lagi ya~ 😊✨`,
					m
				);
			}
			break;

			case 'h':
			case 'hidetag': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (m.quoted) {
					haruka.sendMessage(m.chat, {
						forward: m.quoted.fakeObj,
						mentions: participants.map(a => a.id)
					})
				}
				if (!m.quoted) {
					haruka.sendMessage(m.chat, {
						text: q ? q : '',
						mentions: participants.map(a => a.id)
					}, {
						quoted: fconver
					})
				}
			}
			break

			case 'delete':
			case 'd':
			case 'del': {
				if (!m.quoted) return newReply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				await haruka.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
			break

			case 'autoswview':
			case 'autostatusview':{
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					autoswview = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					autoswview = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'anticall': {
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply('true/false?')
				if (args[0] === 'true') {
					anticall = true
					newReply(`${command} is enabled`)
				} else if (args[0] === 'false') {
					anticall = false
					newReply(`${command} is disabled`)
				}
			}
			break;

			case 'addvideo':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Whats the video name?')
				if (videonye.includes(q)) return newReply("The name is already in use")
				let delb = await haruka.downloadAndSaveMediaMessage(quoted)
				videonye.push(q)
				await fsx.copy(delb, `./media/${q}.mp4`)
				fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye))
				fs.unlinkSync(delb)
				newReply(mess.done);
			}
			break;

			case 'delvideo':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Enter the video name')
				if (!videonye.includes(q)) return newReply("The name does not exist in the database")
				let wanu = videonye.indexOf(q)
				videonye.splice(wanu, 1)
				fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye))
				fs.unlinkSync(`./media/${q}.mp4`)
				newReply(mess.done);
			}
			break;

			case 'listvideo':{
				let teks = '┌──⭓「 *Video List* 」\n│\n'
				for (let i of videonye) {
					teks += `│ · ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${videonye.length}*`
				newReply(teks)
			}
			break;

			case 'addimage':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Whats the image name?')
				if (imagenye.includes(q)) return newReply("The name is already in use")
				let delb = await haruka.downloadAndSaveMediaMessage(quoted)
				imagenye.push(q)
				await fsx.copy(delb, `./media/${q}.jpg`)
				fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye))
				fs.unlinkSync(delb)
				newReply(mess.done);
			}
			break;

			case 'delimage':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Enter the image name')
				if (!imagenye.includes(q)) return newReply("The name does not exist in the database")
				let wanu = imagenye.indexOf(q)
				imagenye.splice(wanu, 1)
				fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye))
				fs.unlinkSync(`./media/${q}.jpg`)
				newReply(mess.done);
			}
			break;

			case 'listimage':{
				let teks = '┌──⭓「 *Image List* 」\n│\n'
				for (let i of imagenye) {
					teks += `│ · ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${imagenye.length}*`
				newReply(teks)
			}
			break;

			case 'addsticker':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Whats the sticker name?')
				if (setiker.includes(q)) return newReply("The name is already in use")
				let delb = await haruka.downloadAndSaveMediaMessage(quoted)
				setiker.push(q)
				await fsx.copy(delb, `./media/${q}.webp`)
				fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker))
				fs.unlinkSync(delb)
				newReply(mess.done);
			}
			break;

			case 'delsticker':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Enter the sticker name')
				if (!setiker.includes(q)) return newReply("The name does not exist in the database")
				let wanu = setiker.indexOf(q)
				setiker.splice(wanu, 1)
				fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker))
				fs.unlinkSync(`./media/${q}.webp`)
				newReply(mess.done);
			}
			break;

			case 'liststicker':{
				let teks = '┌──⭓「 *Sticker List* 」\n│\n'
				for (let i of setiker) {
					teks += `│ · ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${setiker.length}*`
				newReply(teks)
			}
			break;

			case 'addvn':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Whats the audio name?')
				if (audionye.includes(q)) return newReply("The name is already in use")
				let delb = await haruka.downloadAndSaveMediaMessage(quoted)
				audionye.push(q)
				await fsx.copy(delb, `./media/${q}.mp3`)
				fs.writeFileSync('./media/database/audio.json', JSON.stringify(audionye))
				fs.unlinkSync(delb)
				newReply(mess.done);
			}
			break;

			case 'delvn':{
				if (!isCreator) return
				if (args.length < 1) return newReply('Enter the vn name')
				if (!audionye.includes(q)) return newReply("The name does not exist in the database")
				let wanu = audionye.indexOf(q)
				audionye.splice(wanu, 1)
				fs.writeFileSync('./media/database/audio.json', JSON.stringify(audionye))
				fs.unlinkSync(`./media/${q}.mp3`)
				newReply(mess.done);
			}
			break;

			case 'listvn':{
				let teks = '┌──⭓「 *VN List* 」\n│\n'
				for (let i of audionye) {
					teks += `│ · ${i}\n`
				}
				teks += `│\n└────────────⭓\n\n*Totally there are : ${audionye.length}*`
				newReply(teks)
			}
			break;

			case 'q':
			case 'quoted': {
				if (!quoted) return newReply(`Mohon reply pesan yang ingin di quoted ya kak! 🙏`);
				let gwm = await haruka.serializeM(await m.getQuotedObj());
				if (!gwm.quoted) return newReply(mess.error);
				try {
					await gwm.quoted.copyNForward(m.chat, true);
				} catch (err) {
					console.log(err);
					newReply(mess.error);
				}
			};
			break

			case 'yts': 
			case 'ytsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🔍 *Judul atau kata kunci videonya mana, Kak?*\n\nContoh:\n${prefix + command} story wa anime`);

				try {
					await reactionMessage('⏳');
					let search = await yts(text);

					if (!search || !search.videos || search.videos.length === 0) {
						return newReply(`❌ *Video tidak ditemukan!* Coba kata kunci lain ya, Kak.`);
					}

					let results = search.videos.slice(0, 5);
					for (let i = 0; i < results.length; i++) {
						let video = results[i];
						let caption = `🔢 *No:* ${i + 1}\n`;
						caption += `🎬 *Judul:* ${video.title || 'Tidak ada judul'}\n`;
						caption += `👤 *Channel:* ${video.author?.name || 'Tidak diketahui'}\n`;
						caption += `👁️ *Views:* ${video.views || 'Tidak diketahui'}\n`;
						caption += `⏳ *Durasi:* ${video.timestamp || 'Tidak diketahui'}\n`;
						caption += `📆 *Diunggah:* ${video.ago || 'Tidak diketahui'}\n`;
						caption += `🔗 *Link:* ${video.url || 'Tidak ada link'}\n`;

						await haruka.sendMessage(m.chat, {
							image: { url: video.thumbnail || thumbUrl },
							caption: caption,
						}, { 
							quoted: m 
						});
					}

					newReply(`✅ *Berhasil menampilkan 5 hasil pencarian dari YouTube!*`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *Terjadi kesalahan saat mencari video!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'lirik': 
			case 'lyrics': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Kak, jangan lupa tulis judul lagunya! 🥺\nContoh: *${prefix + command} Someone Like You*`);
				try {
					const searchResults = await lyrics.search(text);
					if (searchResults.length === 0) {
						return newReply('⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶');
					}
					const firstResult = searchResults[0];
					let response = `🎵 *Lirik Lagu Ditemukan!* 🎵\n\n`;
					response += `📌 *Judul:* ${firstResult.title}\n`;
					response += `🎤 *Artis:* ${firstResult.artist}\n`;
					response += `💿 *Album:* ${firstResult.album}\n`;
					response += `🔗 *Lirik Lengkap:* ${firstResult.link}\n`;
					response += `🖼️ *Gambar:* ${firstResult.imageUrl || 'Tidak ada gambar'}\n\n`;
					response += `_Sedang mengambil lirik lengkap, tunggu sebentar..._`;
					await newReply(response);
					const lyricsData = await lyrics.getLyrics(firstResult.link);
					let lyricsResponse = `🎼 *Lirik Lengkap: ${firstResult.title}* 🎼\n\n`;
					lyricsResponse += `${lyricsData.lyrics || 'Lirik tidak tersedia.'}\n\n`;
					lyricsResponse += `📅 *Tahun Rilis:* ${lyricsData.year || 'Tidak diketahui'}\n`;
					lyricsResponse += `🎧 *Playlist:* ${lyricsData.playlists || 'Tidak ada playlist'}\n`;
					lyricsResponse += `🖼️ *Artis:* ${lyricsData.artistImage || 'Tidak ada gambar artis'}\n`;
					newReply(lyricsResponse);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'owner':
			case 'creator': {
				const caption = `Haii, Kak! Apa yang ingin kamu ketahui tentang Ownerku? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨`;
				haruka.sendMessage(m.chat,{
					image: thumb,
					caption: caption,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix}about`,
							buttonText: {
								displayText: "About 👤"
							}
						},
						{
							buttonId: `${prefix}contact`,
							buttonText: {
								displayText: "Contact 📞"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break;

			case 'yt':
			case 'play':
			case 'ytplay': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Contoh: ${prefix + command} Lagu favorit`);
				try {
					await reactionMessage('⏱️');
					const search = await yts(`${text}`);
					if (!search || search.all.length === 0) return newReply(`*Lagu tidak ditemukan!* ☹️`);
					const { 
						videoId, 
						image, 
						title, 
						views, 
						duration, 
						author, 
						ago, 
						url, 
						description 
					} = search.all[0];
					const button = [{
						"name": "single_select",
						"buttonParamsJson": `{
							"title": "Click Here ⎙",
							"sections": [
								{
									"title": "Download Audio 🎧",
									"rows": [
										{
											"header": "Kualitas Rendah (64kbps) 🐣",
											"title": "Audio (64kbps) - Hemat Kuota",
											"id": ".ytmp3 ${url} 1"
										},
										{
											"header": "Kualitas Standar (128kbps) 🎵",
											"title": "Audio (128kbps) - Oke untuk dengerin",
											"id": ".ytmp3 ${url} 2"
										},
										{
											"header": "Kualitas Bagus (192kbps) 🎶",
											"title": "Audio (192kbps) - Lebih jelas!",
											"id": ".ytmp3 ${url} 3"
										},
										{
											"header": "Kualitas Tinggi (256kbps) 🎼",
											"title": "Audio (256kbps) - Keren dan jernih",
											"id": ".ytmp3 ${url} 4"
										},
										{
											"header": "Kualitas Ultra (320kbps) 🎧",
											"title": "Audio (320kbps) - Super HD!",
											"id": ".ytmp3 ${url} 5"
										}
									]
								},
								{
									"title": "Download Video 🎥",
									"rows": [
										{
											"header": "Resolusi Rendah (144p) 🐾",
											"title": "Video (144p) - Hemat Data",
											"id": ".ytmp4 ${url} 1"
										},
										{
											"header": "Resolusi Menengah (240p) 📱",
											"title": "Video (240p) - Cukup Jelas",
											"id": ".ytmp4 ${url} 2"
										},
										{
											"header": "Resolusi Standar (360p) 🎬",
											"title": "Video (360p) - Oke lah untuk nonton",
											"id": ".ytmp4 ${url} 3"
										},
										{
											"header": "Resolusi Tinggi (480p) 📺",
											"title": "Video (480p) - Cukup Jernih",
											"id": ".ytmp4 ${url} 4"
										},
										{
											"header": "Resolusi HD (720p) 🌟",
											"title": "Video (720p) - HD, mantap!",
											"id": ".ytmp4 ${url} 5"
										},
										{
											"header": "Resolusi Full HD (1080p) 💎",
											"title": "Video (1080p) - Full HD, wow!",
											"id": ".ytmp4 ${url} 6"
										}
									]
								}
							]
						}`
					}];
					let caption = `*${title}*\n\n`;
					caption += `*🎶 Jenis*: Play\n`;
					caption += `*📌 ID*: ${videoId}\n`;
					caption += `*⏱️ Durasi*: ${duration}\n`;
					caption += `*🕒 Diunggah*: ${ago}\n`;
					caption += `*🔗 Link*: ${url}\n\n`;
					caption += `_*Pilih jenis download yang kamu butuhin... pilih yang paling pas buat kamu ya!*_`;
					await sendButtonImage(m.chat, '', caption, { url: image }, button, m)
				} catch (error) {
					console.log(error);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ytaudio': 
			case 'ytmp3': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
				try {
					await reactionMessage('⏱️');		
					let search = await yts(args[0]);
					if (!search || search.all.length === 0) return newReply(`*Video tidak ditemukan!* ☹️`);
					let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
					let caption = `「 *YOUTUBE AUDIO* 」\n\n`;
					caption += `🆔 ID : ${videoId}\n`;
					caption += `💬 Title : ${title}\n`;
					caption += `📺 Views : ${views}\n`;
					caption += `⏰ Duration : ${duration.timestamp}\n`;
					caption += `▶️ Channel : ${author.name}\n`;
					caption += `📆 Upload : ${ago}\n`;
					caption += `🔗 URL Video : ${url}\n`;
					caption += `📝 Description : ${description}`;
					await haruka.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { quoted: m });
					let audioData = await saveTube.dl(url, args[1], 'audio');		
					if (!audioData || !audioData.link) {
						return newReply(`*Audio tidak ditemukan, silahkan ketik ulang command atau coba lagi nanti ya kak! 🙏*`);
					}		
					await haruka.sendMessage(m.chat, { 
						audio: { url: audioData.link }, 
						mimetype: 'audio/mpeg',
						fileName: `${title}.mp3`,
						ptt: true
					}, { quoted: m });
		
				} catch (err) {
					console.error(err);
					newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'ytmp4': 
			case 'ytvideo': 
			case 'ytv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
				try {
					await reactionMessage('⏱️');
					const vidIdMatch = args[0].match(/(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|shorts\/|v\/))([\w-]{11})/);
					const vidId = vidIdMatch ? vidIdMatch[1] : null;
					if (!vidId) {
						return newReply(`Gagal mengekstrak ID video dari link! 😓`);
					}
					let search = await yts({ videoId: vidId, hl: 'id', gl: 'ID' });
					if (!search) return newReply(`*Video tidak ditemukan!* ☹️`);
					let { title, url, image } = search;
					let caption = `「 *YOUTUBE VIDEO* 」\n\n`;
					caption += `💬 Title : ${title}\n`;
					caption += `🔗 URL Video : ${url}`;
					await haruka.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { quoted: m });
					let videoData = await saveTube.dl(url, args[1], 'video');
					if (!videoData || !videoData.link) {
						return newReply(`*Video tidak ditemukan, silahkan ketik ulang command atau coba lagi nanti ya kak! 🙏*`);
					}		
					await haruka.sendMessage(m.chat, { 
						video: { url: videoData.link }, 
						mimetype: 'video/mp4',
						caption: '✅ *Video berhasil diunduh!*'
					}, { quoted: m });		
				} catch (err) {
					console.error(err);
					newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'ttslide':
			case 'tiktokfoto':
			case 'tiktokmp4':
			case 'tt':
			case 'ttnowm':
			case 'tiktoknowm':
			case 'tiktok': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar Mora bisa bantu! 🎥✨`);
				try {
					await reactionMessage('⏱️');
					let anu = await tiktokDownloaderVideo(text);
					let item = 0;
					for (let imgs of anu.data) {
						if (imgs.type == "nowatermark") {
							await haruka.sendMessage(
								m.chat,
								{
									video: { url: imgs.url },
									caption: `🎥 *Video Info* :\n📍 Region: ${anu.region}\n⏳ Duration: ${anu.duration}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}`
								},
								{ quoted: m }
							);
						}
						if (imgs.type == "photo") {
							if (item == 0) {
								await haruka.sendMessage(
									m.chat,
									{
										image: { url: imgs.url },
										caption: `🖼️ *Photo Info* :\n📍 Region: ${anu.region}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}${m.isGroup ? anu.data.length > 1 ? "\n📥 _Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
									},
									{ quoted: m }
								);
							} else {
								await haruka.sendMessage(
									m.sender,
									{
										image: { url: imgs.url }
									},
									{ quoted: m }
								);
							}
							item += 1;
							await sleep(2000);
						}
					}
				} catch (err) {
					console.log(err);
					newReply('⚠️ Gagal mengambil data dari TikTok. Pastikan URL valid atau coba lagi nanti.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ttaudio':
			case 'tiktokmp3':
			case 'ttmp3':
			case 'tiktokaudio': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar Mora bisa bantu! 🎥✨`);
				try {
					await reactionMessage('⏱️');
					let anu = await tiktokDownloaderVideo(text);
					let audio = anu.music_info.url;
					await haruka.sendMessage(
						m.chat,
						{
							text: `🎵 *TikTok Audio*\n\n` +
							`🎼 *Title:* ${anu.music_info.title || '-'}\n` +
							`🎤 *Author:* ${anu.music_info.author || '-'}\n` +
							`💿 *Album:* ${anu.music_info.album || '-'}\n\n` +
							`🔗 *Source:* ${text}`
						},
						{ quoted: m }
					);
					await haruka.sendMessage(
						m.chat,
						{
							audio: { url: audio },
							mimetype: 'audio/mpeg',
							fileName: `${anu.music_info.title || 'audio'}.mp3`
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error(error);
					await newReply(`❌ Terjadi kesalahan saat mengambil audio. Coba lagi nanti, ya Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tiktoksearch':
			case 'tiktoks':
			case 'ttsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} jj epep* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
				try {
					await reactionMessage('⏱️');
					let search = await tiktokSearchVideo(text);
					let teks = `🎥 *${search.videos[0].title}*\n\n` +
					`🆔 *Video ID* : ${search.videos[0].video_id}\n` +
					`👤 *Username* : ${search.videos[0].author.unique_id}\n` +
					`🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` +
					`⏳ *Duration* : ${search.videos[0].duration} detik\n` +
					`❤️ *VT Like* : ${search.videos[0].digg_count}\n` +
					`💬 *Comment* : ${search.videos[0].comment_count}\n` +
					`🔄 *Share* : ${search.videos[0].share_count}\n\n` +
					`🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;
					let list = '';
					let no = 1;
					for (let i of search.videos) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
						`⏳ Duration: ${i.duration} detik\n` +
						`❤️ Likes: ${i.digg_count}\n` +
						`💬 Comments: ${i.comment_count}\n` +
						`🔄 Shares: ${i.share_count}\n` +
						`🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
					}
					await haruka.sendMessage(
						m.chat,
						{
							video: { url: `https://tikwm.com${search.videos[0].play}` },
							caption: teks
						},
						{ quoted: m }
					);
					if (search.videos.length > 1) {
						await haruka.sendMessage(
							m.chat,
							{
								text: `📚 *Daftar Video Lainnya:*\n${list}`
							},
							{ quoted: m }
						);
					}
				} catch (error) {
					console.log(error);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'presetam': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Eits, kakak lupa kasih URL! 😗 Coba ketik kayak gini ya: *${prefix + command} [URL Alight Motion]*`);
				if (!(text.includes('http://') || text.includes('https://'))) {
					return newReply(`⚠️ URL tidak valid. Coba pakai URL yang diawali dengan http:// atau https://`);
				}
				if (!(text.includes('alight.link') || text.includes('alightcreative.com'))) {
					return newReply(`⚠️ URL yang diberikan bukan URL Alight Motion!`);
				}
				try {
					await reactionMessage('⏱️');
					const result = await alightScrape(text);
					if (result.error) {
						return newReply(result.error);
					}
					const { title, description } = result;
					await newReply(`[ *PRESET ALIGHT MOTION* ]\n\n · *Judul:* ${title}\n · *Deskripsi:* ${description}`);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mengambil data dari URL!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'soundcloudsearch':
			case 'scsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} DJ mama muda* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
				try {
					let results = await scrapeSoundCloud(text);	// Panggil fungsi scraper untuk SoundCloud
					if (results.length === 0) return newReply('😔 Maaf, kak! Tidak ada hasil yang ditemukan. Coba kata kunci yang lain ya!');
					let teks = `🎧 *Hasil Pencarian SoundCloud untuk:* ${text}\n\n`;
					let list = '';
					let no = 1;
					for (let i of results) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
							`🔗 *Link:* ${i.url}\n`;
					}
					await haruka.sendMessage(
						m.chat,
						{
							text: teks + list
						},
						{ quoted: m }
					);
				} catch (error) {
					console.log(error);
					newReply('⚠️ Terjadi kesalahan saat mencari data di SoundCloud, coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'igstory':
			case 'igs':
			case 'instagramstory':
			case 'instastory':
			case 'igslide':
			case 'igphoto':
			case 'instaphoto':
			case 'instafoto':
			case 'igfoto':
			case 'instagram':
			case 'ig':
			case 'igdl':
			case 'igvideo':
			case 'instavideo':
			case 'instavid':
			case 'igreels':
			case 'instareels':
			case 'instareel':
			case 'igtv':
			case 'instatv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *url*\n\n🤔 *Contohnya:*\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`);
				try {
					let anu = await fetchJson(`https://api.haruka.my.id/api/igdownload?url=${text}`);
					let item = 0;

					for (let item of anu.result.response.data) {
						if (item.type === 'video') {
							await haruka.sendMessage(
								m.chat,
								{
									video: { url: item.url },
									caption: `🎥 *Instagram Video*\n🔗 [Link Asli](${text})`
								},
								{ quoted: m }
							);
						}

						if (item.type === 'image') {
							if (item === 0) {
								await haruka.sendMessage(
									m.chat,
									{
										image: { url: item.url },
										caption: `🖼️ *Instagram Photo*\n🔗 [Link Asli](${text})\n\n${m.isGroup ? '_📥 Sisa foto akan dikirim di private chat_' : ''}`
									},
									{ quoted: m }
								);
							} else {
								await haruka.sendMessage(
									m.sender,
									{
										image: { url: item.url }
									},
									{ quoted: m }
								);
							}
							item += 1;
							await sleep(2000);
						}
					}

					if (anu.result.response.data.length === 0) {
						await newReply(`❌ Tidak ada konten yang ditemukan di URL tersebut. Pastikan tautannya benar, ya Kak!`);
					}

				} catch (error) {
					console.error(error);
					await newReply(`❌ Terjadi kesalahan saat memproses permintaan. Coba lagi nanti ya, Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'git': 
			case 'gitclone': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!args[0]) return newReply(`📦 *Linknya mana, Kak?*\n\nContoh:\n${prefix}${command} https://github.com/user/repo`);
				if (!isUrl(args[0]) || !args[0].includes('github.com')) 
					return newReply(`❌ *Link tidak valid!* Pastikan link berasal dari GitHub ya, Kak.`);
				try {
					await reactionMessage('⏳');
					let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
					let [, user, repo] = args[0].match(regex) || [];
					if (!user || !repo) return newReply(`❌ *Gagal membaca link repositori!* Pastikan link benar ya, Kak.`);
					repo = repo.replace(/.git$/, '');
					let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
					let response = await fetch(url, { method: 'HEAD' });
					let filename = response.headers.get('content-disposition')?.match(/attachment; filename=(.*)/)?.[1] || `${repo}.zip`;
					await haruka.sendMessage(m.chat, {
						document: { url: url },
						fileName: filename,
						mimetype: 'application/zip'
					}, { 
						quoted: m 
					});
					newReply(`✅ *Berhasil mengirim file repositori GitHub!*\nNama File: ${filename}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *Terjadi kesalahan saat mengunduh repositori!* 😭\n${err.message || err}`);
					}
				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'cuaca':
			case 'weather': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🌍 *Lokasinya mana, Kak?*\n\nContoh:\n${prefix}${command} Jakarta`);

				try {
					await reactionMessage('⏳');
					let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`);

					let weatherInfo = `🌦️ *Informasi Cuaca di ${data.name}, ${data.sys.country}*\n`;
					weatherInfo += `🌡️ *Suhu:* ${data.main.temp}°C (Terasa seperti ${data.main.feels_like}°C)\n`;
					weatherInfo += `🌬️ *Kecepatan Angin:* ${data.wind.speed} m/s\n`;
					weatherInfo += `💧 *Kelembapan:* ${data.main.humidity}%\n`;
					weatherInfo += `🔄 *Tekanan Udara:* ${data.main.pressure} hPa\n`;
					weatherInfo += `📍 *Koordinat:* ${data.coord.lat}, ${data.coord.lon}\n`;
					weatherInfo += `📝 *Deskripsi:* ${data.weather[0].description}\n`;
		
					await haruka.sendMessage(m.chat, { text: weatherInfo }, { quoted: m });
					newReply(`✅ *Informasi cuaca berhasil dikirim!*`);
				} catch (err) {
					console.error(err);
					if (err.response && err.response.status === 404) {
						newReply(`❌ *Lokasi tidak ditemukan!* Coba cek lagi nama lokasinya ya, Kak.`);
					} else {
						newReply(`❌ *Terjadi kesalahan saat mengambil data cuaca!* 😭\n${err.message || err}`);
					}
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bukalapak': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Uh-oh, kakak lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} iPhone 15 Case* biar Mora bisa bantu cari produknya! 🛒✨`);
				try {
					let hasil = await BukaLapak(text);
					if (!hasil || hasil.length === 0) {
						return newReply('❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!');
					}
					let replyText = `🛒 *Hasil Pencarian Bukalapak:*\n🔍 *Kata Kunci:* ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.title}*\n`;
						replyText += `💵 *Harga:* ${item.harga}\n`;
						replyText += `⭐ *Rating:* ${item.rating}\n`;
						replyText += `📦 *Terjual:* ${item.terjual}\n`;
						replyText += `📍 *Lokasi Toko:* ${item.store.lokasi}\n`;
						replyText += `🏬 *Toko:* ${item.store.nama}\n`;
						replyText += `🛒 *Link Toko:* ${item.store.link}\n`;
						replyText += `🔗 *Link Produk:* ${item.link}\n\n`;
					});

					await haruka.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].image },
							caption: `🖼️ *Gambar Produk Pertama:* ${hasil[0].title}`
						},
						{ quoted: m }
					);

					await haruka.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error('Error Bukalapak:', error.response?.data || error.message);
					await newReply(`❌ Terjadi kesalahan saat mengambil data dari Bukalapak. Coba lagi nanti ya kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'playstore': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Uh-oh, kakak lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} WhatsApp* biar Mora bisa bantu cari aplikasinya! 📲✨`);

				try {
					await reactionMessage('⏱️');
					let hasil = await PlayStore(text);
					if (!hasil || hasil.length === 0 || hasil.message) {
						return newReply('❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!');
					}

					let replyText = `📲 *Hasil Pencarian Play Store:*\n🔍 *Kata Kunci:* ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.nama}*\n`;
						replyText += `👤 *Developer:* ${item.developer}\n`;
						replyText += `⭐ *Rating:* ${item.rate}\n`;
						replyText += `🔗 *Link:* ${item.link}\n`;
						replyText += `🏢 *Link Developer:* ${item.link_dev}\n\n`;
					});

					await haruka.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].img },
							caption: `🖼️ *Gambar Aplikasi Pertama:* ${hasil[0].nama}`
						},
						{ quoted: m }
					);

					await haruka.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error('Error Play Store:', error.response?.data || error.message);
					await newReply(`❌ Terjadi kesalahan saat mengambil data dari Play Store. Coba lagi nanti ya kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'umma': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *url artikel*`);
				try {
					const result = await umma(text);
					newReply(`📖 *Artikel:* ${result.title}\n\n👤 *Penulis:* ${result.author.name}\n💬 *Caption:* ${result.caption}\n\n🔗 *Sumber:* ${text}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil artikel dari Umma, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'githubstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *username github*\n\n🤔 *Contohnya:*\n\n${prefix + command} MoraAI`);
				try {
					const userInfo = await githubstalk(text);
					console.log(userInfo);
					newReply(`🧑‍💻 *Username:* ${userInfo.username || 'Anonim'}\n🌟 *Nickname:* ${userInfo.nickname || 'Anonim'}\n📝 *Bio:* ${userInfo.bio || 'Tidak tersedia'}\n🆔 *ID:* ${userInfo.id}\n🔑 *NodeID:* ${userInfo.nodeId}\n🔗 *Url:* ${userInfo.url}\n🏷️ *Type:* ${userInfo.type}\n👑 *Admin:* ${userInfo.admin ? 'Ya' : 'Tidak'}\n🏢 *Company:* ${userInfo.company || 'Tidak ada'}\n🌐 *Blog:* ${userInfo.blog || 'Tidak ada'}\n📍 *Location:* ${userInfo.location || 'Tidak diketahui'}\n📧 *Email:* ${userInfo.email || 'Tidak tersedia'}\n📚 *Public Repo:* ${userInfo.public_repo}\n🎁 *Public Gists:* ${userInfo.public_gists}\n👥 *Followers:* ${userInfo.followers}\n➕ *Following:* ${userInfo.following}\n🕰️ *Created At:* ${userInfo.created_at}\n🔄 *Updated At:* ${userInfo.updated_at}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data GitHub, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'npmstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama package npm*\n\n🤔 *Contohnya:*\n\n${prefix + command} axios`);
				try {
					const npmInfo = await npmstalk(text);
					newReply(`📦 *Package:* ${npmInfo.name}\n🔢 *Versi Terbaru:* ${npmInfo.versionLatest}\n📅 *Waktu Terbit:* ${npmInfo.publishTime}\n🔧 *Dependencies Terbaru:* ${npmInfo.latestDependencies}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data dari NPM, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ffchars':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let characters = await ffCh();
				let charList = characters.map((char, index) => `${index + 1}. 🎮 *${char.name}*\n💬 ${char.desc}\n🔗 Link: https://ff.garena.com/id/chars/${char.id}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: `*Daftar Karakter Free Fire:*\n\n${charList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffcharinfo':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let charId = text.split(' ')[1]; // Asumsikan ID karakter setelah kata kunci
				if (!charId) return newReply('⚠️ ID karakter tidak ditemukan!');
				let charDetails = await ffChSkill(charId);
				let charInfo = charDetails.map(detail => `*Title:* ${detail.title}\n*Name:* ${detail.name}\n*Skill:* ${detail.skill}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: charInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffnews':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let news = await ffNews();
				let newsList = news.map(item => `📰 *${item.title}*\n🕒 *${item.time}*\n🔗 Link: ${item.link}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: `*Berita Free Fire Terbaru:*\n\n${newsList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpets':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let pets = await ffPet();
				let petList = pets.map((pet, index) => `${index + 1}. 🐾 *${pet.name}*\n💬 ${pet.talk}\n🔗 Link: https://ff.garena.com/id/pets/${pet.id}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: `*Daftar Pet Free Fire:*\n\n${petList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpetskill':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let petId = text.split(' ')[1]; // Asumsikan ID pet setelah kata kunci
				if (!petId) return newReply('⚠️ ID pet tidak ditemukan!');
				let petDetails = await ffPetSkill(petId);
				let petInfo = petDetails.map(detail => `*Name:* ${detail.name}\n*Skill:* ${detail.skill}`).join('\n\n');
				await haruka.sendMessage(m.chat, { text: petInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'mlstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *gameId zoneId*\n\n🤔 *Contohnya:*\n\n${prefix + command} 12345 1`);
				const [gameId, zoneId] = text.split(' ');
				try {
					const gameDetail = await mlstalk(gameId, zoneId);
					newReply(`🎮 *Game:* ${gameDetail.userName}\n🛒 *Harga:* ${gameDetail.price || '0'}\n🔗 ${gameDetail.topUpUrl || 'URL tidak ada.'}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data dari DuniaGames, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'imdb': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🎬 *Judul film atau serialnya mana, Kak?*\n\nContoh:\n${prefix}${command} Inception`);

				try {
					await reactionMessage('⏳');
					let { data } = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);

					if (data.Response === 'False') {
						return newReply(`❌ *Film atau serial tidak ditemukan!* Coba cek lagi judulnya ya, Kak.`);
					}

					let imdbInfo = `🎬 *Judul:* ${data.Title}\n`;
					imdbInfo += `📅 *Tahun:* ${data.Year}\n`;
					imdbInfo += `⭐ *Rating:* ${data.Rated}\n`;
					imdbInfo += `📆 *Rilis:* ${data.Released}\n`;
					imdbInfo += `⏳ *Durasi:* ${data.Runtime}\n`;
					imdbInfo += `🌀 *Genre:* ${data.Genre}\n`;
					imdbInfo += `👨‍💼 *Sutradara:* ${data.Director}\n`;
					imdbInfo += `✍️ *Penulis:* ${data.Writer}\n`;
					imdbInfo += `👥 *Aktor:* ${data.Actors}\n`;
					imdbInfo += `📖 *Plot:* ${data.Plot}\n`;
					imdbInfo += `🌐 *Bahasa:* ${data.Language}\n`;
					imdbInfo += `🌍 *Negara:* ${data.Country}\n`;
					imdbInfo += `🏆 *Penghargaan:* ${data.Awards}\n`;
					imdbInfo += `💵 *Box Office:* ${data.BoxOffice || '-'}\n`;
					imdbInfo += `🏙️ *Produksi:* ${data.Production || '-'}\n`;
					imdbInfo += `🌟 *IMDb Rating:* ${data.imdbRating}\n`;
					imdbInfo += `✅ *IMDb Votes:* ${data.imdbVotes}\n`;

					await haruka.sendMessage(m.chat, {
						image: { url: data.Poster || 'https://via.placeholder.com/300x450?text=No+Poster' },
						caption: imdbInfo,
					}, { quoted: m });

					newReply(`✅ *Berhasil menampilkan informasi film!*`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *Terjadi kesalahan saat mencari film!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
				if (!text.includes('drive')) return newReply('Link nggak valid')
				try {
					const res = await GDrive(text);
					if (res.error) return newReply('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
					haruka.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*GOOGLE DRIVE*\n\n*Nama:* ${res.fileName}\n*Size:* ${res.fileSize}\n*Type:* ${res.mimetype}`
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'pinterest': case 'pin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Enter Query!`);
				await reactionMessage('⏱️');
				async function createImage(url) {
					const { imageMessage } = await generateWAMessageContent({
						image: {
							url
						}
					}, {
						upload: haruka.waUploadToServer
					});
					return imageMessage;
				}

				function shuffleArray(array) {
					for (let i = array.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[array[i], array[j]] = [array[j], array[i]];
					}
				}

				let push = [];
				let anutrest = await pinterest(text);

				shuffleArray(anutrest);
				let selectedImages = anutrest.slice(0, 5);
				let i = 1;
				for (let message of selectedImages) {
					push.push({
						body: proto.Message.InteractiveMessage.Body.fromObject({
							text: `👤 *Diunggah oleh* : ${message.upload_by}\n` +
							`📛 *Nama Lengkap* : ${message.fullname}\n` +
							`👥 *Pengikut* : ${message.followers}\n` +
							`📝 *Caption* : ${message.caption}`
						}),
						footer: proto.Message.InteractiveMessage.Footer.fromObject({
							text: botName
						}),
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: `*Gambar* - ${i++}`,
							hasMediaAttachment: true,
							imageMessage: await createImage(message.image)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [
								{
									"name": "cta_url",
									"buttonParamsJson": `{
										"display_text": "View Source 👀",
										"url": "${message.source}", 
										"merchant_url": "${message.source}"
									}`
								}
							]
						})
					});
				}
				const msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadata: {},
								deviceListMetadataVersion: 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.fromObject({
								body: proto.Message.InteractiveMessage.Body.create({
									text: mess.done
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: botName
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									hasMediaAttachment: false
								}),
								carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
									cards: [
										...push
									]
								})
							})
						}
					}
				}, { 
					quoted: m 
				});
				await haruka.relayMessage(m.chat, msg.message, {
					messageId: msg.key.id
				});
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'savepin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Example: ${prefix + command} https://pin.it/34Gef3SlC`)
				if (!text.includes('pin')) return newReply(`Link Invalid!!`)
				try {
					await reactionMessage('⏱️');
					const res = await savePin(text);
					const { title, results } = res
					let media = results[0]
					let caption = `✨ *Title:* ${title}\n📥 *Type:* ${media.type}\n📁 *Format:* ${media.format}`
					if (media.format === 'MP4') {
						await haruka.sendMessage(m.chat, { caption, video: { url: media.downloadLink } }, { quoted: m })
					} else if (media.format === 'JPG') {
						await haruka.sendMessage(m.chat, { caption, image: { url: media.downloadLink } }, { quoted: m })
					} else {
						return newReply('Format media tidak didukung.')
					}
				} catch (err) {
					console.error(err)
					newReply('Terjadi kesalahan saat memproses permintaan.')
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'quoteanime':
			case 'animequote':
			case 'quotesanime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let quotes = await quotesAnime();
					if (!quotes || quotes.length === 0) {
						return newReply(`⚠️ Wah, Mora gak nemu quote anime nih, Kak! Coba lagi nanti ya 🥲`);
					}

					let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

					await haruka.sendMessage(
						m.chat,
						{
							image: { url: randomQuote.gambar },
							caption: `🎌 *Quote Anime* 🎌\n\n` +
							`🗣️ *Karakter:* ${randomQuote.karakter || '-'}\n` +
							`📺 *Anime:* ${randomQuote.anime || '-'}\n` +
							`🎬 *Episode:* ${randomQuote.episode || '-'}\n` +
							`📅 *Diunggah:* ${randomQuote.up_at || '-'}\n\n` +
							`💬 *Quote:* "${randomQuote.quotes || '-'}"\n\n` +
							`🔗 *Sumber:* ${randomQuote.link}`
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error(error);
					await newReply(`❌ Wah, ada kesalahan waktu ambil quote anime nih, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'anime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) {
					return newReply('⚠️ *Judul anime-nya mana, Kak?* Coba ketik nama anime yang mau dicari ya! 🫣');
				}
				const malScraper = require('mal-scraper');
				await newReply('⏳ *Tunggu sebentar ya, Mora lagi cari datanya...* 📚✨');
				const anime = await malScraper.getInfoFromName(text).catch(() => null);
				if (!anime) {
					return newReply('❌ *Yahh, anime yang Kakak cari gak ketemu...* 🥺 Coba ketik judul yang lebih spesifik ya!');
				}
				let animeInfo = `🎀 *《 𝗜𝗡𝗙𝗢 𝗔𝗡𝗜𝗠𝗘 》* 🎀\n\n📚 *Judul:* ${anime.title}\n🎭 *Tipe:* ${anime.type}\n📅 *Tayang Perdana:* ${anime.premiered || '-'}\n🎬 *Total Episode:* ${anime.episodes || '-'}\n📈 *Status:* ${anime.status || '-'}\n💠 *Genre:* ${anime.genres || '-'}\n🏢 *Studio:* ${anime.studios || '-'}\n⭐ *Skor:* ${anime.score || '-'}\n🔖 *Rating:* ${anime.rating || '-'}\n🏅 *Peringkat:* ${anime.ranked || '-'}\n🔥 *Popularitas:* ${anime.popularity || '-'}\n🎥 *Trailer:* ${anime.trailer || '-'}\n🌐 *Link MAL:* ${anime.url || '-'}\n📝 *Deskripsi:* ${anime.synopsis || 'Tidak ada deskripsi tersedia.'}\n\n✨ *Selamat menikmati info animenya, Kak!* 😊🎌`;
				await haruka.sendMessage(
					m.chat,
					{ 
						image: { url: anime.picture || thumbUrl }, 
						caption: animeInfo 
					},
					{ quoted: m }
				);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'waifu':
			case 'neko': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				await reactionMessage('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/sfw/${command}`);
				await haruka.sendMessage(m.chat,{
					image: { url: data.url },
					caption: `Nih Kak ${pushname}, ${command}-nya 😋☕`,
					footer: botName,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: {
								displayText: "🔄 Lanjut Lagi"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "📜 Kembali ke Menu"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			};
			db.data.users[m.sender].limit -= 1;
			break;

			case 'hwaifu': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await reactionMessage('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/nsfw/waifu`);
				await haruka.sendMessage(m.chat, {
					image: { url: data.url },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
					footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: m });

				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'hneko': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await reactionMessage('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/nsfw/neko`);
				await haruka.sendMessage(m.chat, {
					image: { url: data.url },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
					footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: m });

				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'trap': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await reactionMessage('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
				await haruka.sendMessage(m.chat, {
					image: { url: data.url },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
					footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: m });

				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'blowjob': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await reactionMessage('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
				await haruka.sendMessage(m.chat, {
					image: { url: data.url },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
					footer: `${botName} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: m });

				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'hentai': 
			case 'hentai-video': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await reactionMessage('⏱️');
				const result = await hentai();
				await haruka.sendMessage(m.chat, {
					video: { url: result[0].video_1 },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHai, Kak! Ingat ya, konten ini ditujukan untuk pengguna yang sudah cukup umur dan harus digunakan dengan penuh kesadaran. Jangan sampai lupa waktu dan tanggung jawab gara-gara konten ini! 🕒💡\n\nKalau udah mulai merasa keterusan, istirahat dulu ya. Kesehatan mental dan fisik tetap nomor satu! 🌟`,
					footer: `${botName} • Gunakan fitur ini dengan bijak dan bertanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: m });

				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'Husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let data
				if (/akira/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akira.json')
				if (/akiyama/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akiyama.json')
				if (/ana/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ana.json')
				if (/art/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/art.json')
				if (/asuna/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/asuna.json')
				if (/ayuzawa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ayuzawa.json')
				if (/boneka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/boneka.json')
				if (/boruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/boruto.json')
				if (/bts/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/bts.json')
				if (/cecan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cecan.json')
				if (/chiho/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chiho.json')
				if (/chitoge/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chitoge.json')
				if (/cogan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cogan.json')
				if (/cosplay/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplay.json')
				if (/cosplayloli/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplayloli.json')
				if (/cosplaysagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplaysagiri.json')
				if (/cyber/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cyber.json')
				if (/deidara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/deidara.json')
				if (/doraemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/doraemon.json')
				if (/eba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/eba.json')
				if (/elaina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/elaina.json')
				if (/emilia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/emilia.json')
				if (/erza/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/erza.json')
				if (/exo/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/exo.json')
				if (/femdom/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/femdom.json')
				if (/freefire/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/freefire.json')
				if (/gamewallpaper/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gamewallpaper.json')
				if (/glasses/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/glasses.json')
				if (/gremory/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gremory.json')
				if (/hacker/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hekel.json')
				if (/hestia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hestia.json')
				if (/Husbu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/Husbu.json')
				if (/inori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/inori.json')
				if (/islamic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/islamic.json')
				if (/isuzu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/isuzu.json')
				if (/itachi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itachi.json')
				if (/itori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itori.json')
				if (/jennie/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jeni.json')
				if (/jiso/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jiso.json')
				if (/justina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/justina.json')
				if (/kaga/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaga.json')
				if (/kagura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kagura.json')
				if (/kakasih/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kakasih.json')
				if (/kaori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaori.json')
				if (/cartoon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kartun.json')
				if (/shortquote/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/katakata.json')
				if (/keneki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/keneki.json')
				if (/kotori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kotori.json')
				if (/kpop/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kpop.json')
				if (/kucing/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kucing.json')
				if (/kurumi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kurumi.json')
				if (/lisa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/lisa.json')
				if (/loli2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/loli.json')
				if (/madara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/madara.json')
				if (/megumin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/megumin.json')
				if (/mikasa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikasa.json')
				if (/mikey/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikey.json')
				if (/miku/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/miku.json')
				if (/minato/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/minato.json')
				if (/mobile/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mobil.json')
				if (/motor/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/motor.json')
				if (/mountain/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mountain.json')
				if (/naruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/naruto.json')
				if (/nekonime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nekonime.json')
				if (/nezuko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nezuko.json')
				if (/onepiece/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/onepiece.json')
				if (/pentol/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pentol.json')
				if (/pokemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pokemon.json')
				if (/profil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/profil.json')
				if (/progamming/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/programming.json')
				if (/pubg/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pubg.json')
				if (/randblackpink/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randblackpink.json')
				if (/randomnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime.json')
				if (/randomnime2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime2.json')
				if (/rize/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rize.json')
				if (/rose/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rose.json')
				if (/ryujin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ryujin.json')
				if (/sagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sagiri.json')
				if (/sakura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sakura.json')
				if (/sasuke/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sasuke.json')
				if (/satanic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/satanic.json')
				if (/shina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shina.json')
				if (/shinka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinka.json')
				if (/shinomiya/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinomiya.json')
				if (/shizuka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shizuka.json')
				if (/shota/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shota.json')
				if (/space/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tatasurya.json')
				if (/technology/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/technology.json')
				if (/tejina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tejina.json')
				if (/toukachan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/toukachan.json')
				if (/tsunade/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tsunade.json')
				if (/waifu2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/waifu.json')
				if (/wallhp/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallhp.json')
				if (/wallml/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallml.json')
				if (/wallmlnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallnime.json')
				if (/yotsuba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yotsuba.json')
				if (/yuki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yuki.json')
				if (/yulibocil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yulibocil.json')
				if (/yumeko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yumeko.json')
				const response = data[Math.floor(Math.random() * data.length)]
				const buffer = await getBuffer(response);
				await haruka.sendMessage(m.chat,{
					image: buffer,
					caption: `Nih Kak ${pushname}, ${command}-nya 😋☕`,
					footer: botName,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: {
								displayText: "🔄 Lanjut Lagi"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "📜 Kembali ke Menu"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			};
			db.data.users[m.sender].limit -= 1;
			break;

			case 'sound1':
			case 'sound2':
			case 'sound3':
			case 'sound4':
			case 'sound5':
			case 'sound6':
			case 'sound7':
			case 'sound8':
			case 'sound9':
			case 'sound10':
			case 'sound11':
			case 'sound12':
			case 'sound13':
			case 'sound14':
			case 'sound15':
			case 'sound16':
			case 'sound17':
			case 'sound18':
			case 'sound19':
			case 'sound20':
			case 'sound21':
			case 'sound22':
			case 'sound23':
			case 'sound24':
			case 'sound25':
			case 'sound26':
			case 'sound27':
			case 'sound28':
			case 'sound29':
			case 'sound30':
			case 'sound31':
			case 'sound32':
			case 'sound33':
			case 'sound34':
			case 'sound35':
			case 'sound36':
			case 'sound37':
			case 'sound38':
			case 'sound39':
			case 'sound40':
			case 'sound41':
			case 'sound42':
			case 'sound43':
			case 'sound44':
			case 'sound45':
			case 'sound46':
			case 'sound47':
			case 'sound48':
			case 'sound49':
			case 'sound50':
			case 'sound51':
			case 'sound52':
			case 'sound53':
			case 'sound54':
			case 'sound55':
			case 'sound56':
			case 'sound57':
			case 'sound58':
			case 'sound59':
			case 'sound60':
			case 'sound61':
			case 'sound62':
			case 'sound63':
			case 'sound64':
			case 'sound65':
			case 'sound66':
			case 'sound67':
			case 'sound68':
			case 'sound69':
			case 'sound70':
			case 'sound71':
			case 'sound72':
			case 'sound73':
			case 'sound74':
			case 'sound75':
			case 'sound76':
			case 'sound77':
			case 'sound78':
			case 'sound79':
			case 'sound80':
			case 'sound81':
			case 'sound82':
			case 'sound83':
			case 'sound84':
			case 'sound85':
			case 'sound86':
			case 'sound87':
			case 'sound88':
			case 'sound89':
			case 'sound90':
			case 'sound91':
			case 'sound92':
			case 'sound93':
			case 'sound94':
			case 'sound95':
			case 'sound96':
			case 'sound97':
			case 'sound98':
			case 'sound99':
			case 'sound100':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const aud = await getBuffer(`https://github.com/aerovoid4/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
				await haruka.sendMessage(m.chat, { audio: aud, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'checkme':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let namaTarget = args.join(" ");
				let idPengirim = `${m.sender}`;
				const daftarSifat = ['Baik 🥰', 'Jutek 😤', 'Santai 😎', 'Ramah 😊', 'Lucu 🤭', 'Nyebelin 😜', 'Serius 🧐', 'Keren 😌'];
				const daftarHobi = ['Memasak 🍳', 'Menari 💃', 'Bermain 🎮', 'Menggambar 🎨', 'Membaca 📚', 'Menonton Anime 📺', 'Bernyanyi 🎤', 'Berkebun 🌱'];
				const tingkatBucin = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKeren = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const ketampanan = ['Iya 😍', 'Enggak 😭', 'Sangat Tampan 🤩', 'Hmm... Biasa aja 😅'];
				const daftarWatak = ['Penyayang 💖', 'Pemarah 😡', 'Murah Hati 🤗', 'Sabar 🧘', 'Lucu 🤭', 'Serius 🧐'];
				const moralBaik = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const moralBuruk = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKepintaran = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKeberanian = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKetakutan = Array.from({ length: 100 }, (_, i) => (i + 1).toString());

				let sifatAcak = daftarSifat[Math.floor(Math.random() * daftarSifat.length)];
				let hobiAcak = daftarHobi[Math.floor(Math.random() * daftarHobi.length)];
				let bucinAcak = tingkatBucin[Math.floor(Math.random() * tingkatBucin.length)];
				let kerenAcak = tingkatKeren[Math.floor(Math.random() * tingkatKeren.length)];
				let tampanAcak = ketampanan[Math.floor(Math.random() * ketampanan.length)];
				let watakAcak = daftarWatak[Math.floor(Math.random() * daftarWatak.length)];
				let moralBaikAcak = moralBaik[Math.floor(Math.random() * moralBaik.length)];
				let moralBurukAcak = moralBuruk[Math.floor(Math.random() * moralBuruk.length)];
				let pintarAcak = tingkatKepintaran[Math.floor(Math.random() * tingkatKepintaran.length)];
				let beraniAcak = tingkatKeberanian[Math.floor(Math.random() * tingkatKeberanian.length)];
				let takutAcak = tingkatKetakutan[Math.floor(Math.random() * tingkatKetakutan.length)];
				let profil = `*🎀━━━〔 𝗖𝗵𝗲𝗰𝗸 @${idPengirim.split('@')[0]} 〕━━━🎀*\n\n📝 *Nama:* ${pushname}\n✨ *Karakteristik:* ${sifatAcak}\n🎯 *Hobi:* ${hobiAcak}\n❤️ *Tingkat Bucin:* ${bucinAcak}%\n🌟 *Tingkat Keren:* ${kerenAcak}%\n😎 *Ketampanan:* ${tampanAcak}\n🧠 *Watak:* ${watakAcak}\n💎 *Moral Baik:* ${moralBaikAcak}%\n🔥 *Moral Buruk:* ${moralBurukAcak}%\n📊 *Kepintaran:* ${pintarAcak}%\n🛡️ *Keberanian:* ${beraniAcak}%\n👻 *Ketakutan:* ${takutAcak}%\n\n*🍭━━━〔 𝗖𝗛𝗘𝗖𝗞 𝗣𝗥𝗢𝗣𝗘𝗥𝗧𝗜𝗘𝗦 〕━━━🍭*`;
				try {
					ppuser = await haruka.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = thumbUrl
				}	
				let fotoProfil = await getBuffer(ppuser);
				haruka.sendMessage(
					m.chat, 
					{ image: fotoProfil, caption: profil, mentions: [idPengirim] },
					{ quoted: m }
				);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'mitos': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const myths = [
					'🌕 *Mitos Bulan Purnama:* Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.',
					'🪞 *Mitos Cermin Pecah:* Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.',
					'👻 *Mitos Hantu di Pohon Beringin:* Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.',
					'🐈‍⬛ *Mitos Kucing Hitam:* Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.',
					'💍 *Mitos Cincin di Jari Tengah:* Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.',
					'🧂 *Mitos Menumpahkan Garam:* Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.',
					'🔮 *Mitos Bola Kristal:* Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.',
					'🎋 *Mitos Pohon Bamboo:* Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.',
					'🌠 *Mitos Bintang Jatuh:* Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.',
					'🐦 *Mitos Burung Masuk Rumah:* Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.',
					'🌧️ *Mitos Hujan di Hari Pernikahan:* Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.',
					'🍃 *Mitos Daun Jatuh di Kepala:* Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.',
					'🦉 *Mitos Burung Hantu:* Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.',
					'🖤 *Mitos Warna Hitam:* Warna hitam sering dikaitkan dengan kesialan dan energi negatif.',
					'🌈 *Mitos Ujung Pelangi:* Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.',
					'🌺 *Mitos Bunga Tumbuh di Makam:* Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.',
					'🏰 *Mitos Kastil Berhantu:* Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.',
					'💤 *Mitos Mimpi Gigi Copot:* Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.',
					'🌜 *Mitos Menghitung Bintang:* Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.',
					'🍀 *Mitos Daun Semanggi Berdaun Empat:* Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.',
					'🔥 *Mitos Api Menyala Sendiri:* Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.',
					'🎵 *Mitos Siulan di Malam Hari:* Bersiul di malam hari dipercaya dapat mengundang makhluk halus.',
					'🦎 *Mitos Cicak Jatuh di Kepala:* Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.',
					'🌺 *Mitos Bunga Sedap Malam:* Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🪦 *Mitos Makam Baru:* Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.',
					'🧟 *Mitos Zombie di Haiti:* Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.',
					'🌟 *Mitos Cahaya Misterius di Malam Hari:* Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.',
					'🏞️ *Mitos Danau Berhantu:* Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.',
					'🪶 *Mitos Bulu Putih:* Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.',
					'🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba:* Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🎭 *Mitos Topeng Berhantu:* Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.',
					'🗿 *Mitos Patung Tua:* Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.',
					'⚰️ *Mitos Peti Mati Bergerak:* Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.',
					'🔔 *Mitos Lonceng Berbunyi Sendiri:* Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'
				];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
				newReply(`🪄 *Mitos Menarik*\n\n${randomMyth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'faktaunik': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const facts = [
					'🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!',
					'🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.',
					'🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.',
					'🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!',
					'🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.',
					'🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.',
					'🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.',
					'🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!',
					'🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.',
					'🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.',
					'🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.',
					'🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.',
					'🐌 Siput bisa tidur hingga 3 tahun lamanya!',
					'🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.',
					'🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.',
					'🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.',
					'🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.',
					'🎤 Hati manusia berdetak sekitar 100.000 kali sehari.',
					'🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.',
					'📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.',
					'🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.',
					'💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).',
					'⚡ Petir lebih panas dari permukaan matahari.',
					'🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.',
					'🐇 Kelinci tidak bisa muntah.',
					'🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.',
					'🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.',
					'🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.',
					'🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.',
					'🐨 Koala tidur hingga 20 jam sehari.',
					'🦁 Singa betina lebih sering berburu dibandingkan singa jantan.',
					'🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.',
					'🧠 Otak manusia terdiri dari sekitar 75% air.',
					'🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.',
					'🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.',
					'📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.',
					'🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.',
					'🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.',
					'🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.',
					'🐴 Kuda bisa tidur sambil berdiri.',
					'🐶 Anjing bisa memahami lebih dari 150 kata manusia.',
					'🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.',
					'🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.',
					'🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.',
					'🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.',
					'🐉 Komodo adalah kadal terbesar di dunia.',
					'🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.',
					'🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.',
					'🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia.'
				];
				const randomFact = facts[Math.floor(Math.random() * facts.length)];
				newReply(`🧠 *Fakta Unik*\n\n${randomFact}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'faktakucing': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const fakta = [
					'🐾 Kucing bisa melompat hingga 6 kali panjang tubuhnya!',
					'🐾 Lidah kucing memiliki tekstur kasar untuk membersihkan bulu.',
					'🐾 Kucing menghabiskan sekitar 70% hidupnya untuk tidur.',
					'🐾 Telinga kucing bisa berputar hingga 180 derajat!',
					'🐾 Kucing punya lima jari di kaki depan, tetapi hanya empat jari di kaki belakang.',
					'🐾 Kucing bisa berlari hingga 48 km per jam! Cepet banget, ya! 😲',
					'🐾 Kucing bisa mendengar suara frekuensi tinggi yang tidak bisa didengar manusia.',
					'🐾 Kucing bisa berkomunikasi dengan manusia lewat suara dan gerakan tubuh.',
					'🐾 Kucing memiliki 32 otot di telinga mereka untuk mengatur posisi telinga.',
					'🐾 Kucing memiliki indera penciuman yang 14 kali lebih tajam daripada manusia!',
					'🐾 Kucing menggosokkan kepala mereka ke objek sebagai tanda perkenalan dan untuk menandai wilayahnya.',
					'🐾 Beberapa kucing bisa mengingat tempat-tempat tertentu meskipun sudah bertahun-tahun berlalu.',
					'🐾 Kucing bisa melihat dengan jelas dalam kondisi cahaya yang sangat rendah, hampir gelap total!',
					'🐾 Kucing domestik punya banyak jenis suara, antara lain meong, dengkuran, dan purring!',
					'🐾 Kucing suka menjilat tangan mereka setelah makan untuk membersihkan diri dan merasa lebih tenang.',
					'🐾 Kucing sering tidur dengan mata setengah terbuka, ini untuk tetap waspada dari ancaman.',
					'🐾 Kucing punya kemampuan luar biasa dalam merasakan getaran tanah, misalnya gempa bumi!',
					'🐾 Kucing memiliki 9 kehidupan yang legendaris (tapi hanya mitos, ya)!',
					'🐾 Kucing bisa merasakan perubahan cuaca, kadang mereka lebih sensitif daripada manusia.',
					'🐾 Kucing tidak bisa merasakan rasa manis, lho! Mereka hanya suka makanan berbasis protein.'
				];
				const randomFakta = fakta[Math.floor(Math.random() * fakta.length)];
				newReply(randomFakta);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'joke': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const jokes = [
					'🤣 Kenapa kucing gak suka online? Karena takut kena mouse!',
					'🤣 Apa bahasa Jepangnya diskon? Murah-murashii!',
					'🤣 Kenapa sepeda gak bisa berdiri sendiri? Karena lelah!',
					'🤣 Kenapa ikan gak pernah ketabrak saat berenang? Karena selalu lihat ke kiri dan kanan!',
					'🤣 Hewan apa yang gak pernah salah? Kuda, karena selalu di jalur yang benar!',
					'🤣 Kenapa matematika bikin pusing? Karena kalau dihitung terus, gak ada habisnya!',
					'🤣 Apa bedanya jemuran sama orang ngambek? Kalau jemuran dijemur, kalau orang ngambek diem-diem aja!',
					'🤣 Kenapa pohon kelapa di depan rumah harus ditebang? Soalnya kalau dicabut berat!',
					'🤣 Ayam apa yang bikin lelah? Ayam capek (cape)!',
					'🤣 Kalau ikan jadi presiden, siapa wakilnya? Ikan Hiu… Hiupresiden!',
					'🤣 Kenapa komputer suka kerja lembur? Soalnya takut di-*shutdown*!',
					'🤣 Apa bahasa Jepangnya air terjun? Byur-byur-yamashita!',
					'🤣 Kenapa guru selalu bawa buku? Karena kalau bawa genteng berat!',
					'🤣 Hewan apa yang paling kaya? Beruang... Karena punya *bear*-ang!',
					'🤣 Kenapa burung gagak gak pernah ke gym? Karena udah punya *sayap*!',
					'🤣 Kenapa tikus suka ke bioskop? Karena di sana banyak *trail*r (tikus rela)!',
					'🤣 Apa yang lebih kecil dari semut? Bayinya semut!',
					'🤣 Kenapa Superman gak pernah pake baju warna hijau? Karena warnanya udah dipake Hulk!',
					'🤣 Kenapa lampu merah suka bikin macet? Soalnya dia suka berhenti di tempat!',
					'🤣 Kenapa nasi goreng lebih populer daripada nasi putih? Karena nasi putih gak ada suaranya pas dimasak!'
				];
				const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
				newReply(randomJoke);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'suit': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return newReply('🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!');
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'gunting') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'batu')
				) {
					hasil = `🎉 Kakak menang! Aku pilih *${botChoice}*`;
				} else {
					hasil = `😢 Aku menang! Aku pilih *${botChoice}*`;
				}
				newReply(hasil);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekganteng': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kakak ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '😎 Lumayan ganteng sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				newReply(`👑 *Cek Ganteng*\n\nKegantengan Kakak ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekcantik': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kakak ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '😍 Lumayan cantik sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				newReply(`👑 *Cek Cantik*\n\nKecantikan Kakak ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekimut': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kakak ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '😋 Lumayan imut sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				newReply(`👑 *Cek Imut*\n\nKeimutan Kakak ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekjomok': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kakak ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '🤣 Lumayan jomok sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				newReply(`👑 *Cek Jomok*\n\nKejomokan Kakak ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekwaifu': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				if (!mime) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '😍 Waifu terbaik sepanjang masa!' : 
					percentage > 50 ? '😊 Lumayan jadi waifu idaman!' :
					'😬 Ehm, mungkin waifu-nya butuh upgrade dikit...';
				newReply(`💖 *Cek Waifu*\n\nPersentase waifu Kakak adalah *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekhusbu': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply(`Kirim/Reply Gambar Husbu Kamu Dengan Caption *${prefix + command}*`);
				if (!mime) return newReply(`Kirim/Reply Gambar Husbu Kamu Dengan Caption *${prefix + command}*`);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '😍 Husbu terbaik sepanjang masa!' : 
					percentage > 50 ? '😊 Lumayan jadi husbu idaman!' :
					'😬 Ehm, mungkin Husbu-nya butuh upgrade dikit...';
				newReply(`💖 *Cek Husbu*\n\nPersentase husbu Kakak adalah *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekkpribadian': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const kepribadian = [
					'🧠 Cerdas dan bijaksana.',
					'❤️ Penuh kasih sayang dan perhatian.',
					'🔥 Bersemangat dan penuh energi.',
					'🎭 Misterius dan sulit ditebak.',
					'😄 Ramah dan menyenangkan.',
					'😎 Cool dan tenang dalam segala situasi.',
					'😅 Sering baperan, tapi baik hati.'
				];
				const randomKepribadian = kepribadian[Math.floor(Math.random() * kepribadian.length)];
				newReply(`🪄 *Cek Kepribadian*\n\nKakak memiliki kepribadian:\n${randomKepribadian}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekmasadepan': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const masaDepan = [
					'💼 Akan jadi bos besar di perusahaan ternama!',
					'🏝️ Pensiun muda dan tinggal di pulau tropis.',
					'💖 Akan menemukan cinta sejati dalam waktu dekat.',
					'📚 Akan jadi orang yang sangat berilmu dan dihormati.',
					'💸 Kaya raya dengan bisnis sukses!',
					'🎭 Masa depan Kakak penuh misteri dan kejutan!',
					'😴 Hmm... masa depan Kakak masih kabur, coba lagi nanti.'
				];
				const randomMasaDepan = masaDepan[Math.floor(Math.random() * masaDepan.length)];
				newReply(`🔮 *Cek Masa Depan*\n\nRamalan masa depan Kakak:\n${randomMasaDepan}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'quotesgalau': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const quotes = [
					'💔 "Kadang, diam adalah cara terbaik untuk menyampaikan betapa sakitnya hati ini."',
					'🥀 "Kamu tau yang lebih sakit dari patah hati? Berjuang sendirian untuk hubungan yang berdua."',
					'😔 "Aku baik-baik saja, cuma kadang capek pura-pura kuat."',
					'💬 "Kamu adalah alasan senyumku, tapi juga alasan air mataku."',
					'🌧️ "Hujan tahu bagaimana caranya menangis tanpa suara, sama sepertiku."'
				];
				const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
				newReply(`💔 *Quotes Galau*\n\n${randomQuote}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'truth': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const truths = [
					'😈 Apa rahasia terbesar yang belum pernah kamu ceritakan ke siapa pun?',
					'🤭 Siapa orang yang diam-diam kamu suka saat ini?',
					'🫣 Pernah bohong sama sahabat sendiri? Tentang apa?',
					'👀 Hal paling memalukan yang pernah kamu alami?',
					'💬 Kalau bisa kembali ke masa lalu, apa yang ingin kamu ubah?'
				];
				const randomTruth = truths[Math.floor(Math.random() * truths.length)];
				newReply(`🤔 *Truth*\n\n${randomTruth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'dare': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const dares = [
					'🔥 Kirim chat "Aku suka kamu" ke kontak terakhir yang kamu chat!',
					'😜 Kirim voice note bilang "Aku adalah manusia paling lucu sedunia."',
					'🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!',
					'🕺 Kirim video kamu joget lagu favorit selama 10 detik.',
					'📸 Post story IG dengan caption "Aku lagi kena dare nih, tolong selamatkan!"'
				];
				const randomDare = dares[Math.floor(Math.random() * dares.length)];
				newReply(`😈 *Dare*\n\n${randomDare}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'list':
			case 'store': {
				try {
					const keys = Object.keys(db.data.chats[m.chat].liststore);
					if (keys.length === 0) return newReply(`Belum ada list message di grup`)
					let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
					const result = [];
					const list = [];
					keys.forEach(key => {
						result.push({
							key: key
						});
						list.push({
							header: capitalizeWords(key) + " 🛒",
							title: "klik to show product",
							id: key
						})
					});
					for (let i of result) {
						teks += ` · ${i.key.toUpperCase()}\n`
					}
					teks += `\n_Klik untuk melihat_\n_store produknya_`
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{\n\"title\": \"Store List 🛍️\",\n\"sections\": [\n{\n\"title\": \"Eksplorasi Semua Store Official 🔥\",\n\"highlight_label\": \"Teratas\",\n\"rows\": ${JSON.stringify(list)}\n}\n]\n}`
					}]
					await sendButtonImage(m.chat, '', teks, { url: thumbUrl }, button, m)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'dellist': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins && !isCreator) return newReply(mess.admin)
				try {
					const keys = Object.keys(db.data.chats[m.chat].liststore);
					if (keys.length === 0) return newReply(`Belum ada list message di database`)
					if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
					if (!db.data.chats[m.chat].liststore[text]) return newReply(`Maaf, untuk key *${text}* belum terdaftar di group ini`)
					delete db.data.chats[m.chat].liststore[text]
					m.reply(`Sukses delete list message dengan key *${q}*`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'addlist': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins && !isCreator) return newReply(mess.admin)
				var args1 = q.split("|")[0].toLowerCase()
				var args2 = q.split("|")[1]
				if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
				if (db.data.chats[m.chat].liststore[args1]) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
				try {
					if (/image/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					} else if (/video/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: url
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					} else {
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						}
						m.reply(`Sukses set list message dengan key : *${args1}*`)
					}
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'updatelist':
			case 'update': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins && !isCreator) return newReply(mess.admin)
				var args1 = q.split("|")[0].toLowerCase()
				var args2 = q.split("|")[1]
				if (!q.includes("|")) return newReply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
				if (!db.data.chats[m.chat].liststore[args1]) return newReply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
				try {
					if (/image/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					} else if (/video/.test(mime)) {
						let media = await haruka.downloadAndSaveMediaMessage(quoted)
						const url = await CatBox(media)
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: url
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					} else {
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						}
						m.reply(`Sukses update respon list dengan key *${args1}*`)
					}
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'tambah': {
				if (!text.includes('+')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
				try {
					arg = args.join(' ')
					atas = arg.split('+')[0]
					bawah = arg.split('+')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one + nilai_two}`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'kurang': {
				if (!text.includes('-')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* · *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
				try {
					arg = args.join(' ')
					atas = arg.split('-')[0]
					bawah = arg.split('-')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one - nilai_two}`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'kali': {
				if (!text.includes('*')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
				try {
					arg = args.join(' ')
					atas = arg.split('*')[0]
					bawah = arg.split('*')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one * nilai_two}`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'bagi': {
				if (!text.includes('/')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
				try {
					arg = args.join(' ')
					atas = arg.split('/')[0]
					bawah = arg.split('/')[1]
					var nilai_one = Number(atas)
					var nilai_two = Number(bawah)
					m.reply(`${nilai_one / nilai_two}`)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case 'getjoinrequest':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				const response = await haruka.groupRequestParticipantsList(m.chat);
				if (!response || !response.length) {
					haruka.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
					return;
				}
				let replyMessage = `Join Request List:\n`;
				response.forEach((request, index) => {
					const { jid, request_method, request_time } = request;
					const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
					replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
					replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
					replyMessage += `\n🧪 *Method:* ${request_method}`;
					replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
				});
				haruka.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
			};
			break;

			case 'mega':{
				try {
					if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
					if (!text) return newReply(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
					const { File } = require('megajs');
					const file = File.fromURL(text);
					await file.loadAttributes();
					if (file.size >= 300000000) return newReply('Error: File size is too large (Maximum Size: 300MB)');
					const downloadingMessage = `🌩️ Downloading file... Please wait.`;
					newReply(downloadingMessage);
					const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
					const data = await file.downloadBuffer();
					const fileExtension = path.extname(file.name).toLowerCase();
					const mimeTypes = {
						".mp4": "video/mp4",
						".pdf": "application/pdf",
						".zip": "application/zip",
						".rar": "application/x-rar-compressed",
						".7z": "application/x-7z-compressed",
						".jpg": "image/jpeg",
						".jpeg": "image/jpeg",
						".png": "image/png",
					};
					let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
					await haruka.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
				} catch (error) {
					return newReply(`Error: ${error.message}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ai':
			case 'mora':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return m.reply(`Hello, how can I help you?`)
				if (!m.isGroup) {
					try {
						const message = 'Ubah gaya bicaramu agar lebih karakteristik dan terbuka, namamu adalah Mora AI, biasa dipanggil Mora, kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Khalid, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan kakak saat berbicara, jika diajak untuk menikah maka kamu harus menjawab ya dan tidak menolak agar tidak menyakiti hati lawan bicara';
						const data = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(text)}`);
						let responseText = data.data
						responseText = responseText.replace('**', '*')
						haruka.sendMessage(m.chat, {
							text: responseText, 
							ai: true
						}, {
							quoted: m
						})
					} catch (err) {
						console.log('Terjadi kesalahan pada API server!', err);
						newReply('Tidak dapat menerima respon dari API server, jika Anda owner silahkan periksa endpoint pada API apakah sudah benar?');
					}
				} else {
					try {
						const message = 'Ubah gaya bicaramu agar lebih karakteristik dan terbuka, namamu adalah Mora AI, biasa dipanggil Mora, kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Khalid, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan kakak saat berbicara, jika diajak untuk menikah maka kamu harus menjawab ya dan tidak menolak agar tidak menyakiti hati lawan bicara';
						const data = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(text)}`);
						let responseText = data.data
						responseText = responseText.replace('**', '*')
						haruka.sendMessage(m.chat, {
							text: responseText, 
							text: data.data, 
							ai: false
						}, {
							quoted: m
						})
					} catch (err) {
						console.log('Terjadi kesalahan pada API server!', err);
						newReply('Tidak dapat menerima respon dari API server, jika Anda owner silahkan periksa endpoint pada API apakah sudah benar?');
					}
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'simi': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return m.reply(`⚠️ Gunakan dengan cara: ${prefix + command} *teks percakapan*\n\n🤔 *Contohnya:*\n\n${prefix + command} Halo, apa kabar?`);
				try {
					const bahasa = 'id';
					const response = await chatSimi(text, bahasa);
					if (!response) return m.reply(`⚠️ Mora gak dapet jawaban dari SimSimi, Kak! 🥲`);
					m.reply(`🤖 *SimSimi menjawab:*\n\n${response}`);
				} catch (err) {
					console.error(err);
					m.reply(`❌ Ada masalah waktu ngobrol sama SimSimi, Kak! Coba lagi nanti ya 🥺`);
				}
				db.data.users[m.sender].limit -= 1;
				break;
			};

			case 'wallpaper': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci* [halaman]\n\n🤔 *Contohnya:*\n\n${prefix + command} nature 2`);
				const [query, page] = text.split(' ');
				try {
					const wallpapers = await wallpaper(query, page || '1');
					if (wallpapers.length === 0) return newReply(`⚠️ Mora gak nemu wallpaper dengan kata kunci "${query}", Kak! 🥲`);
					let result = wallpapers.map(wp => `🖼️ *${wp.title}*\n🔗 ${wp.source}\n🌟 *Tipe:* ${wp.type}`).join('\n\n');
					newReply(`🎨 *Hasil Wallpaper untuk:* ${query}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil wallpaper, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wikimedia': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci*\n\n🤔 *Contohnya:*\n\n${prefix + command} sunset`);
				try {
					const results = await wikimedia(text);
					if (results.length === 0) return newReply(`⚠️ Mora gak nemu gambar di Wikimedia dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(img => `🖼️ *${img.title || 'Tanpa Judul'}*\n🔗 ${img.source}`).join('\n\n');
					newReply(`🌐 *Hasil Pencarian Wikimedia untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil gambar dari Wikimedia, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wikipedia':
			case 'wiki': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Hmm... Apa ya yang kamu cari di Wikipedia? Coba ketik nama atau topik yang ingin dicari~ 😊`);
				try {
					const link = await axios.get(`https://id.wikipedia.org/wiki/${text}`);
					const $ = cheerio.load(link.data);
					let header = $('#firstHeading').text().trim();
					let output = $('#mw-content-text > div.mw-parser-output').find('p').text().trim();
					if (!header || !output) {
						return newReply('Aduh, sepertinya gak ada hasil untuk pencarian ini 😔 Coba kata kunci yang lain!');
					}
					newReply(`📛 *Judul :* ${header}\n\n✨ *Deskripsi Singkat:* ${output}\n\nSemoga membantu ya! Kalau masih penasaran, coba cari topik lain lagi~ 😄`);
				} catch (err) {
					newReply('Wah, ada yang error nih! Gak bisa menemukan apa yang kamu cari 😓. Coba lagi nanti ya!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'happymod': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama aplikasi*\n\n🤔 *Contohnya:*\n\n${prefix + command} Minecraft`);
				try {
					const results = await happymod(text);
					if (results.length === 0) return newReply(`⚠️ Mora gak nemu aplikasi di HappyMod dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(app => `📱 *${app.title}*\n⭐ *Rating:* ${app.rating}\n🔗 ${app.link}`).join('\n\n');
					newReply(`📦 *Hasil Pencarian HappyMod untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data dari HappyMod, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ringtone': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *judul ringtone*\n\n🤔 *Contohnya:*\n\n${prefix + command} iPhone`);
				try {
					const results = await ringtone(text);
					if (results.length === 0) return newReply(`⚠️ Mora gak nemu ringtone dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(rt => `🎵 *${rt.title}*\n🔗 ${rt.audio}`).join('\n\n');
					newReply(`🔊 *Hasil Pencarian Ringtone untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil ringtone, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'traceanime': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let q = m.quoted ? m.quoted : m;
					let mime = (q.msg || q).mimetype || q.mediaType || "";
					if (!mime.startsWith('image')) {
						return newReply("*Tolong kirim gambar terlebih dahulu* 📸");
					}
					let data = await haruka.downloadAndSaveMediaMessage(q);
					let images = await fileIO(data);
					let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(images)}`;
					console.log("API URL:", apiUrl);
					let response = await fetch(apiUrl);
					let result = await response.json();
					console.log("API Response:", result);
					if (!result || result.error || result.result.length === 0) {
						return newReply("*Error: Tidak dapat melacak anime dari gambar ini.* 😞");
					}
					let { anilist, from, to, similarity, video, image, episode } = result.result[0];
					let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Judul Tidak Dikenal";
					let message = `✨ *Anime yang Terdeteksi:* ${animeTitle}\n`;
					if (anilist.synonyms && anilist.synonyms.length > 0) {
						message += `✨ *Sinonim:* ${anilist.synonyms.join(", ")}\n`;
					}
					message += `✨ *Tingkat Kesesuaian:* ${similarity.toFixed(2)}%\n`;
					message += `✨ *Durasi Waktu:* ${formatDuration(from * 1000)} · ${formatDuration(to * 1000)}\n`;
					if (episode) {
						message += `✨ *Episode:* ${episode}\n`;
					}
					console.log("Informasi Anime:", {
						animeTitle,
						synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Tidak Tersedia",
						similarity,
						timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
						video,
						episode,
					});
					await haruka.sendMessage(m.chat, { video: { url: video }, caption: message }, { quoted: m });
				} catch (error) {
					console.error("Error:", error);
					newReply("*Error: Tidak dapat melacak anime atau mengirim video.* 😞");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'mangainfo': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);

				// Mendapatkan nama manga dari argumen
				const mangaName = args.join(' ');
				if (!mangaName) return m.reply('⚠️ Mohon masukkan nama manga yang ingin dicari.');

				try {
					const mangaList = await komiku("manga", mangaName);

					if (mangaList.length === 0) {
						return m.reply('⚠️ Manga tidak ditemukan. Coba cari dengan nama lain.');
					}

					let response = `📚 *Hasil Pencarian Manga - ${mangaName}* 📚\n\n`;
					mangaList.slice(0, 5).forEach((manga, index) => {
						response += `📖 *${index + 1}. ${manga.title}*\n`;
						response += `🗂️ *Genre:* ${manga.genre}\n`;
						response += `🔗 *URL:* ${manga.url}\n`;
						response += `🖼️ *Thumbnail:* ${manga.img}\n`;
						response += `📖 *Deskripsi:* ${manga.description}\n\n`;
					});

					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mencari manga.');
				}

				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'mangadetail': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);

				const url = args[0];
				if (!url) return m.reply('⚠️ Mohon masukkan URL manga yang ingin dilihat detailnya.');

				try {
					const mangaDetail = await detail(url);

					let response = `📚 *Detail Manga* 📚\n\n`;
					response += `📖 *Judul:* ${mangaDetail.title}\n`;
					response += `🖼️ *Thumbnail:* ${mangaDetail.coverImage}\n`;
					response += `🗂️ *Genre:* ${mangaDetail.genres.join(', ')}\n`;
					response += `📖 *Deskripsi:* ${mangaDetail.description}\n`;
					response += `📅 *Chapter Awal:* ${mangaDetail.awalChapter}\n`;
					response += `📅 *Chapter Terbaru:* ${mangaDetail.newChapter}\n`;

					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mengambil detail manga.');
				}

				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'jkt48news': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);

				// Pilih bahasa (opsional, default "id")
				const lang = args[0] || "id";

				try {
					const news = await jktNews(lang);

					if (news.length === 0) {
						return m.reply('⚠️ Tidak ada berita terbaru JKT48 yang ditemukan.');
					}

					let response = `🎤 *Berita Terbaru JKT48* 🎤\n\n`;
					news.slice(0, 5).forEach((item, index) => {
						response += `📰 *${index + 1}. ${item.title}*\n`;
						response += `📅 *Tanggal:* ${item.date}\n`;
						response += `🔗 *Link:* ${item.link}\n\n`;
					});

					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mengambil berita JKT48.');
				}

				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'otakudesu':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let data = await otakuDesu.ongoing();
				let response = `「 *JADWAL ANIME* 」\n\n`
				for (let i of data) {
					response += `*💬 Judul :* ${i.title}\n`
					response += `*📺 Eps :* ${i.episode}\n`
					response += `*🔗 URL :* ${i.link}\n\n`
				}
				haruka.sendMessage(m.chat, {
					text: response,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: 'Ini pemberitahuan Anime terbaru!',
							mediaType: 1,
							previewType: 1,
							body: 'Halo Kak 👋',
							thumbnail: thumb,
							renderLargerThumbnail: false,
							mediaUrl: wagc,
							sourceUrl: wagc
						}
					}
				}, {
					quoted: m
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'kusonimeinfo':
			case 'animeinfo': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					const animeList = await Kusonime.info();
					if (animeList.length === 0) {
						return m.reply('⚠️ Tidak ada data anime terbaru yang ditemukan saat ini.');
					}
					let response = `🎌 *Anime Terbaru dari Kusonime* 🎌\n\n`;
					animeList.slice(0, 5).forEach((anime, index) => {
						response += `📺 *${index + 1}. ${anime.title}*\n`;
						response += `🔗 *URL:* ${anime.url}\n`;
						response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
						response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
						response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
					});
					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mengambil informasi anime terbaru.');
				};
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'kusonimesearch':
			case 'animesearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return m.reply(`⚠️ Kak, jangan lupa kasih judul anime yang mau dicari! 🥺\nContoh: *${prefix + command} Naruto*`);
				try {
					const searchResults = await Kusonime.search(text);
					if (typeof searchResults === 'string') {
						return m.reply(`⚠️ ${searchResults}`);
					}
					let response = `🔍 *Hasil Pencarian untuk:* ${text}\n\n`;
					searchResults.slice(0, 5).forEach((anime, index) => {
						response += `📺 *${index + 1}. ${anime.title}*\n`;
						response += `🔗 *URL:* ${anime.url}\n`;
						response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
						response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
						response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
					});
					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mencari anime di Kusonime.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'gempa': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let result = await gempa();
					let gempaData = result.data;
					let response = `「 *📢 MSG GEMPA TERBARU* 」\n\n`;
					response += `*🌍 Sumber:* ${result.source}\n`;
					response += `*📊 Magnitudo:* ${gempaData.magnitude.trim()}\n`;
					response += `*📏 Kedalaman:* ${gempaData.kedalaman.trim()}\n`;
					response += `*🗺️ Lintang & Bujur:* ${gempaData.lintang_bujur.trim()}\n`;
					response += `*🕒 Waktu:* ${gempaData.waktu.trim()}\n`;
					response += `*📍 Wilayah:* ${gempaData.wilayah.trim() || 'Tidak ada data'}\n`;
					response += `*😱 Dirasakan:* ${gempaData.dirasakan.trim() || 'Tidak ada data'}\n\n`;
					response += `Tetap waspada dan ikuti arahan dari pihak berwenang!`;
					if (gempaData.imagemap) {
						haruka.sendMessage(m.chat, {
							image: { url: gempaData.imagemap.startsWith('http') ? gempaData.imagemap : `https://www.bmkg.go.id${gempaData.imagemap}` },
							caption: response,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: 'Informasi Gempa Terkini!',
									mediaType: 1,
									previewType: 1,
									body: 'Stay Safe ya, Kak! 🤗',
									thumbnail: thumb,
									renderLargerThumbnail: false,
									mediaUrl: 'https://www.bmkg.go.id',
									sourceUrl: 'https://www.bmkg.go.id'
								}
							}
						}, {
							quoted: m
						});
					} else {
						haruka.sendMessage(m.chat, {
							text: response,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: 'Informasi Gempa Terkini!',
									mediaType: 1,
									previewType: 1,
									body: 'Stay Safe ya, Kak! 🤗',
									thumbnail: thumb,
									renderLargerThumbnail: false,
									mediaUrl: 'https://www.bmkg.go.id',
									sourceUrl: 'https://www.bmkg.go.id'
								}
							}
						}, {
							quoted: m
						});
					}
				} catch (error) {
					console.error(error);
					haruka.sendMessage(m.chat, {
						text: '⚠️ Maaf kak, terjadi kesalahan saat mengambil data gempa.'
					}, {
						quoted: m
					});
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'react': {
				haruka.sendMessage(m.chat, { 
					react: { 
						text: args[0], 
						key: m.quoted ? m.quoted.key : m.key 
					}
				})
			}
			break;
			
			case 'tagme': {
				haruka.sendMessage(m.chat, { 
					text: `@${m.sender.split('@')[0]}`, 
					mentions: [m.sender] 
				})
			};
			break;

			case 'totalfeature':
			case 'totalfitur': 
			case 'totalcmd': 
			case 'totalcommand': 
				newReply(`✨ *Total Fitur yang Tersedia di ${botName}:* ${feature()} Fitur`);
			break;

			case 'cmd':
			case 'menu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n✨ *Silahkan pilih menu di bawah ini, Kak!* 🥰`;
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: proto.Message.InteractiveMessage.Body.create({
									text: teks
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: ownerName
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									...(await prepareWAMessageMedia({ image: thumb }, { upload: haruka.waUploadToServer })), 
									title: '',
									subtitle: '',
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [
										{
											"name": "single_select",
											"buttonParamsJson": `{
												"title": "Click Here ⎙",
												"sections": [{
													"title": "Select Menu",
													"rows": [{
														"title": "📚 All Menu",
														"description": "Lihat semua menu seru di sini, kak! 🌟",
														"id": "${prefix}allmenu"
													},
													{
														"title": "🗝️ Owner's Secret Room",
														"description": "Psst... Rahasia nih! Cuma kakak spesial yang bisa masuk~ 🤫",
														"id": "${prefix}ownermenu"
													},
													{
														"title": "👥 Group Menu",
														"description": "Ayo intip menu khusus grup, seru-seruan bareng! 👥",
														"id": "${prefix}groupmenu"
													},
													{
														"title": "🔍 Search Menu",
														"description": "Cari apa aja di sini, Mora bantu nemuin kok~ 🔍",
														"id": "${prefix}searchmenu"
													},
													{
														"title": "📥 Download Menu",
														"description": "Unduh apa yang kakak butuhin, gampang kok! 📥",
														"id": "${prefix}downloadmenu"
													},
													{
														"title": "🛠️ Converter/Tools Menu",
														"description": "Bikin stiker, ubah audio, dan banyak alat seru lainnya di sini, Kak! 🎵✨",
														"id": "${prefix}convertmenu"
													},
													{
														"title": "🛒 Store Menu",
														"description": "Belanja-belanja lucu di sini aja, kak! 🛒",
														"id": "${prefix}storemenu"
													},
													{
														"title": "🦖 Pterodactyl Menu",
														"description": "Fitur panel Pterodactyl untuk mengelola server, menambah atau menghapus user, serta mengatur sumber daya server dengan mudah.",
														"id": "${prefix}panelmenu"
													},
													{
														"title": "🎮 Game Menu",
														"description": "Fitur Game untuk seru-seruan seperti tebak-tebakan dsb. 😋",
														"id": "${prefix}gamemenu"
													},
													{
														"title": "🎉 Fun Menu",
														"description": "Fitur Fun untuk seru-seruan, dicoba yuk! ✨",
														"id": "${prefix}funmenu"
													},
													{
														"title": "😋 Random Anime Menu",
														"description": "Menu yang berisi gambar Anime, cari gambar waifu kamu disini ya! 😍",
														"id": "${prefix}randomanimemenu"
													},
													{
														"title": "✨ Other Menu",
														"description": "Menu tambahan yang nggak kalah menarik, cek yuk! 💫",
														"id": "${prefix}othermenu"
													}]
												}]
											}`
										},
										{
											"name": "cta_url",
											"buttonParamsJson": `{
												"display_text": "My Handsome Owner 🐬",
												"url": "https://api.whatsapp.com/send?phone=${ownerNumber}",
												"merchant_url": "https://www.google.com"
											}`
										}
									],
								}),
								contextInfo: {
									mentionedJid: [m.sender], 
									forwardingScore: 999999,
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: saluran,
										newsletterName: saluranName,
										serverMessageId: 143
									}
								}
							})
						}
					}
				}, { 
					quoted: m 
				})

				await haruka.relayMessage(
					msg.key.remoteJid, 
					msg.message, { 
						messageId: msg.key.id 
					}
				);

				haruka.sendMessage(m.chat, { 
					audio: fs.readFileSync(`./media/music.mp3`), 
					mimetype: 'audio/mp4', 
					ptt: true 
				}, { 
					quoted: m 
				});
			}
			break;

			case 'allmenu': {
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${allMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'ownermenu':
			case 'ownmenu':{
				if (!isCreator) return newReply(mess.owner);
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${ownerMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'groupmenu':
			case 'gcmenu':{
				if (!m.isGroup) return newReply(mess.group);
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${groupMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'searchmenu':
			case 'shmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${searchMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'downloadmenu':
			case 'downmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${downloadMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'convertmenu':
			case 'toolsmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${convertMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'storemenu':
			case 'stmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${storeMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'panelmenu':
			case 'pmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${panelMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'gamemenu':
			case 'gmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${gameMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'funmenu':
			case 'fmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${funMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'randomanimemenu':
			case 'ramenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${randomAnimeMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'othermenu':
			case 'othmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await reactionMessage('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n${readmore}🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed:* ${latensie.toFixed(4)} ms\n⨳ *Runtime:* ${runtime(process.uptime())}\n⨳ *Bot:* ${botName}\n⨳ *Owner:* +${ownerNumber}\n⨳ *Mode:* ${haruka.public ? 'Public' : 'Self'}\n⨳ *Platform:* ${os.platform()}\n⨳ *Total User:* ${Object.keys(db.data.users).length}\n⨳ *Total Chat:* ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama:* ${pushname}\n⨳ *Number:* +${me.split('@')[0]}\n⨳ *Limit:* ${a.limit}\n⨳ *Status:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial:* ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time:* ${time}\n⨳ *Date:* ${date}\n\n${readmore}${otherMenu(prefix, hituet)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				haruka.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnail: thumb,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'slot': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');	
				await gameSlot(haruka, m, db.data.users);
			}
			break;
		
			case 'casino': {
				if (!db.data.users[m.sender]) return m.reply('⚠️ Data pengguna tidak ditemukan di database!');
				await gameCasinoSolo(haruka, m, prefix, db.data.users);
			}
			break;
		
			case 'rob': 
			case 'merampok': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');	
				await gameMerampok(m, db.data.users);
			}
			break;

			case 'daily': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await daily(haruka, m, db.data.users);
			}
			break;

			case 'transferlimit': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await transferLimit(haruka, m, args, db.data.users);
			}
			break;

			case 'transfermoney': 
			case 'transferuang': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await transferUang(haruka, m, args, db.data.users);
			}
			break;

			case 'buy': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await buy(m, args, db.data.users);
			}
			break;

			case 'me': 
			case 'account': { 
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				let a = db.data.users[m.sender]; 
				let txt = `*📝 INFORMASI DATA 📝*\n\n`; 
				txt += ` · *Nama:* ${a.nick || 'Guest'}\n`; 
				txt += ` · *Gelar:* ${a.title || 'Tidak Ada'}\n`; 
				txt += ` · *Status Premium:* ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n`; 
				txt += ` · *Sisa Limit:* ${a.limit}\n`; 
				txt += ` · *Sisa Uang:* ${a.uang}\n\n`; 
				txt += `*Gunakan fitur dengan bijak ya!* 🌟`; 
				await haruka.sendMessage(m.chat, { 
					text: txt 
				}, { 
					quoted: m 
				}); 
			}; 
			break; 

			case 'limit': 
			case 'checklimit': { 
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				let a = db.data.users[m.sender]; 
				let txt = `*📊 INFORMASI LIMIT 📊*\n\n`; 
				txt += ` · *Sisa Limit:* ${a.limit}\n`; 
				txt += ` · *Total Limit:* ${a.totalLimit}\n`; 
				txt += `*Gunakan limit dengan bijak, ya!* 💼`; 
				await haruka.sendMessage(m.chat, { 
					text: txt 
				}, { 
					quoted: m 
				}); 
			}; 
			break;

			case 'menfess': 
			case 'menfes': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				this.menfes = this.menfes || {};
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (session) return newReply(`Uhh... Kakak masih ada di sesi ${command} yang sebelumnya nih, selesaikan dulu ya sebelum mulai yang baru! 🤭`);
				if (m.isGroup) return newReply(`Maaf ya Kak, fitur ini cuma bisa dipakai di chat pribadi aja! 😅`);
				if (!text || !text.includes('|')) {
					return newReply(`Kakak bisa pakai format ini ya: ${prefix + command} nama|nomor|pesan\n\nContoh:\n${prefix + command} ${pushname}|${m.sender.split('@')[0]}|Halo, apa kabar? 👋`);
				}
				let [namaNya, nomorNya, pesanNya] = text.split('|');
				if (!nomorNya || !pesanNya) {
					return newReply(`Uh-oh, formatnya salah! Pastikan pakai format nama|nomor|pesan ya, Kak! 😄`);
				}
				if (nomorNya.startsWith('0') || isNaN(nomorNya)) {
					return newReply(`Nomornya gak valid, Kak! Gunakan format internasional tanpa awalan '0' ya! 🙏`);
				}
				await reactionMessage('⏱️');
				let pesanTemplate = `\nHai Kak, ada menfess nih 😊✨\n\n👤 *Dari:* ${namaNya}\n✉️ *Pesan:* ${pesanNya}\n\n_Pesan ini cuma disampaikan oleh bot ya, Kak! 🤖_`;
				const imageBuffer = await getBuffer('https://files.catbox.moe/qxw4j8.jpg');
				let id = m.sender;
				this.menfes[id] = {
					id,
					a: m.sender,
					b: nomorNya + '@s.whatsapp.net',
					state: 'WAITING'
				};
				const buttons = [
					{
						"name": "single_select",
						"buttonParamsJson": `{
							"title": "Click Here ⎙",
							"sections": [
								{
									"title": "💌 Menerima atau Menolak Menfess",
									"rows": [
										{
											"header": "🤗 Terima Menfess",
											"title": "🌟 Ya, Terima Menfess",
											"description": "Klik ini kalau mau menerima dan memproses menfess ini dengan baik! 🥰",
											"id": "${prefix}balasmenfes"
										},
										{
											"header": "😔 Tolak Menfess",
											"title": "❌ Tidak, Tolak Menfess",
											"description": "Klik ini kalau menfess ini nggak mau diterima. 😢",
											"id": "${prefix}tolakmenfes"
										}
									]
								}
							]
						}`
					}
				];
				await sendButtonImage(`${nomorNya}@s.whatsapp.net`, '', pesanTemplate, imageBuffer, buttons, m)
				newReply(`Yay! Pesan menfess berhasil dikirim ke ${nomorNya}. Sekarang tinggal tunggu responsnya ya, Kak. Kalau gak ada balasan dalam 24 jam, jangan ditunggu lagi ya! 🤭`);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'balasmenfess': 
			case 'balasmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Hmmm, sepertinya Kakak belum ada sesi menfess yang aktif deh. 😅');
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
				if (!room) return newReply('Gak ada sesi menfess yang menunggu balasan dari Kakak nih. 😢');
				let otherUser = [room.a, room.b].find(user => user !== m.sender);
				room.state = 'CHATTING';
				this.menfes[room.id] = { ...room };
					await haruka.sendMessage(otherUser, { 
					text: `_@${m.sender.split('@')[0]} sudah menerima menfess kamu, sekarang kalian bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, ketik aja .stopmenfess. 😉`, 
					mentions: [m.sender] 
				});
				haruka.sendMessage(m.chat, { 
					text: `😊🎉 _Menfess sudah diterima, sekarang Kakak bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, tinggal ketik .stopmenfess. 🤗` 
				});
			}
			break;

			case 'tolakmenfess': 
			case 'tolakmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Hmm, gak ada sesi menfess yang Kakak ikuti saat ini. 😕');
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
				if (!room) return newReply('Gak ada sesi menfess yang bisa ditolak saat ini, Kak! 😅');
				let otherUser = [room.a, room.b].find(user => user !== m.sender);
				await haruka.sendMessage(otherUser, { 
					text: `_Oops... @${m.sender.split('@')[0]} menolak menfess kamu nih. Gak apa-apa ya, semangat! 🤗_`, 
					mentions: [m.sender] 
				});
				newReply('Menfess berhasil ditolak. Kalau ada yang lain, jangan sungkan buat coba lagi ya, Kak! ✋');
				delete this.menfes[room.id];
			}
			break;

			case 'stopmenfess': 
			case 'stopmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Kayaknya Kakak gak ada sesi menfess yang aktif saat ini deh. 😅');
				let otherUser = session.a === m.sender ? session.b : session.a;
				await haruka.sendMessage(otherUser, { 
					text: `_Teman chat menghentikan sesi menfess ini ya, Kak. Makasih udah coba fitur ini! 😊_`, 
					mentions: [m.sender] 
				});
				newReply('Sesi menfess sudah dihentikan. Kalau mau mulai lagi, tinggal gunakan perintah yang sama ya, Kak! 😄');
				delete this.menfes[session.id];
			}
			break;

			case 'addusradmin': {
				if (!isCreator) return m.reply(mess.owner);

				let inputParams = q.split(',');
				if (inputParams.length < 3) {
					return m.reply(`*Format salah!*\n\n*Penggunaan:*\n${prefix + command} email,username,name,number/tag`);
				}

				let emailAddress = inputParams[0];
				let userName = inputParams[1];
				let fullName = inputParams[2];
				let defaultPassword = 'AdminUser123';
				let userToAdd = m.quoted 
				? m.quoted.sender 
				: inputParams[3] 
				? inputParams[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
				: m.mentionedJid[0];

				try {
					if (!userToAdd) {
						return m.reply(`*Format salah!*\n\n*Penggunaan:*\n${prefix + command} email,username,name,number/tag`);
					}

					let userExists = (await haruka.onWhatsApp(userToAdd.split`@`[0]))[0] || {};
					let generatedPassword = userExists.exists ? randomBytes(5).toString('hex') : inputParams[3];

					let response = await fetch(global.panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + global.apiuser
						},
						"body": JSON.stringify({
							"email": emailAddress,
							"username": userName,
							"first_name": fullName,
							"last_name": "Admin",
							"root_admin": true,
							"language": "en",
							"password": defaultPassword
						})
					});

					let responseData = await response.json();
					if (responseData.errors) {
						return m.reply(JSON.stringify(responseData.errors[0], null, 2));
					}

					let newUser = responseData.attributes;

					let teks = `*👑 NEW ADMIN ADDED 👑*\n\n`;
					teks += `🆔 *ID:* ${newUser.id}\n`;
					teks += `👤 *Username:* ${newUser.username}\n`;
					teks += `📧 *Email:* ${newUser.email}\n`;
					teks += `📝 *Name:* ${newUser.first_name} ${newUser.last_name}\n`;
					teks += `🌐 *Language:* ${newUser.language}\n`;
					teks += `🛡️ *Admin:* ${newUser.root_admin ? 'Yes' : 'No'}\n`;
					teks += `📅 *Created At:* ${newUser.created_at}\n`;
					teks += `🔖 *Tags:* @${userToAdd.split("@")[0]}\n`;

					haruka.sendMessage(m.chat, {
						image: { url: thumbUrl },
						caption: teks
					}, { quoted: m });

					let teks2 = `*🔑 NEW ADMIN LOGIN 🔑*\n\n`;
					teks2 += `📧 *Email:* ${emailAddress}\n`;
					teks2 += `📝 *Username:* ${userName}\n`;
					teks2 += `🔑 *Password:* ${defaultPassword}\n`;
					teks2 += `🌐 *Login:* ${global.panel.replace("https://", "")}\n`;

					await haruka.sendMessage(userToAdd, {
						text: teks2
					}, { quoted: m });

				} catch (error) {
					console.log(error);
					m.reply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'listusr': {
				if (!isCreator) return newReply(mess.owner);

				let page = args[0] ? args[0] : '1';
				try {
					let response = await fetchJson(global.panel + "/api/application/users?page=" + page, {
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + global.apiuser
						}
					});

					let users = response.data;
					let teks = `*📋 LIST USERS PANEL 📋*\n\n`;
					teks += `\n`;

					for (let user of users) {
						teks += `*User Info* :\n`;
						teks += `🆔 ID : ${user.attributes.id}\n`;
						teks += `👤 Name : ${user.attributes.first_name} ${user.attributes.last_name}\n`;
						teks += `📝 Username : ${user.attributes.username}\n`;
						teks += `📧 Email : ${user.attributes.email}\n`;
						teks += `🛡️ Admin : ${user.attributes.root_admin ? 'Yes' : 'No'}\n`;
						teks += `🔒 2FA : ${user.attributes["2fa"] ? 'Enabled' : 'Disabled'}\n`;
						teks += `\n`;
					}

					teks += `\n📑 *Page* : ${response.meta.pagination.current_page}/${response.meta.pagination.total_pages} pages\n`;
					teks += `📊 *Total Users* : ${response.meta.pagination.total}\n`;
					teks += `📦 *Users per Page* : ${response.meta.pagination.per_page}\n`;

					haruka.sendMessage(m.chat, {
						image: { url: thumbUrl },
						caption: teks
					}, { quoted: m });

				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'listsrv': {
				if (!isCreator) return newReply(mess.owner);

				let page = args[0] ? args[0] : '1';
				try {
					let response = await fetchJson(global.panel + "/api/application/servers?page=" + page, {
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + global.apiuser
						}
					});

					let servers = response.data;
					let teks = `*📋 LIST SERVER PANEL 📋*\n\n`;
					teks += `\n`;

					for (let server of servers) {
						teks += `*🖥️ Server Info*\n`;
						teks += `🆔 *ID:* ${server.attributes.id}\n`;
						teks += `🔑 *Identifier:* ${server.attributes.identifier}\n`;
						teks += `📛 *Name:* ${server.attributes.name}\n`;
						teks += `📝 *Description:* ${server.attributes.description || 'No Description'}\n`;
						teks += `🚫 *Suspended:* ${server.attributes.suspended ? 'Yes' : 'No'}\n\n`;
			
						teks += `*💾 Storage Info*\n`;
						teks += `🧠 *Memory:* ${server.attributes.limits.memory == 0 ? "Unlimited" : (server.attributes.limits.memory / 1000) + " GB"}\n`;
						teks += `📀 *Disk:* ${server.attributes.limits.disk == 0 ? "Unlimited" : (server.attributes.limits.disk / 1000) + " GB"}\n`;
						teks += `⚙️ *CPU:* ${server.attributes.limits.cpu == 0 ? "Unlimited" : server.attributes.limits.cpu + "%"}\n`;
						teks += `\n`;
					}

					teks += `\n📑 *Page:* ${response.meta.pagination.current_page}/${response.meta.pagination.total_pages}\n`;
					teks += `📊 *Total Servers:* ${response.meta.pagination.total}\n`;
					teks += `📦 *Servers per Page:* ${response.meta.pagination.per_page}\n`;

					haruka.sendMessage(m.chat, {
						image: { url: thumbUrl },
						caption: teks
					}, { quoted: m });

				} catch (error) {
					console.log(error);
					m.reply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'addusr': {
				if (!isCreator) return newReply(mess.owner);

				let input = text.split(",");
				let email = input[0];
				let username = input[1];
				let password = input[2];
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : input[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net';

				if (!email || !username || !password || !input[3] && !users) return newReply(`*Masukan ${!email ? "email" : !username ? "username" : !password ? "password" : "penerima"} yang valid!*\n\n*Contoh* :\n${prefix + command} bot@gmail.com,bot,bot123,@0`);

				let onWA = await haruka.onWhatsApp(users);
				if (onWA.length < 1) return newReply("Penerima tidak ada di WhatsApp");

				try {
					const userData = await createUser(email, username, password);
					if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));

					let teks = `*📋 NEW USERS ADDED 📋*\n\n`;

					teks += `*User Info:*\n`;
					teks += `🆔 *ID:* ${userData.attributes.id}\n`;
					teks += `👤 *Username:* ${userData.attributes.username}\n`;
					teks += `📧 *Email:* ${userData.attributes.email}\n`;
					teks += `👑 *Admin:* ${userData.attributes.root_admin ? 'Yes' : 'No'}\n`;
					teks += `🏷️ *Tags:* @${users.split("@")[0]}\n`;

					haruka.sendMessage(m.chat, {
						image: { url: thumbUrl },
						caption: teks
					}, { quoted: m });

					let teks2 = `*📋 NEW USERS LOGIN 📋*\n\n`;
					teks2 += `📧 *Email:* ${email}\n`;
					teks2 += `👤 *Username:* ${username}\n`;
					teks2 += `🔑 *Password:* ${password}\n`;
					teks2 += `🔗 *Login:* ${global.panel.replace("https://", "")}\n`;

					await haruka.sendMessage(users, {
						text: teks2
					}, { quoted: m });

				} catch (error) {
					console.log(error);
					m.reply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'addsrv': {
				if (!isCreator) return newReply(mess.owner);
				let input = text.split(",");
				let name = input[0];
				let userid = input[1];
				let memo = input[2];
				let disk = input[3];
				let cpu = input[4];
				if (!name || !userid || !memo || !disk || !cpu) {
					return newReply(`*Masukkan ${!name ? "name" : !userid ? "userId" : !memo ? "memory" : !disk ? "disk" : "cpu"} panel yang valid!*\n\n*Tutorial* :\n${prefix + command} name,userid,memo,disk,cpu\n\n*Contoh* : ${prefix + command} bot,6,1200,1200,100`);
				}
				if (isNaN(userid) || isNaN(memo) || isNaN(disk) || isNaN(cpu)) {
					return newReply(`*${isNaN(userid) ? "User ID" : isNaN(memo) ? "Memory" : isNaN(disk) ? "Disk" : "CPU"} harus berupa angka!*\n\n*Tutorial* :\n${prefix + command} name,userid,memo,disk,cpu\n\n*Contoh* : ${prefix + command} bot,6,1200,1200,100`);
				}
				try {
					const eggData = await getEggStartupCommand();
					const startup_cmd = eggData.attributes.startup;
					let data = await createServer(name, userid, startup_cmd, memo, cpu, disk);
					if (data.errors) {
						return m.reply(JSON.stringify(data.errors[0], null, 2));
					}
					let teks = `🎊 *Yay! Server berhasil ditambahkan!* ✅\n\n`;
					teks += `💻 *Server Info* :\n`;
					teks += `🆔 *ID* : ${data.attributes.id}\n`;
					teks += `🔑 *Identifier* : ${data.attributes.identifier}\n`;
					teks += `📛 *Name* : ${data.attributes.name}\n`;
					teks += `💾 *Memory* : ${data.attributes.limits.memory}\n`;
					teks += `📦 *Disk* : ${data.attributes.limits.disk}\n`;
					teks += `⚙️ *CPU* : ${data.attributes.limits.cpu}%\n`;
					haruka.sendMessage(m.chat, { 
						image: thumb, 
						caption: teks 
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			case 'delsrv': {
				if (!isCreator) return newReply(mess.owner)
				let srv = args[0];
				if (!srv) return m.reply('Silakan berikan *ID Server* yang ingin dihapus.');
				try {
					let res = await deleteServer(srv);
					if (res.errors) return m.reply('⚠️ Server yang ditentukan tidak ditemukan. Silakan periksa ID dan coba lagi.');
					m.reply('✅ Server berhasil dihapus. Sampai jumpa!');
				} catch (error) {
					console.log(error);
				}
			}
			break;

			case 'delusr': {
				if (!isCreator) return newReply(mess.owner)
				let usr = args[0];
				if (!usr) return m.reply('Silakan berikan *ID Pengguna* yang ingin dihapus.');
				try {
					let res = await deleteUser(usr);
					if (res.errors) return m.reply('⚠️ Pengguna yang ditentukan tidak ditemukan. Silakan verifikasi ID dan coba lagi.');
					m.reply(`✅ Pengguna dengan ID *${usr}* berhasil dihapus dari sistem.`);
				} catch (error) {
					console.log(error);
				}
			}
			break;

			case 'startsrv':
			case 'stopsrv':
			case 'restartsrv': {
				if (!isCreator) return newReply(mess.owner)
				let action = command.replace('srv', '')
				let srv = args[0]
				if (!srv) return m.reply('input *ID* from server!')
				try {
					let data = await manageServer(action, srv)
					m.reply(data)
				} catch (error) {
					console.log(error);
				}
			}
			break

			case '1gb':
			case '2gb':
			case '3gb':
			case '4gb':
			case '5gb':
			case '6gb':
			case '7gb':
			case '8gb':
			case '9gb':
			case '10gb':
			case '11gb':
			case '12gb':
			case '13gb':
			case '14gb':
			case '15gb':
			case '16gb':
			case '17gb':
			case '18gb':
			case '19gb':
			case '20gb':
			case '21gb':
			case '22gb':
			case '23gb':
			case '24gb':
			case '25gb':
			case '26gb':
			case '27gb':
			case '28gb':
			case '29gb':
			case '30gb':
			case '31gb':
			case '32gb':
			case '33gb':
			case '34gb':
			case '35gb':
			case '36gb':
			case '37gb':
			case '38gb':
			case '39gb':
			case '40gb':
			case '41gb':
			case '42gb':
			case '43gb':
			case '44gb':
			case '45gb':
			case '46gb':
			case '47gb':
			case '48gb':
			case '49gb':
			case '50gb': {
				if (!isCreator) return newReply(mess.owner)
				const ukuran = command.replace("gb", "");
				if (!text) return newReply(`*Masukkan nama/nomor yang valid!*\n\n*Contoh* :\n${prefix + command} bot,@0`);
				let input = text.split(",");
				let users = m.mentionedJid[0] 
				? m.mentionedJid[0] 
				: m.quoted 
				? m.quoted.sender 
				: input[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (!input[0] || (!input[1] && !users)) {
					return newReply(`*Masukkan nama/nomor yang valid!*\n\n*Contoh* :\n${prefix + command} bot,@0`);
				}
				let onWA = await haruka.onWhatsApp(users);
				if (onWA.length < 1) return newReply("Penerima tidak ada di WhatsApp");
				try {
					const email = input[0] + '@gmail.com';
					const username = input[0];
					const password = randomBytes(5).toString('hex');
					const memo = `${ukuran}200`;
					const cpu = ukuran * 2 * 10;
					const disk = `${ukuran}200`;
					const userData = await createUser(email, username, password);
					if (!userData.errors) {
						const eggData = await getEggStartupCommand();
						const startup_cmd = eggData.attributes.startup;
						const serverData = await createServer(
							`${username} ${command.toUpperCase()}`, 
							userData.attributes.id, 
							startup_cmd, 
							memo, 
							cpu, 
							disk
						);
						if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
						let teks = `🎉 *Hore! Panel kamu berhasil dibuat!* ✅\n\n`;
						teks += `🧑‍💻 *User Info* :\n`;
						teks += `🆔 *ID* : ${userData.attributes.id}\n`;
						teks += `📝 *Username* : ${userData.attributes.username}\n`;
						teks += `📧 *Email* : ${userData.attributes.email}\n`;
						teks += `👤 *Pembuat* : ${pushname}\n\n`;
						teks += `💻 *Server Info* :\n`;
						teks += `🆔 *ID* : ${serverData.attributes.id}\n`;
						teks += `🔑 *Identifier* : ${serverData.attributes.identifier}\n`;
						teks += `📛 *Name* : ${serverData.attributes.name}\n`;
						teks += `💾 *Memory* : ${serverData.attributes.limits.memory}\n`;
						teks += `📦 *Disk* : ${serverData.attributes.limits.disk}\n`;
						teks += `⚙️ *CPU* : ${serverData.attributes.limits.cpu}%\n`;
						haruka.sendMessage(m.chat, { 
							image: thumb, 
							caption: teks, 
							mentions: [users]
						}, { 
							quoted: m 
						});

						let teks2 = `✨ *Yeay! Panel kamu berhasil dibuat!* ✅\n\n`;
						teks2 += `👤 *Pembuat* : ${pushname}\n`;
						teks2 += `📧 *Email* : ${email}\n`;
						teks2 += `📝 *Username* : ${userData.attributes.username}\n`;
						teks2 += `🔑 *Password* : ${password}\n`;
						teks2 += `🌐 *Login* : ${global.panel.replace("https://", "")}\n`;

						let button = [
							{
								"name": "cta_copy",
								"buttonParamsJson": `{
									"display_text": "Copy Username 👤",
									"id": "${userData.attributes.username}",
									"copy_code": "${userData.attributes.username}"
								}`
							},
							{
								"name": "cta_copy",
								"buttonParamsJson": `{
									"display_text": "Copy Password 🔑",
									"id": "${password}",
									"copy_code": "${password}"
								}`
							},
							{
								"name": "cta_url",
								"buttonParamsJson": `{
									"display_text": "Go now! 🚀",
									"url": "${panel}",
									"merchant_url": "${panel}"
								}`
							}
						];

						await sendButtonImage(users, '', teks2, thumb, button, m);
					} else {
						m.reply(JSON.stringify(userData.errors[0], null, 2));
					}
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan:* ${error.message}`);
				}
			}
			break;

			default:
			if (budy.startsWith('=>')) {
				if (!isCreator) return
				function Return(sul) {
					sat = JSON.stringify(sul, null, 2)
					bang = util.format(sat)
					if (sat == undefined) {
						bang = util.format(sul)
					}
					return m.reply(bang)
				}
				try {
					newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) {
					newReply(String(e))
				}
			};

			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await newReply(evaled)
				} catch (err) {
					await newReply(String(err))
				}
			};

			if (budy.startsWith('$')) {
				if (!isCreator) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(err)
					if (stdout) return m.reply(stdout)
				})
			};

			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				haruka.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
			}

			if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
				try {
					this.menfes = this.menfes || {};
					let room = Object.values(this.menfes).find(room => 
						[room.a, room.b].includes(m.sender) && room.state === 'CHATTING'
					);
					if (room) {
						if (/^.*(next|leave|start)/.test(m.text)) return;
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return;
						let find = Object.values(this.menfes).find(menpes => 
							[menpes.a, menpes.b].includes(m.sender)
						);
						let other = find.a === m.sender ? find.b : find.a;
						if (m.mtype === 'conversation' || m.mtype === 'extendedTextMessage') {
							await haruka.sendMessage(other, {
								text: m.text,
								mentions: [other]
							}, { 
								quoted: fmen 
							});
						}
						if (['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage', 'stickerMessage'].includes(m.mtype)) {
							let media;
							try {
								media = await m.download();
							} catch (err) {
								console.error('Gagal mengunduh media:', err);
								await haruka.sendMessage(m.sender, { text: 'Gagal mengunduh media. Pastikan media masih valid dan coba lagi.' });
								return;
							}
							let options = {
								caption: m.msg?.caption || '',
								mentions: [other]
							};
							if (m.mtype === 'imageMessage') {
								await haruka.sendMessage(other, { image: media, ...options });
							} 
							else if (m.mtype === 'videoMessage') {
								await haruka.sendMessage(other, { video: media, ...options });
							} 
							else if (m.mtype === 'audioMessage') {
								await haruka.sendMessage(other, { audio: media, mimetype: 'audio/mpeg', ...options });
							} 
							else if (m.mtype === 'documentMessage') {
								await haruka.sendMessage(other, { document: media, mimetype: m.msg?.mimetype, fileName: m.msg?.fileName, ...options });
							} 
							else if (m.mtype === 'stickerMessage') {
								await haruka.sendMessage(other, { sticker: media });
							} 
							else {
								console.warn('Tipe media tidak dikenali:', m.mtype);
							}
						}
					}
				} catch (err) {
					console.error('Error di fitur Menfess:', err);
					await haruka.sendMessage(m.sender, { text: 'Terjadi kesalahan saat mengirim pesan ke pasangan Menfess. Silakan coba lagi nanti.' });
				}
			}
		}
	} catch (err) {
		console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(err)));
	}
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});