exports.SuccesMengirim = () => {
	return `Berhasil Jangan Lupa follow instagram owner: @rayyreall`
}
exports.FormatSticker = (prefix) => {
	return `Format Sticker yang anda masukkan salah masukkan dengan format:

1. ${prefix}sticker <reply image> untuk sticker
2. ${prefix}sticker <reply video> untuk sticker gif
3. ${prefix}sticker url <reply sticker> untuk sticker url
4. ${prefix}sticker <reply sticker> untuk sticker menjadi gambar`
}
exports.GroupOnly = (command) => {
	return `Kamu tidak bisa menggunakan perintah ${command} di Personal chat untuk menggunakan ini kamu harus berada di dalam group`
}
exports.BotAdmin = () => {
	return `Kamu tidak bisa menggunakan perintah ini karna anda bukan admin`
}
exports.addMember = () => {
	return `masukkan nomer atau reply member yang terkena kick`
}
exports.kickMember = () => {
	return `masukkan nomer atau reply member atau tag seseorang`
}
exports.SuccesAdd = (nomer, gc) => {
	return `Succes Add @${nomer} ke dalam grup ${gc}`
}
exports.SuccesKick = (nomer, gc) => {
	return `Succes Kick @${nomer} ke dalam grup ${gc}`
}
exports.SuccesSetname = (nama) => {
	return `Succes Mengubah nama menjadi ${nama}`
}
exports.MasukkanNama = (command) => {
	return `Untuk menggunakan perintah ini anda harus memasukkan Text seperti format ${command}`
}
exports.GoodBye = () => {
	return `Dah Grup ga guna sampah W outlah asu`
}
exports.SuccesSetStatus = (status) => {
	return `Succes Mengubah nama menjadi ${status}`
}
exports.PromotDemot = () => {
	return `Kirim perintah besertai dengan nomer / reply seseorang / tag seseorang`
}
exports.LinkGRUP = (nama, link) => {
	return `
Nama : ${nama}
Link : ${link}`
}
exports.SetFoto = (command) => {
	return `Kirim gambar dengan caption ${command} atau reply gambar`
}
exports.runTime = (waktu) => {
	return `Telah berjalan selama : ${waktu}`
}
exports.Kecepatan = (runtime) => {
	return `Speed: ${runtime}`
}
exports.GadaDimenu = (command) => {
	return `Perintah ${command} tidak terdaftar dalam menu`
}
exports.BukaTutup = () => {
	return `Kirim perintah dengan tambahan buka/tutup`
}
exports.NoTelpon = () => {
	return `Anda terdeteksi melakukan panggilan bot OTOMATIS DI BLOCK`
}
exports.MenuBot = (prefix, jam, runtime, battery, speed) => {
	return ` Halo My Owner I'am Ra

*⏰ Jam* : ${jam}
*⏳ Runtime* : ${runtime}

    *INGFO*
*🔌 Battery* : ${battery}
*🍃 Speed* : ${speed}
*🪀 Owner* : 082149344210 ( *Rayy* )
*🌄 Lib* : Open Wa
*💡 prefix* : multi prefix
*Github* : https://github.com/rayyreall/Base-Self-OpenWa

      *List Menu*

*ℒ⃝🕊️ •* *${prefix}sticker*
*ℒ⃝🕊️ •* *${prefix}add*
*ℒ⃝🕊️ •* *${prefix}kick*
*ℒ⃝🕊️ •* *${prefix}setname*
*ℒ⃝🕊️ •* *${prefix}leave*
*ℒ⃝🕊️ •* *${prefix}setstatus*
*ℒ⃝🕊️ •* *${prefix}clear*
*ℒ⃝🕊️ •* *${prefix}clearall*
*ℒ⃝🕊️ •* *${prefix}join*
*ℒ⃝🕊️ •* *${prefix}delete*
*ℒ⃝🕊️ •* *${prefix}promote*
*ℒ⃝🕊️ •* *${prefix}demote*
*ℒ⃝🕊️ •* *${prefix}linkgroup*
*ℒ⃝🕊️ •* *${prefix}revoke*
*ℒ⃝🕊️ •* *${prefix}setpp*
*ℒ⃝🕊️ •* *${prefix}block*
*ℒ⃝🕊️ •* *${prefix}unblock*
*ℒ⃝🕊️ •* *${prefix}bc*
*ℒ⃝🕊️ •* *${prefix}runtime*
*ℒ⃝🕊️ •* *${prefix}group <open/close>* 
*ℒ⃝🕊️ •* *${prefix}ping*
*ℒ⃝🕊️ •* *${prefix}trojan* 
*ℒ⃝🕊️ •* *=>*

__________________________________
*Notes :*
*- Fitur ? Ntar di update klo ga mager*
*- Jangan Pernah Menelpon Bot Dan Owner Jika Menelpon Akan di block Otomatis dan TIdak ada Kata Unblock ‼️*
*- Bot Ini 100% Gratis tidak ada kata sewa, beli dll*
*- Jika Menemukan Bug, Error, Saran Fitur Harap Segera Lapor Ke Owner*
*- Last Jangan Lupa follow Ig owner : @rayyreall, Thanks Love you all*

*Group : Coming soon*
__________________________________
*🔖 || IG*
@rayyreall
`
}
	
