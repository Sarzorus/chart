//Test graph setup.
//Later make it update a plot ectera.
class Graph{

  //Creates a graph with no parameters
  constructor(){

    //Currently initializes two traces one as example data one as an example function.
    let graphFunction = new GraphFunction(0,0,10,10, function(x){return x*x});
    let trace1 = graphFunction.getPlotDataForIncrement(0.2); 
    
    var trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: 'scatter',
      name: 'Generic Dataset'
    };
    
    var data = [trace1, trace2];

    var chart = document.getElementById("chart")
    this.graph2D = Plotly.newPlot(chart, data);
  }



};

//Note: this is currently the starting script which should be moved to a main function 
var graph = new Graph();
