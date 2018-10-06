//File Extension Sort

// You are given an array of filenames with extensions
// Sort the files into arrays based on whether 
// or not they are videos or images

/*
## Info
 ### Image File Extensions
 * jpg
 * gif
 * jpeg
 * png

 ### Video File Extensions
 * mov
 * avi
 * mpeg
 * mp4
 * mpg
*/

var files = ["Kevin_first_birthday.mov",
	"Cezar_bombing_intentionally.jpg",
	"Victor_stands_for_wwe_rights.mp4",
	"Bongs_Road_rage.avi",
	"Will_skydiving.jpeg",
	"Jdogg_getting_his_black_belt.png",
	"Cez_winning_underground_street_race.mov",
	"Too_much_grumpy_cat_in_internet.gif",
	"Bite_me_grumpy_cat_rules.mpg",
	"i_just_wanna_code.png",
	"how_many_more_sample.avi",
	"more_example_on_the_way.mp4",
	"dog_rules.gif",
	"no_dogs_drool.jpeg",
	"where_is_darryll.mpeg",
	"just_a_few_more_sample.png",
	"omg_its_coding_time.avi",
	"lets_git_it_on.mp4"
	];

var imageExtensions = ['jpg', 'gif', 'png', 'jpeg'];
var videoExtensions = ['mov', 'avi', 'mp4', 'mpeg', 'mpg'];
var images = [];
var videos = [];

var extensionSorter = function (fileArray){
	for(var i = 0; i < fileArray.length; i++){
		var fileExt = fileArray[i].split(".").pop();
		// split fileArray[i] based on period 
		// and pop the end to be stored at fileExt variable

		// check the fileExt against imageExtension array using indexOF()
		// if does not equal -1 means if can't find it it will bring back -1
		// if can find it it will bring back the index of fileExt in the array
		if(imageExtensions.indexOf(fileExt) != -1){
			images.push(fileArray[i]);
		} else {
			videos.push(fileArray[i]);
		}
	}
	console.log(images);
	console.log(videos);
};

// At Console
// extensionSorter(files);
