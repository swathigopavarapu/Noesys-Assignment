
import './App.css';
import {  useState } from 'react';
import ReactEcharts from "echarts-for-react";
import { Rnd } from "react-rnd";

function App() {
  const [state,setState] = useState({width:350,height:300})


const style = {

  border: "solid 1px #ddd",
  top:'50px'

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
      <h1>Noesys Assignment</h1>
   <Rnd
    style={style}
    default={{
      x: 0,
      y: 0,
      width: 350,
      height: 300
    }}
  >  
         <ReactEcharts option={option} />
         </Rnd>
    </div>
  );
}

export default App;
