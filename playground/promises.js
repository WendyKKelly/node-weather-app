// var asyncAdd = (a, b) => {
//
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a === 'number' && b === 'number'){
//         resolve(a + b);
//       }else {
//         reject('arguments must be numbers');
//       }
//     }, 1500);
//   });
// };
//
// asyncAdd(5, 7).then((res) => {
//   console.log('Result: ', res);
// }, (errorMesage) => {
//   console.log(errorMesage);
// });


var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};
asyncAdd(5, '7').then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
//},(errorMessage)=>{
  //console.log(errorMessage);
}).then((res) => {
  console.log('should be 45', res);
//}, (errorMessage) => {
  //console.log(errorMessage);
}).catch((errorMessage)=>{
  console.log(errorMessage);
});

// var somePromise = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     resolve('He it worked');
//     //resolve('again');
//     reject('unable to work');
//   }, 2500);
//
// });
//
//
// somePromise.then( (message) => {
//   console.log('success:', message);
//
// }, (errorMesage) => {
//   console.log('error:', errorMesage);
// });
