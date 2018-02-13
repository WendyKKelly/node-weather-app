console.log('starting app');
setTimeout(() => {
console.log("basic asyncronous")
}, 2000);
setTimeout(() => {
  console.log("no wait time")
}, 0);

console.log('finsihgin-app');
