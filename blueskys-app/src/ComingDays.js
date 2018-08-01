import React, { Component } from 'react';
import './ComingDays.css';
import PropTypes from 'prop-types';
import axios from 'axios';

class ComingDays extends Component {
    static propTypes = {
        futureCast: PropTypes.number.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            daily: {
                data: []
            },
            isLoading: true
        };
    }

componentDidMount() {
    // static location for Starke, FL
    const lat = '29.9441';
    const lon = '-82.198';
    const url = `/forecast/location/${lat},${lon}`;
    axios.get(url).then(response => {
        this.setState({
            daily: response.data.daily,
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
    const {futureCast} = this.props;
    const data = daily.data[futureCast];
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

        const lo = Math.round(data.temperatureLow);
        const hi = Math.round(data.temperatureHigh);


    return(
        <div className='ComingDays-container'>
            <section className='ComingDays-icon'>
                Imagine an icon
            </section>
            <section className='ComingDays-weather' >
                <h3 className='ComingDays-temps' >
                    Lo: {lo}°F <br/>
                    Hi: {hi}°F
                </h3>
                <p className='ComingDays-summary' >
                    {data.summary}
                </p>
            </section>
            <section className='ComingDays-other' >
                Rain Chance: {data.precipProbability * 100}% <br/>
                Humidity: {data.humidity * 100}% <br/>
                UV: {data.uvIndex}
            </section>
        </div>
    );
}

}

export default ComingDays;