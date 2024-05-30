const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log('Timer 1 FINISHED'), 0);
setImmediate(() => console.log('Immediate 1 finsihhed'));

fs.readFile('Test-file.txt', () => {
  console.log('I/O finished');
  console.log('--------------');

  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finsihed'), 2000);
  setImmediate(() => console.log('Immedeiate 2 finished'));

  process.nextTick(() => console.log('proxess.nextTick'));

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encryped');
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encryped');
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, 'Password encryped');

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encryped');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encryped');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encryped');
  });
});

console.log('Hello from the top-level code');
console.log(((x) => x * x)(2));
