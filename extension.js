const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// console.log(context)
	console.log('FAAAAAHhhhhhh.....');

	const disposable = vscode.commands.registerCommand('faahsense.enable_faahh', function () {
		vscode.window.showInformationMessage('Enabled FAAAAAHhhhhhh.....');
	});
	const disableDisposable = vscode.commands.registerCommand('faahsense.disable_faahh', function () {
		vscode.window.showInformationMessage('Disabled FAAAAAHhhhhhh.....');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disableDisposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
