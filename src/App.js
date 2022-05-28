import React, { useEffect, useState } from "react";
import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const App = () => {
  const [number, setNumber] = useState(0);
  const [sequence, setSequence] = useState([]);
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "My chart",
    },
    series: [
      {
        data: sequence,
      },
    ],
  };

  useEffect(() => {
    // Start coding here

    //fresh array every update from input
    let collatzConjectureData = [];

    let num = number;

    //check if input is a positive integer
    let x = parseFloat(num);
    if (!isNaN(num) && (x | 0) === x && num >= 0) {
      num = parseInt(num);
      collatzConjectureData = [];
      getCollatzConjecture(num);
    }

    //recursion function for getting the Collatz Conjecture Data Set
    function getCollatzConjecture(num) {
      //adding to array the value each iteration
      collatzConjectureData = collatzConjectureData.concat(num);

      if (num === 0) return 0;
      else if (num === 1) return 1;
      else if (num % 2 === 0) return getCollatzConjecture(num / 2);
      else return getCollatzConjecture(num * 3 + 1);
    }

    //transfer to sequence
    setSequence(collatzConjectureData);

    // End coding here
  }, [number]);

  return (
    <div className="App">
      <input
        type={"number"}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default App;
