// Yeah, the generators suck at the moment. ‾\_(ツ)_/‾
// Submit a PR!

let pick = (r) => r[Math.floor(Math.random()*r.length)];

const nouns = require('./data/nouns.json');
const adjectives = require('./data/adjectives.json');

const first_names = require('./data/first_names.json');
const last_names = require('./data/last_names.json');

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
	return '@'+pick(adjectives)+pick(nouns);
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