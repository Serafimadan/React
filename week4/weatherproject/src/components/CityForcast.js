import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const CityForcast = ({match}) => {
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        // clear state in preparation for new data
        fetch(`api.openweathermap.org/data/2.5/forecast?q=${match.params.cityId}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(response => { 
            if (response.cod !== 200) {
                setError("City is not found!");
            } else {
                let newData = {
                    name: response.city.name,
                    country: response.city.country,
                    list: response.list.map((item) => ({
                    date: item.dt_txt,
                    temp: Math.round((item.main.temp - 273.15) * 100) / 100,
                })),
            };
            setForecast(newData);
            console.log(newData);
            setLoading(true)
        }
    })
})


    return (
        <div className = 'container-forcast'>
            <div>
                {loading && <div>Loadoing...</div>}
                <div>{error && <p >Please enter a valid city!</p>}</div>
            </div>
            {forecast && (
                <h1>
                    5 day forecast for {forecast.name}, {forecast.country}: 
                </h1>
            )}
            {forecast && (
                <div className="forecastCard">
                    <div style={{ width: "100%", height: 300, fontSize: 9 }}>
                        <ResponsiveContainer>
                            <AreaChart
                                data={forecast.list}
                                margin={{top: 10,right: 30,left: 0,bottom: 0,}}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date"/>
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8"/>
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
            <Link  to="/">
                <button className="buttonBack">Go back</button>
            </Link>
        </div>
    )
}
    
export default CityForcast;