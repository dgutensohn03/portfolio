window.onload = function () {
	window.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser');
	
	game.state.add("level1", Level1);
	game.state.add("level2", Level2);
	game.state.add("map", Map);
	
	var isInShell = parent && 'Shell' in parent;
	var Shell = isInShell ? parent.Shell : undefined;
	
	var initialState = isInShell ? Shell.CurrentSlideData().gameState : 'level1';
	
	game.state.start(initialState);
};
