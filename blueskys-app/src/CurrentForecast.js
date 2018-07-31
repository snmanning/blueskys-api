import React, { Component } from 'react';
import './CurrentForecast.css';
import axios from 'axios';

class CurrentForecast extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currently: {},
            // icons: "",
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
            currently: response.data.currently,
            isLoading: false,
        });
    }).catch((error) => {
            this.setState({
                isLoading: true,
                error: error,
            });
        });
}

// skycons() {
//     const icons = new skycons({
//         'color': '#F8C471',
//         'resizeClear': true
//     }),
//     list = [
//         'clear-day',
//         'clear-night',
//         'partly-cloudy-day',
//         'partly-cloudy-night',
//         'cloudy',
//         'rain',
//         'sleet',
//         'snow',
//         'wind',
//         'fog'
//     ];
    
//     icons.play();
// }

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

    const temp = Math.round(currently.temperature);
    const apparent = Math.round(currently.apparentTemperature);
    const wind = Math.round(currently.windSpeed);

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
                    {/* <canvas id='{this.skycons}' width='128' height='128' />  */}
                </section>
                <section className='CurrentForecast-temp' >
                    <h1 className='CurrentForecast-actual' >
                        {temp}°F
                    </h1>
                    <p className='CurrentForecast-apparent' >
                       Feels Like: {apparent}°F
                    </p>
                </section>
                <section className='CurrentForecast-other' >
                    Chance of Rain: {currently.precipProbability * 100}% <br/>
                    Wind Speed: {wind} mph <br/>
                    Humidity: {currently.humidity * 100}% <br/>
                    UV: {currently.uvIndex}
                </section>
            </div>
        </div>
    );
}

}

export default CurrentForecast;
