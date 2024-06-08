import React from 'react'
import ReactApexChart from "react-apexcharts";

// export default function BoxPlatform() {
    

//   return (
//     <div className=' shadow-md bg-white rounded-md w-2/6 m-3'>
//     hello
//     </div>
//   )
// }

class BoxPlatform extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        // series: 
        //   [90, 55,],
        series: [
            {
                name: "Series 1",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            }
        ],
        // series: [{
        //     name: "series-a",
        //     data: [13, 12 ],
        //     color: "#EE6D7A", // in case you want to apply series colour directly here
        //     type: "line", // optional - only required when a combo chart (line/area/column) is created
        //     zIndex: 1 // this option only affects line and area charts
        //   }],
        options: {
          chart: {
            type: 'donut',
          },

fill: {
    colors: ['#feba84', '#ba3237']
  },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        <div className=' shadow-md bg-white rounded-md w-2/6 m-3'>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default BoxPlatform;
