const fs = require('fs');
const chalk = require('chalk');

global.ytname = 'YouTube: zal_x_u' // Nama YouTube Kamu
global.socialm = 'GitHub: ???' // Nama GitHub Kamu
global.location = 'jakarta, Indonesia' // Lokasi Kamu

global.botName = 'Mora AI V5.0.0' // Nama Bot Kamu
global.ownerNumber = '6285184513459' // Nomor Kamu
global.ownerName = 'pemulung-sc' // Nama Kamu
global.website = 'https://pemulung-sc.free.id' // Web Kamu
global.wagc = 'https://chat.whatsapp.com/DJogeWA2sYkKz9RAscRvLs?mode=hqrc' // Web Kamu
global.packname = 'Mora' // Nama Pack
global.author = 'pemulung-sc' // Nama Author
global.creator = '6285184513459@s.whatsapp.net' // Nomor Creator
global.premium = ['6285184513459'] // User Premium
global.hituet = 0 // Hit Command
global.prefa = '.'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '1200363363009408737@newsletter' // ID Saluran Kamu
global.saluranName = 'Mora AI User Service | rizal-dv' // Nama Saluran Kamu
global.sessionName = 'session' // Nama Folder Sesi Bot Kamu

global.panel = 'https://rizal-dev.fastpanel.web.id'; // Link Panel Kamu
global.cred = 'ptla_f7HcvW06cfhGfH5ipT2lfSOwgtFl2qTerBDyr6ZtVxg'; // API PTLA Kamu
global.apiuser = 'ptlc_ftQh1nWARovwDgiOBELuyfLtOpiqpXoyApGGpxrWLfS'; // API PTLC Kamu
global.eggs = '15', // Eggs Number (Recommended)
global.nets = '5', // Nets Number (Recommended)
global.location = '1', // Location Number (Recommended)

global.typereply = 'v2' // Gaya Reply v1-v4
global.autoblocknumber = '62' // Auto Block Number
global.antiforeignnumber = '62' // Anti Foreign Number
global.welcome = false // Auto Welcome Msg
global.anticall = false // Anti Call
global.autoswview = false // Auto View Status
global.adminevent = false // Admin Event Msg
global.groupevent = false // Group Event Msg

global.limit = {
	free: 30, // Limit User Non-premium
	premium: 9999, // Limit User Premium
	vip: 'VIP' // Limit User VIP 👑
};

global.uang = {
	free: 10000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 10000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Mora harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Done Kak! ✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, limit penggunaan Kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit ✨',
	noCmd: 'Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗'
};

global.thumb = fs.readFileSync('./media/icon.png'); // Buffer Image
global.thumbUrl = 'https://i.ibb.co.com/p2nKgqP/image.png'; // Url Image

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})