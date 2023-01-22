import React, { useEffect } from "react";
import Transaction from "./Transaction";
import Progress from "./Progress";
function Index() {
  useEffect(() => {
    let yLabels = {};

    // eslint-disable-next-line no-undef
    let line_chart = new Chart(document.getElementById("line_chart"), {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [4, 6, 8, 10, 16, 10, 19, 10, 5, 10, 13, 10],

            borderColor: "#24A0ED",
            fill: false,
          },
          {
            data: [10, 12, 20, 12, 18, 14, 20, 11, 14, 16, 14, 6],
            borderColor: "#89CFF0",
            fill: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                beginAtZero: true,
                callback: function (value, index, values) {
                  return yLabels[value];
                },
              },
            },
          ],
        },
      },
    });
  });
  return (
    <>
      <div className="xl:w-full ml-6 2xl:w-max w-full mt-6 bg-white md:p-4 p-5 rounded-lg shadow">
        <div className="lg:flex justify-between w-full items-center">
          <div className="py-1 md:px-4 flex items-center">
            <p className="text-base font-bold leading-none text-center text-gray-900">
              Sales Report
            </p>
          </div>
          <div className="py-3 md:px-4 flex items-center">
            <div className="px-2 sm:px-3.5 border p-2 border-gray-300 rounded-lg shadow-lg">
              <p className="text-xs font-semibold leading-none text-gray-900">
                12 Months
              </p>
            </div>
            <div className=" sm:px-3.5 ">
              <p className="text-xs font-semibold leading-none text-gray-500">
                6 Months
              </p>
            </div>
            <div className="px-2 sm:px-3.5 ">
              <p className="text-xs font-semibold leading-none text-gray-500">
                30 Days
              </p>
            </div>
            <div className="px-2 sm:px-3.5 ">
              <p className="text-xs font-semibold leading-none text-gray-500">
                7 days
              </p>
            </div>
          </div>

          <div className="flex items-center mt-4 lg:mt-0">
            <div className="flex items-center p-2 rounded-lg bg-gray-100 ml-4">
              <img
                src="https://img.icons8.com/ios/2x/export.png"
                alt=""
                className="w-4 h-4"
              />

              <p className="w-20 text-sm font-semibold leading-none ml-2">
                Export Pdf
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand">
              <div className />
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className />
            </div>
          </div>
          <canvas
            id="line_chart"
            height={528}
            width={1760}
            style={{ display: "block", height: 264, width: 880 }}
            className="chartjs-render-monitor"
          />
        </div>
      </div>
      {/* <Transaction></Transaction> */}
    </>
  );
}

export default Index;
