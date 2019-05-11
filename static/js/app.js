// from data.js
var tableData = data;

// Reassign the node to submit variable 
const submit = d3.select("#filter-btn")

submit.on("click", function() {

    d3.event.preventDefault()
    
     // Select the input element, value, and fix minor key issues and get the raw HTML node 
    const inptValDate = d3.select("#datetime").property("value")
   
    const tbody = d3.select("tbody")

    // Reset the webpage afer each click
    tbody.html("")

    // Assing an empty dict for filter parameters
    var inptFilter = {}
    
    if (inptValDate !== ""){
        inptFilter["datetime"] = inptValDate
    }
     const ufoData = tableData.filter(val => {
        for (key in inptFilter) {
            if (val[key] === undefined || val[key] != inptFilter[key])
                return false
            }
                return true
          })

      ufoData.forEach(val => {
        const row = tbody.append('tr')
        for (key in val) {
            row.append('td').text(val[key])
          }
    })   
}) 