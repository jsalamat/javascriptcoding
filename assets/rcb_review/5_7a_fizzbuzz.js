    	let fizzbuzz = function() {
    		// start at 1 to count from 1 to 100
    		for(let i=1; i <= 100; i++){
    			// if i divided(modelo) 3 with remainder of zero and
    			// if i divided(modelo) 5 with remainder of zero  console log 'FizzBuzz'
    			if(i%3 === 0 && i%5 === 0) {
    				console.log('FizzBuzz')
    			} else if (i%3 === 0) {
    				console.log('Fizz')
    			} else if (i%5 === 0) {
    				console.log('Buzz')
    			} else {
    				console.log(i);
    			}
    		}
    	}

        //you start two ways
    	// fizzbuzz();
        // or at console type 
        // fizzbuzz();