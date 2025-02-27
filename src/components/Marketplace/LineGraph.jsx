import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  // Generate 24 hours of data points
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Last 24 hours',
        color: '#fff',
        padding: { bottom: 20 }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff'
        },
        padding: 10
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff'
        },
        min: 0,
        beginAtZero: true,
        padding: 10
      }
    },
    elements: {
      line: {
        borderColor: '#fff',
        tension: 0.4
      },
      point: {
        radius: 4,
        borderColor: '#fff',
        backgroundColor: '#fff'
      }
    }
  };

  const data = {
    labels: hours,
    datasets: [
      {
        data: Array(24).fill(0), // Replace with actual data values
        borderColor: '#fff',
        backgroundColor: '#fff',
      }
    ]
  };

  return (
    <div className="w-full rounded-lg h-[500px]" style={{ backgroundColor: '#0165BA' }}>
      <div className="w-full h-full p-4">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineGraph;
