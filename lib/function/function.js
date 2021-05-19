const { decryptMedia } = require("@open-wa/wa-decrypt");
const fs = require("fs");


const jeda = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}
async function ToBase64(mess, uaOverride, mimetype) {
	const media = await decryptMedia(mess, uaOverride);
	const base64 = `data:${mimetype};base64,${media.toString('base64')}`
	return base64
}
async function SaveFileTemp(mess, uaOverride, Type, NamaFile) {
	if(Type.toLowerCase() == 'image' || Type.toLowerCase() == 'video' || Type.toLowerCase() == 'audio') {
		const media = await decryptMedia(mess, uaOverride)
		const path = `./lib/temp/${Type.toLowerCase()}/${NamaFile}`
		fs.writeFileSync(path, (media))
		await jeda(2000)
		return path
	} else {
		return `Error Type ${Type} tidak tersedia dalam folder temp`
	}
}
function TrueFalse(msg) {
	if(msg == 'y' || msg == 'ya' || msg =='yes') {
		return true
	} else if(msg == 'n' || msg == 'no' || msg == 'tidak' || msg == 'ga') {
		return false
	}
}
function hari(number) {
	if(number === 1) {
		return `Senin`
	} else if(number === 2) {
		return `Selasa`
	} else if(number === 3) {
		return `Rabu`
	} else if (number === 4) {
		return `Kamis`
	} else if (number === 5) {
		return `Jumat`
	} else if (number === 6) {
		return `Sabtu`
	} else if (number === 7 || number === 0) {
		return `Minggu`
	}
}
function bulan(number) {
	if(number === 0) {
		return `Januari`
	} else if(number === 1) {
		return `February`
	} else if (number === 2) {
		return `Maret`
	} else if (number === 3) {
		return `April`
	} else if (number === 4) {
		return `May`
	} else if (number === 5) {
		return `Juni`
	} else if (number === 6) {
		return `Juli`
	} else if (number === 7) {
		return `Agustus`
	} else if (number === 8) {
		return `September`
	} else if(number === 9) {
		return `Oktober`
	} else if (number === 10) {
		return `November`
	} else if (number === 11) {
		return `Desember`
	}
}
function TanggalLengkap() {
	const Tahun = new Date().getFullYear()
	const Bulan = new Date().getMonth()
	const Tanggal = new Date().getDate()
	const Hari = new Date().getDay()
	return `${hari(Hari)}, ${Tanggal} - ${bulan(Bulan)} - ${Tahun}`
}
function jam() {
	const Jam = new Date().getHours()
	const menit = new Date().getMinutes()
	const Detik = new Date().getSeconds()
	const milisecond = new Date().getMilliseconds()
	return `${Jam} h - ${menit} m - ${Detik} s - ${milisecond} ms`
}
function runtime() {
	const Start = Date.now() / 1000
	const timeStart = (Date.now() / 1000) - (Start);
	seconds = Number(timeStart);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}


module.exports = {
	ToBase64,
	SaveFileTemp,
	TrueFalse,
	runtime,
	TanggalLengkap,
	jam
}