import React, { useEffect, useState } from 'react'

function Weather() {

    const [inputWeather, setInputWeather] = useState({});
    const [ city, setCity] = useState("")

    const getData = () => {
        const city = document.querySelector("input").value
        
           fetch(`http://api.weatherapi.com/v1/current.json?key=dc52c5a6478c47ad977103351242711&q=${city}&aqi=no`)
           .then((response) => response.json())
           .then((weather) => {setInputWeather(weather)
           console.log(weather)
           document.querySelector("#weather").innerHTML = `
           <div className="image">
           <img src=${inputWeather?.current?.condition?.icon}  alt="" />
           </div>
           <div className="data">
           <h2>${inputWeather?.location?.name} </h2>
           <p>${inputWeather?.location?.country}</p>
           <p>${inputWeather?.current?.temp_c}°C</p>
           </div>
           `}
           )
        
     }

    const handleChange = (e) =>{
        setCity(e.target.value)
      }
  return (
    <>
    <div id="container">
    <label htmlFor="input">Enter City<input onChange={handleChange} value={city} type="text"/>  
        </label>
        
        <button onClick={getData} type="submit">Get Weather</button>
    <div id='weather'>
       <div className="image">

       </div>
          
          <div className="data">
            
          </div>
         
        </div>
    </div>
    </>
  )
}

export default Weather