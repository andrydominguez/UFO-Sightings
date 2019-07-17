// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", function() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Getting the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Checking and filtering data using dates
  if (date) {
    // Keeping rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Clearing existing data
  tbody.html("");

  // Loop through each object, and append a row and cells for each value
  data.forEach((tableRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop in the tableRow and add each value as a table cell (td)
    Object.values(tableRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
})
