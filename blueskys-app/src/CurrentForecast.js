import React, { Component } from 'react';
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
    const starkeLat = '29.9441';
    const starkeLon = '-82.1098';
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
            <section />
        </div>
    );
}

}

export default CurrentForecast;