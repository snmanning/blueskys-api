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

}

render() {
    const {isLoading, error, currently} = {
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
            <section
        </div>
    );
}

}

export default CurrentForecast;
