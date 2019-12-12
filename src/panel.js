/* Mixing HTML and JavaScript is gross. */

let emoji_freq = 25;

module.exports =`
<style type="text/css">
	#modal {
		width: 100%;
		max-width: 250px;
	}
	#modal #buttons { display:none; }
	#modal.selection #instructions { display: none; }
	#modal.selection #buttons { display: block; }
	#instructions {
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	img {
		width: 100%;
		height: auto;
		max-width: 250px;
		padding-bottom: 24px;
	}
	label {
		display: flex;
		justify-content: space-between;
	}
</style>
<div id="modal">
	<div id="instructions">
		<img src="./i/confused_guy.png" />
		<p>Select a text node to randomize social placeholders.</p>
	</div>
	<div id="buttons">
		<form data-generator="moji">
			<fieldset>
				<legend>Generate Text</legend>
				<label for="emoji-frequency">
					<span>Emoji Frequency</span>
					<span><var>${emoji_freq}</var>%</span>
				</label>
				<input type="range" id="emoji-frequency"
				  name="emoji_frequency" min=0 max=100 value=${emoji_freq} />
			</fieldset>
			<button type="submit">Generate</button>
		</form>
		<form data-generator="username">
			<button type="submit">@username</button>
		</form>
		<form data-generator="fullname">
			<button type="submit">Full Name</button>
		</form
</div>
`;