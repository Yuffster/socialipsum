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
	label,p {
		display: flex;
		align-items: center;
	}
	select {
		display: block;
		width: 100%;
	}
	#generators #sections {
		height: 200px;
	}
	#generators #sections > fieldset {
		display: none;
	}
	#generators #sections > fieldset.active {
		display: block;
	}
</style>
<div id="modal" class="selection">
	<div id="instructions">
		<img src="./i/confused_guy.png" />
		<p>Select a text node to randomize social placeholders.</p>
	</div>
	<div id="buttons">
		<label>
			<select uxp-quiet="true" id="type-selector">
				<option value="info" selected>Select Content Type</option>
				<option value="moji">Short Text</option>
				<option value="username">Username</option>
				<option value="realname">Real Name</option>
			</select>
		</label>
		<form id="generators">
			<div id="sections">
				<fieldset id="info" data-no-submit>
					<p>Select a content type in the dropdown above to start generating.</p>
				</fieldset>
				<fieldset id="moji">
					<label>
						<span>Emoji Frequency</span>
						<span><var>${emoji_freq}</var>%</span>
						<input type="range"name="emoji_frequency"
						 min=0 max=100 value=${emoji_freq} />
					</label>
				</fieldset>
				<fieldset id="username">
					<label>
						<span>Prefix</span>
						<input type="text" name="prefix" />
					</label>
					<label>
						<span>Suffix</span>
						<input name="suffix" type="text" />
					</label>
				</fieldset>
				<fieldset id="realname">
					<label>
						<input type="checkbox" checked name="first" />
						<span>First Name</span>
					</label>
					<label>
						<input type="checkbox" name="initial" />
						<span>Initial</span>
					</label>
					<label>
						<input type="checkbox" name="last" />
						<span>Last Name</span>
					</label>
				</fieldset>

				<div id="preview">
					<hr/>
					<h1>Example Output</h1>
					<p id="example"></p>
				</div>
			</div>
			<button type="submit" uxp-variant="cta">Generate</button>
		</form>
</div>`;