const event = require('events')

let evn = new event.EventEmitter()

// evn.on('my-event', (data) => {
//     console.log("event : ", data);
// })

// evn.emit('my-event',"call emit() method to fire my evn")


// once method will execute only one time...
evn.once('eventOnce', (code, msg) => {
    console.log(`Got ${code} and ${msg}`);
})

evn.emit('eventOnce', 200, 'Ok')

// console.log(event);
