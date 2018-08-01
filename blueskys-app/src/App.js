import React, { Component } from 'react';
import Main from './Main';
import Heading from './Heading';
import CurrentForecast from './CurrentForecast';
import ComingDaysList from './ComingDaysList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      futureCast: [0, 1, 2],
    }
  }

  render() {
    return (
      <div className='weather'>
        <Heading title='Current Conditions' />
        <Main>
          <CurrentForecast/>
        </Main>
        <Heading title='Later this Week' />
        <Main>
          <ComingDaysList futureCast={this.state.futureCast} />
        </Main>
      </div>
    );
  }
}

export default App;
