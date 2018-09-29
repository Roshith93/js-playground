// const outer = (a,b) =>  inner = (c,d) =>  a+b+c+d;


// const result = outer(10,20)(2,5);
// console.log(result);

// for (var i = 1; i <= 10; i++) {
 
//     (function (j) {
//         setTimeout(function() {
//          console.log(j);
//       },0);
//     })(i);
   
//  }

for(var i=0; i< 10; i++) {
    setTimeout(function(){
      console.log(i);
 
   }, 5000)
 
 }

//      Looking at this code snippet, you would normally assume that it would print the numbers 0 to 9, one per second. In fact if you run this code, you get 10 printed out ten times, at a one-second interval
// The short answer is that the for loop executes first, then it looks for the i value, which is 5, and then outputs four times, one for each loop iteration.
// props.
// render
// 
