import React, { useEffect, useState } from 'react'
function Weather() {
    const API_KEY = '93790554078000c50e8aa42ec7aed343';

    const [weatherData,setWeatherData] = useState(false);

    const search = async ()=>{
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Koramangala&units=metric&appid=${API_KEY}`
  
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        console.log(data.weather[0].icon);


        setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: data.weather[0].icon ,
            description: data.weather[0].main,

        });
      } catch (error) {
        
      }
    }
  
    useEffect(()=>{
      search("")
    },[])
  return (
    // <div>
    //   Weather
    //   <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather" srcset="" />
    // </div>
    <div className="border-2 border-black rounded-3xl  shadow-lg bg-gray-800  p-6 mr-10 flex  text-white">
        <div className='justify-center'>
        <img className="" src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="Weather icon" />
            <h3 className='ml-6 font-bold'>{weatherData.description}</h3>
        </div>
        <div className="ml-20 px-6 py-4 text-white">
            <div className="font-bold text-xl mb-2">{weatherData.location}</div>
            {/* <p className=" text-base">{weatherData.description}</p> */}
            <p className=" text-base">Temperature: {weatherData.temperature}°C</p>
            <p className=" text-base">Humidity: {weatherData.humidity}%</p>
            <p className=" text-base">Wind Speed: {weatherData.windSpeed} Km/h</p>
        </div>
    </div>
  )
}

export default Weather
