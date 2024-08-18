//! executes after the mentioned time
// setTimeout(function () {
// 	console.log('hi there');
// }, 2000);
setTimeout(demo_1, 3000);
console.log('bye bye bye..!!');

//can replace the function
function demo_1() {
	console.log('deadpool');
}

//! clearTimeout clears the setTimeOut method

//// Interval
const intervalId = setInterval(() => console.log('Wolvarine'), 2000);

clearInterval(intervalId); //! clears the interview
