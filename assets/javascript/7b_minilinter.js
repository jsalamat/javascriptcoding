let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
// console.log(storyWords);
console.log('Total Words:'+ storyWords.length);

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
// console.log(betterWords);
// console.log(betterWords.join(' '));

let totalOverused = betterWords.filter(word => overusedWords.includes(word));
console.log('Total Over Used Words: ' + totalOverused.length);

let totalSentence = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.'|| word[word.length-1] === '!') {
    totalSentence++;
  }	
});
console.log('Total Sentences: '+ totalSentence);

let totalextremely = betterWords.filter(word => 'extremely'.includes(word)).length;
let totalliterally = betterWords.filter(word => 'literally'.includes(word)).length;
let totalactually = betterWords.filter(word => 'actually'.includes(word)).length;

const logInfo = (param1, param2, param3) => {
    console.log('Word extremely count: ' + param1);
    console.log('Word literally count: ' + param2);
    console.log('Word actually count: ' + param3);
};

logInfo(totalextremely,totalliterally, totalactually);
console.log(betterWords.join(' '));


