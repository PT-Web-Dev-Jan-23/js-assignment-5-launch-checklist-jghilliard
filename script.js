// Write your JavaScript code here!


//commenting out the following line makes my page work, but the code fails the automated testing.

//const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

//window.addEventListener("load", function() {
document.addEventListener("DOMContentLoaded", function(){
    //let itemList  = screen.getByTestId(container, "faultyItems");
    let itemList = document.getElementById("faultyItems"); 
    itemList.style.visibility = 'hidden';
    //document.getElementById("faultyItems")[0].style.visibility = "hidden";
    

    //console.log("Started");

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       //console.log(listedPlanets);
   }).then(function () {
      // console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })


   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
        event.preventDefault();
        // form.addEventListener("submit", function(event) {
        //     let usernameInput = document.querySelector("input[name=username]");
        //     let teamName = document.querySelector("input[name=team]");
        //     if (usernameInput.value === "" || teamName.value === "") {
        //        alert("All fields are required!");
        //        // stop the form submission
        //        event.preventDefault();
        //itemList.style.visibility = "hidden";
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]");
        let fuel = document.querySelector("input[name=fuelLevel]");
        let cargo = document.querySelector("input[name=cargoMass]");
        let actualPilot = pilot.value;
        let actualCopilot = copilot.value;
        let actualFuel = fuel.value;
        let actualCargo = cargo.value;

        formSubmission(document, itemList, actualPilot, actualCopilot, actualFuel, actualCargo);
        //function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  });
});


 