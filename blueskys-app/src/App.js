import React, { Component } from 'react';
import Main from './Main';
import CurrentForecast from './CurrentForecast';
import ComingDays from './ComingDays';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='weather'>
        <Main>
          <CurrentForecast/>
          <ComingDays/>
        </Main>
      </div>
    );
  }
}

export default App;
