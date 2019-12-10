// Yeah, the generators suck at the moment. ‾\_(ツ)_/‾
// Submit a PR!

let pick = (r) => r[Math.floor(Math.random()*r.length)];

// This list works surprisingly well.
let usernames = [
	'theREAL',
	'__',
	'XxX',
	'oOoO',
	'sterz',
	'der'
];

// I'm going to pull some census data for the names.
let first_names = [
	'Chloe',
	'Courtney',
	'Kelly',
	'Jane',
	'Rosie',
	'Kieron',
	'Keaton',
	'Grover'
];

let last_names = [
	'Smith',
	'Johnson',
	'Glover',
	'Guerrero',
	'Baker'
];

let words = `
lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur.
`.trim().split(/\s/);

let emoji = `
😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔
🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕
🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪
😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿
👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾
`.trim().split(/\s/)

function username() {
	return '@'+pick(usernames)+pick(usernames)+pick(usernames);
}

function fullname() { 
	return pick(first_names)+' '+pick(last_names);
}

/**
 * I'll probably add sliders for emoji frequency later.
 */
function moji() {
	let text = [];
	let n = Math.floor(Math.random()*25)+10;
	for (let i=0;i<=n;i++) {
		let m = Math.floor(Math.random()*12);
		if (m == 8) text.push(pick(emoji));
		text.push(pick(words));
	}
	return text.join(' ');
}

module.exports = {
	username,
	fullname,
	moji
}