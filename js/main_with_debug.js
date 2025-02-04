//Array of city names and populations
var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];

//Function to add a new column for city size based on population
function addColumns(cityPop) {
    document.querySelectorAll("tr").forEach(function(row, i) {

        if (i === 0) { //Header row
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize;

            //Size category based on population
            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';
            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }

            //Append a new cell with the city size
            row.insertAdjacentHTML('beforeend', `<td>${citySize}</td>`);
        }
    });
}

//Function to add events to the table for hover and click interactions
function addEvents() {
    document.querySelector("table").addEventListener("mouseover", function() {
        var color = "rgb(";

        //Generate a random color
        for (var i = 0; i < 3; i++) {
            var random = Math.round(Math.random() * 255);
            color += random; 

            if (i < 2) {
                color += ",";
            } else {
                color += ")";
            }
        }

        //Apply randomly generated color to the table
        this.style.backgroundColor = color;
    });

    //Function for click
    function clickme() {
        alert('Hey, you clicked me! Have a great day!');
    }

    //Add click event to the table
    document.querySelector("table").addEventListener("click", clickme);
}

//Call functions to make sure script runs correctly
addColumns(cityPop);
addEvents();
