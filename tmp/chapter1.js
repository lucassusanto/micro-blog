const log = require('./logger');

log('Hello World!');

const os = require('os');

// var totalMem = os.totalmem();
// var freeMem = os.freemem();

// console.log(`Total memory: ${totalMem}`);
// console.log(`Free memory: ${freeMem}`);

const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', (err, files) => {
//     if(err) console.log('Error', err);
//     else console.log('Files', files);
// });

const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('messageLogged', (arg) => {
//     console.log('messageLogged triggered:', arg.id);
// });

// emitter.emit('messageLogged', { id: 1, url: 'http://' });
