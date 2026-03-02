const vscode = require('vscode');
const { playSound } = require('./playSound');
const ENABLED_KEY = 'faahsense.enabled'
/**
 * @param {vscode.ExtensionContext} context
 */
function startListeningForErrors(context){
	vscode.window.showInformationMessage('FAAAAHhhhhhh.....');
	const terminalListener = vscode.window.onDidStartTerminalShellExecution(async (event) =>{
		const execution = event.execution;
    const stream = execution.read();

    console.log(`Monitoring command: ${execution.commandLine.value}`);

    for await (const data of stream) {
			// console.log(`Terminal output: ${data}`);
      if (data.toLowerCase().includes('error') || data.toLowerCase().includes('exception')) {

        vscode.window.showErrorMessage("FAAAAHHH! An error just occurred in the terminal!");
        playSound();

      }
    }
	})
	context.subscriptions.push(terminalListener);

}

/**
 * @param {vscode.ExtensionContext} context
 */
function enableFaahh(context) {
	context.globalState.update(ENABLED_KEY, true);
	vscode.window.showInformationMessage('Enabled FAAAAAHhhhhhh.....');
}

/**
 * @param {vscode.ExtensionContext} context
 */
function disableFaahh(context) {
	context.globalState.update(ENABLED_KEY, false);
	vscode.window.showInformationMessage('Disabled FAAAAAHhhhhhh.....');
}

/**
 * @param {vscode.ExtensionContext} context
 */
function registerFaahhCommands(context) {
	const commands = [
		{
			id: 'faahsense.enable_faahh',
			handlerFunction: () => enableFaahh(context)
		},
		{
			id: 'faahsense.disable_faahh',
			handlerFunction: () => disableFaahh(context)
		}
	]

	const disposables = commands.map(command => {
		return vscode.commands.registerCommand(command.id, command.handlerFunction);
	});

	context.subscriptions.push(...disposables);
}


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// enable by default
	const isEnabled = context.globalState.get(ENABLED_KEY, true);

	registerFaahhCommands(context);

	if (isEnabled) {
		startListeningForErrors(context)
	} else {
		vscode.window.showInformationMessage('Use command "Enable FAAHH" to enable FAAAHHHhhhhh....');
	};
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
