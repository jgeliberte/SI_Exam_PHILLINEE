import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const App = () => {
  const [number, setNumber] = useState(0);
  const [sequence, setSequence] = useState([]);
  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: sequence
      }
    ]
  };

  useEffect(() => {
    // Start coding here

    // End coding here
  }, [number]);

  return (
    <div className="App">
      <input type={"number"} onChange={(e)=> {
        setNumber(e.target.value)
      }}/>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default App;
