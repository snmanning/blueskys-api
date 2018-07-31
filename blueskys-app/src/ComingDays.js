import React, { Component } from 'react';
import './ComingDays.css';
import axios from 'axios';

class ComingDays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daily: [],
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
            daily: response.data.daily.data,
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
    const {isLoading, error, daily} = this.state;
        if(error) {
            return (
                <p>
                    The future forecast is currently unavailable.
                    Please try again later.
                </p>
            );
        }
        if(isLoading) {
            return (
                <h2>
                    Gazing into the crystal ball...
                </h2>
            );
        }

        const lo = Math.round(daily.data.temperatureLow);
        const hi = Math.round(daily.datta.temperatureHigh);

    return(
        <div className='ComingDays-container'>
            <section className='ComingDays-weather' >
                Lo: {lo}°F <br/>
                Hi: {hi}°F
            </section>
        </div>
    );
}

}

export default ComingDays;