function jsAjax(){
    // Step 1: Create the data request 
    //var request = new Request('data/map.geojson');
    //Step 2: define Fetch parameters 
    //var init = {
        //method: 'GET'
    //}
    //Step 3: use Fetch to retrieve the data
    fetch('data/map.geojson').then(conversion).then(callback)

};

//define conversion callback function
function conversion(response){
    //convert data to usable form
    return response.json();
};
  
  //define callback function
function callback(response){
    //tasks using the data go here
    console.log(JSON.stringify(response));

};

window.onload = jsAjax();