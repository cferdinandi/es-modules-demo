import * as _ from './modules/helpers.js';

// Get two numbers from the user
var num1 = parseFloat(prompt('Enter a number', 0));
var num2 = parseFloat(prompt('Enter another number', 0));

// Get the total
var total = _.add(num1, num2);

// Tell them the total
alert('The total is ' + total);