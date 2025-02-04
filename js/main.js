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
        if (i === 0) { // Header row
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize;
            // Determine city size category based on population
            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';
            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }
            // Append a new cell with the city size
            row.insertAdjacentHTML('beforeend', `<td>${citySize}</td>`);
        }
    });
}

//Function to add events to the table for hover and click interactions
function addEvents() {
    document.querySelector("table").addEventListener("mouseover", function() {
        var color = "rgb(";
        // Generate a random color
        for (var i = 0; i < 3; i++) {
            var random = Math.round(Math.random() * 255);
            color += random;
            if (i < 2) {
                color += ",";
            } else {
                color += ")";
            }
        }
        //Apply the randomly generated color to the table
        this.style.backgroundColor = color;
    });

    //Function for click
    function clickme() {
        alert('Hey, you clicked me! Have a great day!');
    }

    //Add click event to the table
    document.querySelector("table").addEventListener("click", clickme);
}

//Function to fetch GeoJSON data and process it
function debugAjax() {
    fetch("data/MegaCities.geojson") //GeoJSON file
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); //Convert response to JSON
        })
        .then(myData => {
            debugCallback(myData); //callback function
        })
        .catch(error => {
            console.error("Error fetching GeoJSON:", error);
        });
}

//Function to handle GeoJSON data and display it
function debugCallback(myData) {
    console.log("GeoJSON Data:", myData); //Log GeoJSON data

    //Display the GeoJSON data inside #mydiv
    document.querySelector("#mydiv").insertAdjacentHTML(
        'beforeend',
        '<br><strong>GeoJSON Data:</strong><br><pre>' + JSON.stringify(myData, null, 2) + '</pre>'
    );
}

//call functions to ensure script runs correctly
addColumns(cityPop);
addEvents();
debugAjax(); // Fetch and display GeoJSON data
