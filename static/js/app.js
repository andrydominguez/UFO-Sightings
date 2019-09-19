// from data.js
var table = data;

// Getting table references
var tbody = d3.select("tbody");

 
function buildTable(data) {
// Clearing out any existing data
  tbody.html("");

// Appending a row and cells for each value in the row
  data.forEach((tableRow) => {
// Appending a row to the table body
  var row = tbody.append("tr");

// Prevent the form from refreshing the page
d3.event.preventDefault();

    // Loop through each field in the tableRow
        Object.values(tableRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Preventing the form from refreshing the page
  d3.event.preventDefault();

  // Getting the datetime value through the filter
  var date = d3.select("#datetime").property("value");
  let cleanedData = table;

  // Checking to see if a date was entered and filter the
  
  if (date) {
// Applying `filter` to the table 
    cleanedData = cleanedData.filter(row => row.datetime === date);
  }

// Building the table using filtered data
 
  buildTable(cleanedData);
}

// Attaching an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Building the table when the page loads
buildTable(table);

