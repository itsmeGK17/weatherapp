import React, { useEffect, useState } from 'react'
// import "axios"
import "./Weather.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CloudIcon from '@mui/icons-material/Cloud';
import WaterIcon from '@mui/icons-material/Water';



const Weather = () => {
    const [search, setSearch] = useState("")
    const [city, setCity] = useState()
    const [store, setStore] = useState("")



    const MY_API_KEY = 'f870cc47de934a5104128ce4c623ff3c';
    const apif = "https://api.openweathermap.org/data/2.5/weather?q="


    useEffect(() => {
        const fetchData = async () => {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric &appid=${MY_API_KEY}`;
            let data = await fetch(url)
            // console.log("aaa", data);
            let response = await data?.json()
            // console.log("ff", response);
            setCity(response.main)
            // setStore(response.sys)
        }

        fetchData()

    }, [search])

    // const arrObj = Object.values(city)
    // console.log("call", arrObj);

    //   for (const i  in store ){
    //    console.log(store)
    //   }
    return (

        <>
            <div className='main-div' >
                <input
                    className='search-box'

                    type='search'
                    value={search}
                    placeholder='Search State...'
                    onChange={(e) => setSearch(e.target.value)} />
{/* 
                   {
                    !store ?(
                        <p></p>
                    ):(
                        <div>

                            <div className='second'>
                            <h4>{search}</h4>
                            </div>

                            <div>
                                <h4> County: {store.country}</h4>
                                <h4> Sunrise: {store.sunrise}</h4>
                                <h4>Sunset: {store.sunset}</h4>
                                <h4>Timezone: {store.timezone}</h4>
                            </div>
                        </div>
                    )
                  } 
 */}

              
                {
                    !city ? (
                        <p></p>
                    ) : (
                        <div>
                              {/* <CloudIcon className='cloudicon' />    */}
                            <div className='name-search' >
                                <h4>  <LocationOnIcon /> {search}  </h4>

                            </div>
                            <div className='detail-temp'>
                                <h4>Temperature={city.temp}Cel</h4>
                                <h4> Humidity={city.humidity}% <WaterIcon className='humidity'/></h4>
                            </div>
                            <div className='city-min'>
                                <h4>Min={city.temp_min}Cel | Max={city.temp_max}Cel </h4>
                            </div>
                        </div>

                    )
                }

            </div >
        </>
    )

}

export default Weather