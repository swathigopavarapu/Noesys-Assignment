
import './App.css';
import {  useState } from 'react';
import ReactEcharts from "echarts-for-react";
import { Rnd } from "react-rnd";

function App() {
  const [state,setState] = useState({width:350,height:300})


const style = {
  border: "solid 1px #ddd",  
};
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };
  
  return (
    <div className="App">
   <Rnd
    style={style}
    minWidth='350px'
    minHeight='320px'
    bounds='window'
    default={{
      x: 0,
      y: 0,
      width: 350,
      height: 320,
    }}
  > 
         <ReactEcharts 
         option={option} />
         </Rnd>
    </div>
  );
}

export default App;
