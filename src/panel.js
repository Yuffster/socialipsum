/* Mixing HTML and JavaScript is gross. */
module.exports =`
<style type="text/css">
	#modal #buttons { display:none; }
	#modal.selection #instructions { display: none; }
	#modal.selection #buttons { display: block; }
	#instructions {
		height: 250px;
		width: 250px;
		padding-top: 274px;
		justify-content: center;
		align-items: center;
		background: url('./i/confused_guy.png') no-repeat;
	}
</style>
<div id="modal">
	<div id="instructions">
		<p>Select a text node to randomize social placeholders.</p>
	</div>
	<div id="buttons">
		<button data-generator="username">@username</button><br/>
		<button data-generator="fullname">Full Name</button><br/>
		<button data-generator="moji">😃 Emoji Text</button><br/>
	</div>
</div>
`;