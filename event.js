
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}
const myEmitter=new events.EventEmitter();

myEmitter.on('celebration',listenerCallback)

myEmitter.emit('celebration',"Advance Node js ")

 