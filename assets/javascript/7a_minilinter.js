// example of using filter and include together as to compare to anm array
let allNum = [1, 20, 3, 40, 5, 60, 7, 80, 9, 100];

let tens = [10, 20, 30, 40, 50, 60, 70, 80, 100];

let onlySingle = allNum.filter(number => number < 10);
// console.log(onlySingle);

let onlyTens = allNum.filter(number => tens.includes(number));
// console.log(onlyTens);

let removeTens = allNum.filter(number => !tens.includes(number));
// console.log(removeTens);

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// split the story string into individual words 
// and save them in a new array called storyWords
let storyWords = story.split(' ');
// console.log(storyWords);
//console.log(storyWords.length);


//There is an array of words that are unnecessary. 
//Iterate over your array to filter out these words. 
//Save the remaining words in an array called betterWords. 
let betterWords = storyWords.filter(word =>!unnecessaryWords.includes(word));
//console.log(betterWords)

let totalWords = betterWords.length;
//console.log(totalWords);

// There is an array of words called overusedWords. 
// These are words overused in this story. 
// You want to let the user of your program know 
// how many times they have used these overused words
let timesUsedreally = betterWords.filter(times => ['really'].includes(times));
// console.log(timesUsedreally.length);

let timesUsedvery = betterWords.filter(times => ['very'].includes(times));
// console.log(timesUsedvery.length);

let timesUsedbasically = betterWords.filter(times => ['basically'].includes(times));
// console.log(timesUsedbasically.length);

let timesUsedOverUsed = storyWords.filter(times => overusedWords.includes(times));
// console.log(timesUsedOverUsed.length);
//or used to comaparison

let totalOverUsedWords = 0;
betterWords.filter(times => {
  	if (overusedWords.includes(times)) {
                   return totalOverUsedWords+=1
    }
});
// console.log(totalOverUsedWords);

let countReally = 0;
let countVery = 0;
let countBasically = 0;

let countOverUsedWords = function (words) {
	for (let i = 0; i < betterWords.length; i++) {
		if (betterWords[i] === 'really') {
			countReally+=1;
		} 
		if (betterWords[i] === 'very') {
			countVery+=1;
		}  
		if (betterWords[i] === 'basically') {
			countBasically+=1;
		}
	}
}

countOverUsedWords();
//console.log(countReally);
//console.log(countVery);
//console.log(countBasically);

let countSentence = 0;

betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    countSentence+=1;
  }
});

// console.log(countSentence);
function logInfo(param1, param2, param3, param4, param5, param6) {
    console.log('Word count: ' + param1);
  //The rest of your code goes here
  	console.log('Sentence count: ' + param2);
  	console.log('Total Over Used Words: ' + param3);
  	console.log('Times Really Used: ' + param4);
  	console.log('Times Very Used: ' + param5);
  	console.log('Times Basically Used: ' + param6);
};

logInfo(totalWords, countSentence, totalOverUsedWords, countReally, countVery, countBasically);