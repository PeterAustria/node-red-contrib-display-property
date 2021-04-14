module.exports = function (RED) {
	function DisplayPropertyNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;
		var property = config.property;
		node.on("input", function (msg) {
			
// function start ---------------------------

			var status = 'property does not exist';
			if (property === '' || property === undefined || property === null) {
				property = "msg.payload";
			}
			if (msg.hasOwnProperty('property')) {
			    msg.test0 = "msg.property angegeben";
			    if (msg.property !== '' || msg.property === undefined || msg.property === null) {
                    property = msg.property
			    }
			}
            if (msg.hasOwnProperty(property.slice(property.indexOf(".")+1))) {
    			status = RED.util.getMessageProperty(msg, property);
            }
			node.status({shape: "dot", fill: "grey", text: JSON.stringify(status)})  
			node.send(msg);
			
// funiction end ---------------------------
			
		});
	}
	RED.nodes.registerType("display property", DisplayPropertyNode);
};