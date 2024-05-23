import React, { Component } from "react";
import Chart from "react-apexcharts"; 

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          width: "10%",
          height: '400px',
          offsetX: '10%',
          offsetY: '100%',
        },
        plotOptions: {
          bar: {
              borderRadius: 20,
              borderRadiusApplication: 'top',
              columnWidth: '70%',
              barHeight: '23%',
              colors: {
                  ranges: [{
                      from: '#f8debd',
                      to: '#f8debd',
                      color: '#f8debd'
                  }],
                  backgroundBarOpacity: 10,
              },
              dataLabels: {
                  position: 'none',
              }
          }
      },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        fill: {
          colors: ['#F8CBA6'] // try this for bar color
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app w-5/6">
        <div className="row">
          <div className="mixed-chart rounded-md w-5/6">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
              className=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;