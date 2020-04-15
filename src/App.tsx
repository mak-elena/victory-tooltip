import React from 'react';
import './App.css';
import { VictoryChart, VictoryBar, VictoryTooltip } from 'victory';

function App() {
  return (
    <div className="App">
      <VictoryChart
        domain={{ x: [0, 11], y: [-10, 10] }}
      >
        <VictoryBar
          labelComponent={<VictoryTooltip />}
          data={[
            { x: 2, y: 5, label: "right-side-up" },
            { x: 4, y: -6, label: "upside-down" },
            { x: 6, y: 4, label: "tiny" },
            { x: 8, y: -5, label: "or a little \n BIGGER" },
            { x: 10, y: 7, label: "automatically" }
          ]}
          style={{
            data: { fill: "tomato", width: 20 }
          }}
        />
      </VictoryChart>
    </div>
  );
}

export default App;
