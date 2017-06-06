// importing APIs to use
var contextMenu = require("context-menu");
var panel = require("panel");

exports.main = function(options, callbacks) {
	console.log(options.loadReason);

	//create a new context-Menu item

		var menuItem = contextMenu.Item({
			label: "Look up word?",
			//display item if there is a selection

			context: contextMenu.SelectionContext(),
            //when this item is clicked, post a message back with the selection
			contentScript: 'self.on("click", function () {' +
				' var text = window.getSelection().toString();' +
				' self.postMessage(text);' +
				'});',
			//when we receive a message, look up the item
			onMessage: function (item) {
				console,log('looking up "' + item + '"');
				lookup (item);
			}
		}};
	};
	
	function lookup(item) {
		createwikiaddon = panel.Panel({
			width: 240,
			height: 320,
			contentURL: "http://en.wikipedia.org/w/index.php?title=" +
						item + "userformat=mobile"
					});
					createwikiaddon.show();
					}