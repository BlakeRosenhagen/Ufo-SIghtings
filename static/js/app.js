
var tableData = data;

var tbody = d3.select("tbody");
//remember to use build table with the camelCase
function buildTable(data) {
  
  tbody.html("");
//use "td" and "tr" from html connect it to js
  data.forEach((meta_row) => {
    var row = tbody.append("tr");

    Object.values(meta_row).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
      //closed parenthesis for second "forEach" function
    );
      //closed wiggle for after arrow, closed parenthesis for first "forEach"
  });
  //closed paranthesis for function "buildTable"
}

function handleClick() {
  //from website input
  var date = d3.select("#datetime").property("value");
  let search_data = tableData;

  //next four line were gathered online
  if (date) { 
    search_data = search_data.filter(row => row.datetime === date);
  }
  buildTable(search_data);
}
//check homework for reference

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);