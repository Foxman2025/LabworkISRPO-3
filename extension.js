const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "CreateHtml.CreateHtml",
    function () {
      const htmlContent = `<!DOCTYPE html>
	  <html lang="en">
		<head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <meta http-equiv="X-UA-Compatible" content="ie=edge">
		  <title>My Website</title>
		  <link rel="stylesheet" href="./style.css">
		  <link rel="icon" href="./favicon.ico" type="image/x-icon">
		</head>
		<body>
		  <main>
			  <h1>Welcome to My Website</h1>  
		  </main>
		  <script src="index.js"></script>
		</body>
	  </html>
		`;

      const folderPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
      fs.writeFile(path.join(folderPath, "index.html"), htmlContent, (err) => {
        if (err) {
          console.error(err);
          return vscode.window.showErrorMessage("Failed create");
        }
        vscode.window.showInformationMessage("Success create");
      });
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
