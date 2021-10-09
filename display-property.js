module.exports = function (RED) {
	function DisplayPropertyNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;
		var name 	 = config.name;
		var property = config.property;
		var showDate = config.showDate;
		var showTime = config.showTime;
		node.on("input", function (msg) {

			// function start ---------------------------

			//const showDate = true;
			//const showTime = false;
			var status = 'property does not exist';
			var date = new Date();
			var dateTime = '';
			if (showDate == 1) {
				var day = date.getDate();
				var month = date.getMonth() + 1; // month as a number 0-11, so add 1
				var year = date.getFullYear();
				if (day < 10) { day = '0' + day };
				if (month < 10) { month = '0' + month };
				dateTime = year + '-' + month + '-' + day;
			}
			if (showTime == 1) {
				if (dateTime != '') { dateTime += ' ' };
				var hour = date.getHours();
				var minute = date.getMinutes();
				var second = date.getSeconds();
				if (hour < 10) { hour = '0' + hour; };
				if (minute < 10) { minute = '0' + minute }
				if (second < 10) { second = '0' + second }
				dateTime += hour + ':' + minute + ':' + second;
			}
			if (dateTime != '') { dateTime += ': ' };

			if (property === '' || property === undefined || property === null) {
				property = "msg.payload";
			}
			if (msg.hasOwnProperty('property')) {
				msg.test0 = "msg.property angegeben";
				if (msg.property !== '' || msg.property === undefined || msg.property === null) {
					property = msg.property
				}
			}
			if (msg.hasOwnProperty(property.slice(property.indexOf(".") + 1))) {
				status = RED.util.getMessageProperty(msg, property);
			}
			node.status({ shape: "dot", fill: "grey", text: dateTime + JSON.stringify(status) })
			node.send(msg);

			// funiction end ---------------------------

		});
	}
	RED.nodes.registerType("display property", DisplayPropertyNode);
};