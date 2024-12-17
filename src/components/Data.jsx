import React, { useEffect, useState  } from 'react'


function Data({data2}) {
    const [ data ,setData] = useState({})
    
    

  useEffect(() => {
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=dc52c5a6478c47ad977103351242711&q=${data2}&aqi=no`)
    .then((response) => response.json())
    .then((weather) => {
        setData(weather)
        console.log(weather)

    })
    
    
  }, [])
  let location = data?.location || {};
  let current = data?.current || "";

  
  
  return (
    <>
    <div className='body'>
        
    
     <div className="container">
        
        <div className="weather">
        <h1>{location?.name}</h1>
        <h2>{location?.country}</h2>
        <p>{current?.temp_c}</p>
        <p>{current?.temp_f}</p>
    
        </div>

         
      </div>
      </div>
    </>
  )
}

export default Data