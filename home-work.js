const string = 'Германия, Берлин, 83млн, 357.4тыс.кв.км; Беларусь, Минск, 9.4млн, 207.6тыс.кв.км; Польша, Варшава, 37.9млн, 312.6тыс.кв.км; Франция, Париж, 67.8млн, 643.8тыс.кв.км; Нидерланды, Амстердам, 17.4млн, 41.5тыс.кв.км; Испания, Мадрид, 44.3млн, 505.9тыс.кв.км; Бельгия, Брюссель, 11.4млн, 30.5тыс.кв.км';
const array = string.split('; ');

let square = 0;
let population = 0;

for (let i = 0; i < array.length; i++) {
	
	array2 = array[i].split(', ');
	
	population += +(array2[2].slice(0, -3));
	square     += +(array2[3].slice(0, -9));
}

function NewCity (name, population, square, capital) {
	this.name 		= name;
	this.population	= population;
	this.square		= square;
	this.capital	= capital;
}

const newCity = new NewCity('Лонг Лендс', population, square, 'Минск');
console.log(newCity);