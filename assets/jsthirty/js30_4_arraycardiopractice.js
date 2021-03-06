// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    console.log('----------------filter()----------------------');
    // Array.prototype.filter() //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // 1. Filter the list of inventors for those who were born in the 1500's
    	// A) filter inventors array
    	// B) pass in function to loop over each inventor
    	// C) create if statement to look for truthy statament to keep it
    let fifteenInventors = inventors.filter(function (inventor) {
    	if (inventor.year >= 1500 && inventor.year <= 1600 ) {
    		return true; // keep it
    	}
    });

    console.log('----------------E6');
    let es6fifteenInventors = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1600))

    //console.table(fifteenInventors);
    console.table(es6fifteenInventors);
    console.log('--------------------------------------------');
    console.log('----------------map()----------------------');
    // Array.prototype.map() //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // 2. Give us an array of the inventors' first and last names
    let firstAndLastNames = inventors.map(function (inventor) {
    	return inventor.first + " " + inventor.last;
    })

    //console.table(firstAndLastNames);
    console.log('----------------E6');
    //concat version with space
    //let es6firstAndLastNames = inventors.map(inventor => inventor.first + " " + inventor.last);
    //or backticks version
    let es6firstAndLastNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

    console.table(es6firstAndLastNames);
    console.log('--------------------------------------------');
    console.log('----------------sort()----------------------');
    // Array.prototype.sort() //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // 3. Sort the inventors by birthdate, oldest to youngest
	let oldestInventors = inventors.sort(function(a, b) {
	  return a.year - b.year;
	});

	//console.table(oldestInventors);
	//Other Way
	let oldestInventorsB = inventors.sort(function (a, b) {
		if(a.year > b.year) {
			return 1; // moves up in array
		} else {
			return -1; // moves down in array
		}
	});

	//console.table(oldestInventorsB);
	console.log('----------------E6');
	// Using Ternary Operator
	// condition ? expr1 : expr2
	let es6OldestInventors = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

	console.table(es6OldestInventors);
	console.log('--------------------------------------------');
	console.log('----------------reduce()----------------------');
    // Array.prototype.reduce() //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // 4. How many years did all the inventors live?
    // For Loop version
    let totalYears = 0;

    for (let i = 0; i < inventors.length; i++) {
    	totalYears += inventors[i].passed - inventors[i].year;
    }

    console.log(totalYears);
    // Using reduce() method

    
    const totalYearsB = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
    // Zero was added here because first time around total is undefined
    // putting zero wil allow to add it up
    console.log(totalYearsB);
    console.log('--------------------------------------------');
    console.log('----------------sort()----------------------');
    // 5. Sort the inventors by years lived
    let longLifeInventors = inventors.sort(function (a, b) {
    	if ((a.passed - a.year) < (b.passed - b.year)) {
    		return 1;
    	} else {
    		return -1;
    	}
    })

    console.table(longLifeInventors)
    // Other version
    let longLifeInventorsB = inventors.sort(function (a, b) {
    	let lifeInventorA = a.passed - a.year;
    	let lifeInventorB = b.passed - b.year;
    	return lifeInventorA < lifeInventorB ? 1 : -1;
    });

    console.table(longLifeInventorsB)
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // done in console

    // inspect what contain in webpage
    //then we look for links within it
    // covert links to list of names then filter the names that include actual names
    // take in a list of links and pick list f names by map each one
    // from that link just return the text content
    // *** Problem queryselector will return Nodelist. 
    // *** map is not in prototype. so we need to change it to an array
    
    // const category = document.querySelector('.mw-category')
    
    // Two way to make an array
    // const links = [...catergory.querySelectorAll('a')];
    // Or
    // const links = Array.from(category.querySelectorAll('a'))

    // const de = links
    //			.map(link => link.textContent)
    //			.filter(streetName => streetName.includes('de'))
    			// filter only return street name if it include 'de'
    // de

    console.log('--------------------------------------------');
    console.log('----------------sort()----------------------');
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    //let alphabeticalLastName = people.sort()
    //console.log(alphabeticalLastName);

    //or
    // 
    const alphabeticalLastNameB = people.sort((lastOne, nextOne) => {
    	// console.log(lastOne);
    	// then convert it to first Name and last Name
    	// so we split at (", ") and create an array
    	// const parts = lastOne.split(', ') deconstructure it so return in their in own variable
    	// we put it in squere bracket
    	//const [last, first] = lastOne.split(', ');
    	// console.log(last, first);
    	const [aLast, aFirst] = lastOne.split(', ');
    	const [bLast, bFirst] = nextOne.split(', ');
    	return aLast > bLast ? 1 : -1;
    })
    console.log(alphabeticalLastNameB);
    console.log('--------------------------------------------');
    console.log('----------------reduce()----------------------');
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    // start with blank obj // {}
    //then loop over data
    // if there no obj item then obj item is equal to zero
    // it will set the inital to zero
    // then increment  and return obj
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce(function (obj, item) {
    	if(!obj[item]) {
    		obj[item] = 0;
    	}
    	obj[item]++;
    	return obj;
    }, {});
    console.log(transportation);
