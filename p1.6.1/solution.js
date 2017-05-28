/*
const prompt = require('prompt');
prompt.start();
prompt.get(['startNum','endNum'], (err, results) => {
	console.log('Input');
	console.log('startNum:' + results.startNum);
	console.log('endNum: ' + results.endNum);



});
*/

const readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function processSum(number) {
	console.log('the sum is', number);
}

function process3n1(number, counter) {
	if(number === 1){
		return counter;
		
	}
	else
	if(number % 2 ===0){
		number=number/2;
		counter++;
		return process3n1(number, counter);
		
	}
	else
	{
	  	number=3*number + 1;
		counter++;
		return process3n1(number, counter);
	}


}


r1.question('Enter a number:  ', function (x) {
	r1.question('Enter another number: ', function (y) {
		var sum = parseFloat(x) + parseFloat(y);
		let maxLength=1;
		for (let i=parseInt(x);i<parseInt(y); i++){
			let tmp = process3n1(i,1);
			if(tmp > maxLength)
			   maxLength=tmp;
		}
		console.log(maxLength);
		//processSum(sum);
		r1.close();
	});
});



