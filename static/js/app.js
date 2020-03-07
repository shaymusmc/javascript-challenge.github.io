// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the table's data from data.js
console.log(data);
  
// Update each cell's text with values (datetime, city, state, country, shape, durationMinutes, comments)
// Use arrow functions
data.forEach((tableData) => {
	var row = tbody.append("tr");
	Object.entries(tableData).forEach(([key, value]) => {
		console.log(key, value); // Check to see if the forEach is working.
	  	var cell = row.append("td");
	  	cell.text(value);
	});
});
  
// Select the Filter Table button with filter-btn ID
var submit = d3.select("#filter-btn");

// Submit click function
submit.on("click", function () {

	// Clear tbody data
	d3.select("tbody").html("");

	// Select datetime as input
	var inputElement = d3.select("#datetime");

	// Obtain search value
	var inputValue = inputElement.property("value");

	// Filter on datetime
	var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
		
	// Create forEach loop through tableData
	// Update each cell's text with values (datetime, city, state, country, shape, durationMinutes, comments)
	filteredData.forEach((sightingData) => {
		var row = tbody.append("tr");
		Object.entries(sightingData).forEach(([key, value]) => {
			console.log(key, value); // Check to see if the filter is working.
			var cell = row.append("td");
			cell.text(value);
		});
	});
});