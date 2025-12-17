const {
	Menu: e
} = require("electron"), u = [{
	label: "Quit DDTank 7k7k",
	submenu: [{
		role: "quit"
	}]
}];
module.exports = e.buildFromTemplate(u);