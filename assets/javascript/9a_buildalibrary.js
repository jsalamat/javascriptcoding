// Books-'N-Stuff carries three different types of media: books, CDs, and movies. 
// In this project you will create a parent class named Media 
// with three subclasses: Book, Movie, and CD. 
// These three subclasses have the following properties and methods:

// --BOOK--
// Properties: author (string), title (string), pages (number),
//  isCheckedOut (boolean, initially false), and ratings (array, initially empty).
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

// --MOVIE--
// Properties: director (string), title (string), runTime (number), 
// isCheckedOut (boolean, initially false), and ratings (array, initially empty)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

// --CD--
// Properties: artist (string), title (string), 
// isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

//=================================================

class Media {
	constructor(title) {
		this._title = title;
		this._isCheckedOut = false;
		this._ratings = [];
	}

	get title() {
		return this._title;
	}

	get isCheckedOut() {
		return this._isCheckedOut;
	}

	get ratings() {
		return this._ratings;
	}

	toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  	}
  
  	getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfratings = ratings.length;
  	}
  
  	addRating(newRatings) {
		this.ratings.push(newRatings);
	}
}