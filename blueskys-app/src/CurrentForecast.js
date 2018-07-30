import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import 'CurrentForecast.css';
import axios from 'axios';

class CurrentForecast extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currently: {},
            isLoading: true
        };
    }

componentDidMount() {
    // static location for Starke, FL
    const lat = '29.9441';
    const lon = '-82.1098';
    const url = `/forecast/location/${lat},${lon}`;
    axios.get(url).then(response => {
        this.setState({
            currently: response.data,
            isLoading: false,
        });
    }).catch((error) => {
            this.setState({
                isLoading: true,
                error: error,
            });
        });
}

render() {
    const {isLoading, error, currently} = this.state;
    if(error) {
        return (
            <p>
                Today's information is not available at this time. 
                Please check again later.
            </p>
        );
    }
    if(isLoading) {
        return (
            <h1>
                Retrieving the current conditions...
                {/* <i class="far fa-sun fa-spin"></i> */}
            </h1>
        );
    }
    return(
        <div className='CurrentForecast-container' >
            <div className='CurrentForecast-weather' >
                <section className='CurrentForecast-local' >
                    <h2 className='CurrentForecast-city' >
                        Starke, FL
                    </h2>
                    <p className='CurrrentForecast-summary' >
                        {currently.icon}
                    </p>
                </section>
                <section className='CurrentForecast-icon' >
                    <WeatherIcons name="{cucrrently.icon}" size="2x" />
                </section>
                <section className='CurrentForecast-temp' >
                    <h1 className='CurrentForecast-actual' >
                        {currently.temperature}F
                    </h1>
                    <p className='CurrentForecast-apparent' >
                       Feels Like: {currently.apparentTemperature}F
                    </p>
                </section>
                <section className='CurrentForecast-other' >
                    <p className='CurrentForecast-rainchance' >
                        Chance of Rain: {currently.precipProbability * 100}%
                    </p>
                    <p className='CurrentForecast-wind' >
                        Wind Speed: {currently.windSpeed} mph
                    </p>
                    <p className='CurrentForecast-humidity' >
                        Humidity: {currently.humidity * 100}%
                    </p>
                    <p className='CurrentForecast-uv' >
                        UV: {currently.uvIndex}
                    </p>
                </section>
            </div>
        </div>
    );
}

}

export default CurrentForecast;
