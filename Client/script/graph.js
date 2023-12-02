// Graph is a chart instance and relies on app.html's chart div being loaded in order to add the
// appropriate GUI elements. 
class Graph{

  //Creates a graph with default parameters
  //TODO: Allow for user updates to parameters.
  constructor(){

    //Initialize a function example.
    let graphFunction = new GraphFunction(0,0,10,10, function(x){return x*x});
    let trace1 = graphFunction.getPlotDataForIncrement(0.2); 
    
    //Initialize a dataset example.
    let query_data = new dataset();
    let trace2 = query_data.trace;

    var data = [trace1, trace2];

    var chart = document.getElementById("chart")
    this.graph2D = Plotly.newPlot(chart, data);
  }

};