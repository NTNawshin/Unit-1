function debugCallback(response){
	//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(response))
};

function debugAjax(){
	
	//var myData;
	
	fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(debugCallback)
		

	//document.querySelector("#mydiv").insertAdjacentHTML('beforeend' '<br>GeoJSON data:<br>' + JSON.stringify(myData))
};

//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
window.onload = debugAjax();