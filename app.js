window.onload = function () {
	getCovidStats();
}

function showdiv(){
    document.getElementById('form').style.display = "";
    document.getElementById('dpdn').style.display = "none";  
}
function showdiv1(){
    document.getElementById('form').style.display = "";
    document.getElementById('dpdn').style.display = "none";
    document.getElementById('delcountry').style.display = "";  
}
function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/147')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;

		document.getElementById('population').innerHTML = population.toLocaleString('en');
		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}
