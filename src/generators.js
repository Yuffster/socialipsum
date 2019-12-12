// Require the corpus data.
const nouns = require('./data/nouns.json');
const adjectives = require('./data/adjectives.json');
const first_names = require('./data/first_names.json');
const last_names = require('./data/last_names.json');
const ipsum = require('./data/ipsum.json');

const pick = r => r[Math.floor(Math.random()*r.length)];
const n = n => Math.floor(Math.random()*n);
const pick_emoji = () => String.fromCodePoint(parseInt('1F600', 16)+n(80));
const username = () => '@'+pick(adjectives)+pick(nouns);
const fullname = () => pick(first_names)+' '+pick(last_names);

/**
 * I'll probably add sliders for emoji frequency later.
 */
function moji(options) {
	options = options || {};
	let freq = options['emoji_frequency'] || 0;
	let text = [];
	let n = Math.floor(Math.random()*25)+10;
	for (let i=0;i<=n;i++) {
		let m = Math.floor(Math.random()*100);
		if (m < freq) text.push(pick_emoji());
		else text.push(pick(ipsum));
	}
	return text.join(' ');
}

module.exports = {
	username,
	fullname,
	moji
}