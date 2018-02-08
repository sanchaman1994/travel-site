var $ = require('jquery');

import Person from './modules/Person';

class Adult extends Person{
	payTaxes(){
		console.log(this.name +" now owes $0 in taxes.");
	}
	
}

var john = new Person("sanchaman", "blue");
john.greet();

var choden = new Adult ("choden", "blue");
choden.greet();

choden.payTaxes();
$("h1").remove(); 