
[![npm](https://img.shields.io/npm/v/node-red-contrib-display-property.svg)](https://www.npmjs.com/package/node-red-contrib-display-property) [![downloads](https://img.shields.io/npm/dt/node-red-contrib-display-property.svg)](https://www.npmjs.com/package/node-red-contrib-display-property)

# node-red-contirb-display-property

A simple node that displays as its status the value of a message property that passes the node.
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

## Getting Help

A documentation is available in the help section of the node.

## Bugs and feature requests

Please report any issues or enhancement requests at <a href="https://github.com/PeterAustria/node-red-contrib-display-property/issues">GitHub</a>.
