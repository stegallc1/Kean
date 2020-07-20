// Part 1
// var trace1 = {
//   // The list of xaxis labels
//   x: ["beer", "wine", "martini", "margarita",
//     "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   // The list of yaxis values
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   // The type of chart to use
//   type: "bar"
// };

// Putting the "trace" in list format (you can utilize multiple traces, we will cover that in a later exercise)
// var data = [trace1];

// Configuration options for the chart we are about to create.
// Documentation for that https://plotly.com/javascript/reference/#layout
// var layout = {
//   title: "'Bar' Chart"
// };

// Plotly.newPlot(
//  <Reference to an ID in the html where the graph will render>,
//  <A list/array of traces (data objects)>,
//  <A layout configuration object>
// )
// Plotly.newPlot("plot", data, layout);
// console.log(Plotly);


// Function Reference
// https://plotly.com/javascript/plotlyjs-function-reference/

// // Part 2 - Adding attributes
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
//   xaxis: { title: "Drinks"},
//   yaxis: { title: "% of Drinks Ordered"}
// };

// Plotly.newPlot("plot", data, layout);

// // Part 3 - Line Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "line"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);

// // Part 4 - Broken Pie Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "pie"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);


// // Part 5 - Working Pie Chart
var trace1 = {
  labels: ["beer", "wine", "martini", "margarita",
      "ice tea", "rum & coke", "mai tai", "gin & tonic"],
  values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: 'pie'
};

var data = [trace1];

var layout = {
  title: "'Bar' Chart",
};

Plotly.newPlot("plot", data, layout);

