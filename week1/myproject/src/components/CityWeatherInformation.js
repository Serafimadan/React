import React from 'react';

const CityWeatherInformation = ({ cityName, countryName, weatherType,  weatherDescription, tempMin, tempMax, locationLat, locationLon }) => {
    
    return  ( 
        <li className = 'city-element'> 
            <div className = 'information-container'>
                <h2>{cityName}, {countryName}</h2>
                <div className = 'weather-inform'> 
                    <p className = 'weather-name'>{weatherType}</p>
                    <p className = 'weather-descript'>{weatherDescription}</p>
                </div>
                <p>min temp: {tempMin}</p>
                <p>max temp: {tempMax}</p>
                <p>Location: {locationLat}, {locationLon}</p>
            </div>
        </li>
    );
}
export default CityWeatherInformation;