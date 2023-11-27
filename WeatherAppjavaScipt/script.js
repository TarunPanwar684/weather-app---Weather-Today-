// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'add your  key here',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(Response=>Response.json())
.then(Response=>{

console.log(Response);
cloud_pct.innerHTML=Response.cloud_pct
feels_like.innerHTML=Response.feels_like
temp.innerHTML=Response.temp
humidity.innerHTML=Response.humidity
max_temp.innerHTML=Response.max_temp
min_temp.innerHTML=Response.min_temp
sunrise.innerHTML=Response.sunrise
wind_degrees.innerHTML=Response.wind_degrees
wind_speed.innerHTML=Response.wind_speed

}
)
.catch(err=>console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value);
})
getWeather('Delhi');
dropdownitem1.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather('Delhi');
})
dropdownitem2.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather('Mumbai');
})
dropdownitem3.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather('Bangalore');
})
const cityNames=['cityName1','cityName2','cityName3','cityName4'];
const weatherinfo=['cloud_pct','feels_like','humidity','max_temp','min_temp','sunrise','wind_degrees','wind_speed'];
const apiInfo=[cloud_pct,feels_like,humidity,max_temp,min_temp,sunrise,wind_degrees,wind_speed];

const getotherWeather=(city,i)=>{
	let citynameele=document.getElementById(cityNames[i-1]);
	citynameele.innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
	.then(Response=>Response.json())
	.then(Response=>{
	   
	console.log(Response);

    for (let index = 0; index < weatherinfo.length; index++) {
		let element = weatherinfo[index] +i;
		let value1=document.getElementById(element)
		 value1.innerHTML=Response[weatherinfo[index]]
		
	}
	
	}
	)
	.catch(err=>console.error(err));
	}
    getotherWeather('Lucknow',1);
	getotherWeather('Kolkata',2);
	getotherWeather('Jaipur',3);
	getotherWeather('Agra',4);
