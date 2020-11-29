

const CityWeatherInformation = ({weatherInfo, deleteCard, index, loading }) => {
    const {cod, name, sys, weather, main, coord } = weatherInfo;
    function converterTemperature(valNum) {
        let Celsius = valNum -273.15;
        return Math.round(Celsius);
    }
    return (
        <div >
            
            {loading && <div>Loadoing...</div>}
            {cod === 200 ?           
                <div className = 'city-element'> 
                    <button className = 'removeButton' onClick = {() => deleteCard(index)}>X</button>
                    <div className = 'information-container'>
                        <h2>{name}, {sys.country}</h2>
                        <div className = 'weather-inform'> 
                            <p className = 'weather-name'>{weather[0].main}</p>
                            <p className = 'weather-descript'>{weather[0].description}</p>
                        </div>
                        <p>min temp: {converterTemperature(main.temp_min)}</p>
                        <p>max temp: {converterTemperature(main.temp_max)}</p>
                        <p>Location: {coord.lat}, {coord.lon}</p>
                    </div>
                    
                </div>
            : null} 
        </div>
    )
}
    
export default CityWeatherInformation;