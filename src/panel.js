/* Mixing HTML and JavaScript is gross. */
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
			<button data-generator="username">@username</button><br/>
			<button data-generator="fullname">Full Name</button><br/>
			<button data-generator="moji">😃 Emoji Text</button><br/>
		</div>
</div>
`;