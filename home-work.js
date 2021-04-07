'use strict'
const string  		  = 'Германия, Берлин, 83млн, 357.4тыс.кв.км; Беларусь, Минск, 9.4млн, 207.6тыс.кв.км; Польша, Варшава, 37.9млн, 312.6тыс.кв.км; Франция, Париж, 67.8млн, 643.8тыс.кв.км; Нидерланды, Амстердам, 17.4млн, 41.5тыс.кв.км; Испания, Мадрид, 44.3млн, 505.9тыс.кв.км; Бельгия, Брюссель, 11.4млн, 30.5тыс.кв.км';
const array1  		  = string.split('; ');
const states  		  = [];
const state   		  = {};
let generalPopulation = 0;
let totalArea 		  = 0;

array1.map((value, key) => {
	const array2 = value.split(', ');

	state[key] = {
		country:    array2[0],
		capital:    array2[1],
		population: array2[2],
		area:   	array2[3],
	}
	states[key] 	  = state[key];
	generalPopulation += Number.parseFloat(array2[2]);
	totalArea 		  += Number.parseFloat(array2[3]);
})

function NewCountry (name, generalPopulation, totalArea, capital) {
	this.name 			   = name;
	this.generalPopulation = generalPopulation + 'млн';
	this.totalArea 		   = totalArea + 'тыс.кв.км';
	this.capital 		   = capital;
}

const newCountry = new NewCountry('Лонг Лендс', generalPopulation, totalArea, 'Минск');
console.log(newCountry);