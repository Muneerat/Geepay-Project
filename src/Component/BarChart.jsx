import React, { Component } from "react";
import Chart from "react-apexcharts"; 
import ReactApexChart from "react-apexcharts";

// class BarChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar",
//           width: "10%",
//           height: '400px',
//           offsetX: '10%',
//           offsetY: '100%',
//         },
//         plotOptions: {
//           bar: {
//               borderRadius: 20,
//               borderRadiusApplication: 'top',
//               columnWidth: '70%',
//               barHeight: '23%',
//               colors: {
//                   ranges: [{
//                       from: '#f8debd',
//                       to: '#f8debd',
//                       color: '#f8debd'
//                   }],
//                   backgroundBarOpacity: 10,
//               },
//               dataLabels: {
//                   position: 'none',
//               }
//           }
//       },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
//         },
//         fill: {
//           colors: ['#F8CBA6'] // try this for bar color
//         }
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50, 49, 60, 70, 91]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="app w-5/6">
//         <div className="row">
//           <div className="mixed-chart rounded-md w-5/6">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//               className=""
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default BarChart;

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          name: '',
          data: [
            {
              x: 'Jan',
              y: 1200,
            },
            {
              x: 'Feb',
              y: 2000,
            },
            {
              x: 'Mar',
              y: 680,
            },
            {
              x: 'Apr',
              y: 2900,
            },
            {
              x: 'May',
              y: 900,
            },
            {
              x: 'Jun',
              y: 4500,
            },
            {
              x: 'Jul',
              y: 900,
            },
            {
              x: 'Aug',
              y: 2100,
            },
            {
              x: 'Sep',
              y: 3400,
            },
            {
              x: 'Oct',
              y: 600,
            },
            {
              x: 'Nov',
              y: 300,
            },
            {
              x: 'Dec',
              y: 2600,
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            columnWidth: '40%',
            borderRadius: 10,
            borderRadiusApplication: 'top',
            columnWidth: '50%',
          }
        },
        colors: ['#FEAE6F'],
        dataLabels: {
          enabled: false
        },
        legend: {
     
        }
      },
    
    
    };
  }



  render() {
    return (
      <div className="bg-white shadow-md m-5 p-6 w-2/4 rounded-md border-slate-100 border">
      <div className="flex justify-between">
        <div>Activity Growth</div>
        <div>filter</div>
      </div>
        <div id="chart" className="">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={360} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}


export default BarChart;
