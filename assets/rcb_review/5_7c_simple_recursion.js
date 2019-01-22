/* 
Caution when creating recursive function you can 
easily end up in infinite loop
which can crash your browser
*/


let simpleRecursion = function(n){
	if(n>0){
		console.log(n);
		simpleRecursion(n-1);
	} else {
		console.log('Done');
	}
};