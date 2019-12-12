const { RepeatGrid, Text } = require("scenegraph");
const application = require("application");

const generators = require('./src/generators');

function getFormData(form) {
	let out = {};
	for (let el of form.querySelectorAll('input')) {
		out[el.name] = el.value;
	}
	return out;
}

/**
 * Initializes the panel, attaches events.
 */
function show(event) {
	let root = document.createElement("panel");
	root.innerHTML = require('./src/panel');
	for (let b of root.querySelectorAll('input[type=range]')) {
		b.addEventListener('input', (evt) => { 
			let t = evt.target;
			let val = Math.floor(t.value);
			let vars = root.querySelectorAll(`label[for="${t.id}"] var`);
			for (let v of vars) v.textContent = `${val}`;
		});
	}
	for (let f of root.querySelectorAll('form[data-generator]')) {
		f.addEventListener('submit', (evt) => {
			let t = evt.target;
			replaceSelection(t.dataset.generator, getFormData(t));
		});
	}
	event.node.appendChild(root);
}

/**
 * Cleans up after itself.
 */
function hide(event) {
	event.node.firstChild.remove();
}

/**
 * This is triggered every time the selection changes.
 *
 * It changes the class on the main panel element to display either
 * instructions or buttons.
 *
 * Actual manipulation of the selection happens in the event handlers for
 * the displayed buttons.
 */
function update(selection) {
	let m = document.querySelector('#modal');
	if (getEditable(selection)) {
		m.className = 'selection';
	} else {
		m.className = '';
	}
}

/**
 * Returns any supported types, filters out unsupported ones.
 */
function getEditable(selection) {
	let t = selection.items[0];
	if (!(t instanceof Text)) return null;
	let p = t;
	while (p.parent) {
		if (p instanceof RepeatGrid) return p;
		p = p.parent;
	}
	return t;
}

/**
 * Replaces a selection of items with a given type of randomzied content.
 *
 * Current supported options can be found in the generators module.
 */
function replaceSelection(type='moji', options) {
	const { editDocument } = require("application");
	editDocument({}, function (selection) {
		let t = selection.items[0];
		let e = getEditable(selection);
		if (!e) return;
		if (e instanceof RepeatGrid) {
			return e.attachTextDataSeries(t, generate(type, e.children.length, options));
		}
		for (let s of selection.items) {
			if (s instanceof Text) s.text = generate(type, 1, options);
		}
	});
}

/**
 * Calls out to the generators module to get n number of type text
 * generations.
 */
function generate(type, n=1, options=null) {
	const gen = ((type instanceof Function) ? type : generators[type]) ||
	            generators.ipsum;
	let out = [];
	for (let i=0;i<=n; i++) out[i] = gen(options);
	return (n==1) ? out[0] : out;
}

module.exports = {
	panels: {
		'socialIpsum': {
			show,
			hide,
			update
		}
	}
};
