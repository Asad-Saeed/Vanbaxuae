


import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { API } from '../../API';


function convertIntoJson(chartdata1String){
  // Wrap the string in square brackets to create a valid JSON array
const jsonArrayString = `[${chartdata1String}]`;

// Replace the curly braces with double quotes to make it valid JSON format
const validJsonArrayString = jsonArrayString.replace(/([{,])(\w+):/g, '$1"$2":');

// Parse the valid JSON array string into a JavaScript array
const chartdataArray = JSON.parse(validJsonArrayString);
return chartdataArray;

}

const ApexChart = () => {
const[chart , setChart]=useState();

console.log("Data_Chart",chart);
const Chart_API = async()=>{
    try{
    let res = await API.get(`/GetChartData?coin_name=HF`);
    console.log("res",res);

    let totaldata=res.data.data[0].chartdata1 + res.data.data[0].chartdata2 + res.data.data[0].chartdata3
    + res.data.data[0].chartdata4;

   const chartdataArray= convertIntoJson(totaldata)
        setChart(chartdataArray)
    }catch(e){
console.log("Something Error in Chart API",e);
    }
}



useEffect(()=>{
  Chart_API();
},[])


useEffect(()=>{
  setInterval(() => {
    Chart_API();
  }, 30000);
},[])

  const series = [
    {
   data:chart
       
  },
  ];

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  console.log("ChatData==> series spltarray",series);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="candlestick" height={500}/>
    </div>
  );
};

export default ApexChart;