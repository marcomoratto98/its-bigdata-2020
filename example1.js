// Simple script to calculate average body temperature for ill people (those with high temperature & sore throat)
// Using filter to exclude healthy folks

const population = require('./population.json')

// Map Function - Returns interesting pieces of information only - prepares data
const temp = population.map(function(item) {
  return { soreThroat: item.soreThroat, temperature: item.temperature }
});
// console.log(temp);

// Filters does what we expect... filters elements of the array
const selectedPatient = temp.filter(item => (item.soreThroat && item.temperature > 37));
console.log(selectedPatient);

// Reduce applies function to array elements, producing a unique result
const avg = selectedPatient.reduce(function (result, item, index, values) {
  result += item.temperature;
  	if (index == values.length -1) {
		result = result / values.length;
	}
  return result;
}, 0);

console.log(avg);
