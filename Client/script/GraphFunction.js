class GraphFunction{

    // Creates a graph instance with bounds for calculating a function.
    // The function needs the bounding box given by the lower bounds and the graph size
    // as well as a function that will return an y value for any given value of X.
    //
    // lowerXBound is a numerical value representing the starting x value
    // lowerYBound is a numerical value representing the starting y value
    // range is a numerical value representing the height from the y value the graph renders
    // domain is a numerical value representing the length from the x value the graph renders
    // singleVariableFunction is a function that will return an y value for a given x value.
    constructor(lowerXBound, lowerYBound, range, domain,  singleVariableFunction){
        //The following variables are the graphs limit and should always be numerical
        this.lowerXBound = lowerXBound;
        this.lowerYBound = lowerYBound;
        this.range = range;
        this.domain = domain;
        this.increment = 1;
        this.mathFunction = singleVariableFunction;
    }

    // Creates Data for the current graph function (Graph area and mathmatical function) based on a given increment.
    //
    // increament is a numerical value representing at how often the function is evaluated
    // Returns a trace, apropriatly formated for plotly. 
    getPlotDataForIncrement(increment){
        //TODO: Make mathfunction class, so the function can decide based on the type (IE.. linear) if
        //      it needs more or less data to render properly. 
        this.increment = increment; 
        
        let xData = [];
        let yData = [];

        let upperXBound = this.lowerXBound + this.domain;

        //Populates x and y arrays for the scatter plot trace
        for(let x = this.lowerXBound; x < upperXBound; x = x + increment ){
            xData.push(x);
            yData.push(this.mathFunction(x));
        }

        let trace = {
            x: xData,
            y: yData,
            type: 'scatter',
            name: 'f(x) = x^2'
          };

        return trace;
    }
}