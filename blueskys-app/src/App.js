import React, { Component } from 'react';
import Main from './Main';
import Heading fro './Heading';
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

//   componentDidMount() {
//     // static location for Starke, FL
//     const lat = '29.9441';
//     const lon = '-82.198';
//     const url = `/forecast/location/${lat},${lon}`;
//     axios.get(url).then(response => {
//         this.setState({
//             futureCast: response.data.daily,
//             isLoading: false,
//         });
//     }).catch((error) => {
//         this.setState({
//             isLoading: true,
//             error: error,
//         });
//     });
// }

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
