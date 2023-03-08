// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planted.star, planet.distance, planet.moons, planet.image);
   })

   let itemList = document.getElementById("faultyItems"); 
   itemList.style.visibility = "hidden";
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
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]");
        let fuel = document.querySelector("input[name=fuelLevel]");
        let cargo = document.querySelector("input[name=cargoLevel]");
        let actualPilot = pilot.value;
        let actualCopilot = copilot.value;
        let actualFuel = fuel.value;
        let actualCargo = cargo.value;

        formSubmission(document, itemList, actualPilot, actualCopilot, actualFuel, actualCargo);
        //function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  });
});


 