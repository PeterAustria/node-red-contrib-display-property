
[![npm](https://img.shields.io/npm/v/node-red-contrib-display-property.svg)](https://www.npmjs.com/package/node-red-contrib-display-property) [![downloads](https://img.shields.io/npm/dt/node-red-contrib-display-property.svg)](https://www.npmjs.com/package/node-red-contrib-display-property)

# node-red-contirb-display-property

A simple node that displays as its status the value of a message property that passes the node.
Optional it can be configured to also show the daten and/or the time when the message passed.
The intention of this node is to give you a better overview of the messages that pass your flows and support you debugging your flows by easily displaying the content of massage properties.

## Quick Start

Install from your <b>Node-RED Manage Palette</b> or using npm:
```
npm install node-red-contrib-display-property
```

## Example
![grafik](https://user-images.githubusercontent.com/80790340/114729085-f42ca880-9d3f-11eb-9779-6af19e969131.png)

```
[{"id":"d2a1b91.5e11c48","type":"display property","z":"f30078ab.f99208","name":"","property":"","x":500,"y":380,"wires":[[]]},{"id":"72e1bfe.11b244","type":"inject","z":"f30078ab.f99208","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"This is my payload","payloadType":"str","x":290,"y":380,"wires":[["d2a1b91.5e11c48"]]}]
```

## Help

This documentation is also available in the help section of the node.
This node accepts any massage at the input and passes exactly the same massage to the output.
It can be configured to display the content of a certain property (default is <code>msg.payload</code>) of the message that passes the node. This content will be <b>displayed as the status</b> of the node along the the daten and/or time when it passed.
My intention for creating this little node was to get a better overview of what values running throug my nodes without the need to put debug nodes everywhere. So this can also be handy for debugging your flows by displaying the content of massages property.

#### Two options to display the value of a property:
You can either provide the name of the property you want to display <b>in the configuration of the node</b> or you can <b>pass the name of the property</b> you want to display as <code>msg.property</code> to the node.

To display for example the content of <b>msg.topic</b> you have two options:

1. add <b>msg.topic</b> as the property in the <b>configuration</b> of the node, or
2. pass a message with <code>msg.property</code> and content <b>msg.topic</b> to the node.

No need to mention that you can also display any other properties :-)

#### What else should you know about this node?
If you pass a <code>msg.property</code>, this will override the settings in the node-configuration.
If the message does not have a property, either configured in the node or passed via <code>msg.property</code>, the content of <code>msg.payload</code> (the default) will be displayed instead.

## Bugs and feature requests

Please report any issues or enhancement requests at <a href="https://github.com/PeterAustria/node-red-contrib-display-property/issues">GitHub</a>.
