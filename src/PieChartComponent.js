import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import '../src/piechart.css';

const PieChartComponent = ({data}) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/workhours/'); // Replace with the actual API endpoint URL
        const data = await response.json();
        setChartData(processChartData(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  const processChartData = (data) => {
    // Process the data from the API response into the format expected by Chart.js
    // In this case, the data is already in the correct format for the Pie chart.
    // You can directly pass it to the chart.

    if (data && data.length > 0) {
      const labels = data.map((item) => item.projectname);
      const values = data.map((item) => item.total_workhours);

      return {
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }

    return null;
  };

  return (
    <div className="pie-chart-size">
      <h1>Pie Chart Example</h1>
      {chartData ? <Pie data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default PieChartComponent;




// import React, { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';

// const PieChartComponent = ({ data }) => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     setChartData(processChartData(data));
//   }, [data]);

//   const processChartData = (data) => {
//     if (data && data.length > 0) {
//       const labels = data.map((item) => item.projectname);
//       const values = data.map((item) => item.total_workhours);

//       return {
//         labels: labels,
//         datasets: [
//           {
//             data: values,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.6)',
//               'rgba(54, 162, 235, 0.6)',
//               'rgba(255, 206, 86, 0.6)',
//               'rgba(75, 192, 192, 0.6)',
//               'rgba(153, 102, 255, 0.6)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       };
//     }

//     return null;
//   };

//   return (
//     <div>
//       <h1>Pie Chart Example</h1>
//       {chartData ? <Pie data={chartData} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default PieChartComponent;