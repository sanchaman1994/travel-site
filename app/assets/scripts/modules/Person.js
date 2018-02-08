// function Person(fullName, favColor) {
//   this.name = fullName;
//   this.favoriteColor = favColor;
//   this.greet = function() {
//     console.log("hi there chosen ilope ew, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//   }
// }

// module.exports = Person;



class Person {
	constructor(fullName, favColor){
		 this.name = fullName;
  		 this.favoriteColor = favColor;
	}
 
  greet() {
    console.log("hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

export default Person;