
function getEven(data) {
    let evenData = [];
    for (let i = 0; i < data.length; i++){
        if (i%2){
            evenData.push(data[i]);
        }
    }
    return evenData;
}

function getOdd(data){
    let oddData = [];
    for (let i = 0; i < data.length; i++){
        if (i%2 != 0){
            oddData.push(data[i]);
        }
    }
    return oddData;
}

// Graph is a chart instance and relies on app.html's chart div being loaded in order to add the
// appropriate GUI elements. 
class dataset {

    //Creates a graph with default parameters
    //TODO: Allow for user updates to parameters.
    constructor(){
  
        const query_values = new URLSearchParams(window.location.search);
        //Initialize a function example.
        let dataset_name = query_values.get("dataset-name");
        let  data = query_values.get("data").split(',');
        
        this.tracey = {
            x: [1, 2, 3, 4],
            y: [16, 5, 11, 9],
            type: 'scatter',
            name: 'generic data'
        };

        if(dataset_name){
            this.tracey = {
                x: getEven(data),
                y: getOdd(data),
                type: 'scatter',
                name: dataset_name
            };
        }
    }

    get trace(){
        return this.tracey;
    }

    };
    
    //TODO: Write a sanatize output function that reduces strings to only what is supposed to be there.
