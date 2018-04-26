class Media {
  constructor(title) {
    this._title = title;
    this._isCheckOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title
  }
  
  get isCheckOut() {
    return this._isCheckOut;
  }
  
  get ratings() {
    return this._ratings;
  }
  
  set isCheckOut(check) {
    this._isCheckOut = check;
  }
  
  toggleCheckOutStatus() {
    //this._isCheckOut = !this._isCheckOut;
    // or
    if (this._isCheckOut) {
      this._isCheckOut = false;
    } else {
      this._isCheckOut = true;
    }
  }
  
  getAverageRating() {
    let ratingSum = this._ratings.reduce((currentSum, rating) => currentSum + rating)/ this._ratings.length;
    return ratingSum;
  }
  
  addRating(newRating) {
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title); //***Call super on the first line of the constructor method. Pass it any arguments that the parent constructor uses.
    // Pass title to the parent constructor. The parent constructor uses title to set the _title property.
    this._author = author;
    this._pages = pages;
  }
  
  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runtime) {
    super(title);
    this._director = director;
    this._runtime  = runtime;
  }
  
  get director() {
    return this._director;
  }
  
  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  
  get artist() {
    return this._artist;
  }
  
  get songs() {
    return this._songs;
  }
  
  addSong(newSong) {
    this._songs.push(newSong);
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log(historyOfEverything._author); // Bill Bryson
console.log(historyOfEverything._title); // A Short History of Nearly Everything
console.log(historyOfEverything._pages); // 544
console.log(historyOfEverything._isCheckOut); // false
console.log(historyOfEverything._ratings);
// []
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything._isCheckOut); 
// true
historyOfEverything.addRating(1);
historyOfEverything.addRating(2);
historyOfEverything.addRating(3);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
console.log(historyOfEverything._ratings);
// [ 1, 2, 3, 4, 5 ]
console.log(historyOfEverything.getAverageRating());
// 3
const speed = new Movie('Jan de Bont', 'Speed', 116);
console.log(speed._isCheckOut); // false
speed.toggleCheckOutStatus();
console.log(speed._isCheckOut); // true
speed.addRating(50);
speed.addRating(30);
speed.addRating(15);
speed.addRating(5);
console.log(speed.getAverageRating());
// 25