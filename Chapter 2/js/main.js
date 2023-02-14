//initialize function called when the script loads
function initialize(){
	cities();
	debugAjax();
};

//function creating the table with cities and populations
function cities (){
	//define an array of objects of city and population
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

	//create a table element
	var table = document.createElement("table");

	//create a header row element 
	var headerRow = document.createElement("tr");
	
	//append the row element to the table
	table.appendChild(headerRow);

	//create two column headers named City and Population
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>");
	
	//loop through the cities and add a row for each of them 
    cityPop.forEach(function(cityObject){
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend',rowHtml);
	});
	
	//append the table element to the div
	document.querySelector("#mydiv").appendChild(table);
	
	//add the new column to the table
    addColumns(cityPop);
	
	//add the hovering and clicking events to the table
    addEvents();

};


//function to add a new column to the table
function addColumns(cityPop){
	
	//loop to add a new column to each row
	document.querySelectorAll("tr").forEach(function(row,i){
		
		//add the new column header in the first row of the table
		if (i == 0){
			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} 
		//assign the city size based on the value from the population column
		else {
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		} else {
    			citySize = 'Large';
    		};
			
			//add the value to the new column
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
	})
};

//function to add mouse event to the table
function addEvents(){

	//add mouseover event
	document.querySelector("table").addEventListener("mouseover", function(){
		var color = "rgb(";
		//generate random color
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			color += random;

			if (i<2){
				color += ",";
			} else {
				color += ")";
			};
		}
		//style table with the random style
		document.querySelector("table").style.color = color;
	}); 

	//function to add clicking event to the table
	function clickme(){
		alert('Hey, you clicked me!');
	};
	
	document.querySelector("table").addEventListener("click", clickme);
};


//define debugCallback function
function debugCallback(response){
	//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(response))
};

//define debugAjax function
function debugAjax(){
	
	//var myData;
	
	//get the data from the geojson file
	fetch('data/MegaCities.geojson')
        .then(function(response){
			//convert the data to json format
            return response.json();
        }) 
        .then(debugCallback)
		

	//document.querySelector("#mydiv").insertAdjacentHTML('beforeend' '<br>GeoJSON data:<br>' + JSON.stringify(myData))
};

//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))

//call the initialize function when the document has loaded
document.addEventListener('DOMContentLoaded',initialize);