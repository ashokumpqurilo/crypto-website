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

const WeeklyGraph = () => {
  const dates = ['Feb 21', 'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27'];
  
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
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: (context) => {
            return context.text === 'Successes' ? 'rectRot' : 'rect';
          },
          boxWidth: 16,
          boxHeight: 16,
          padding: 20,
          color: '#666',
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Last week',
        align: 'start',
        padding: {
          bottom: 30,
          top: 10
        },
        font: {
          size: 14,
          weight: 'normal'
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          }
        },
        padding: 10
      },
      y: {
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.2,
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        padding: 10
      }
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 4,
        hoverRadius: 6
      }
    }
  };

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Successes',
        data: Array(7).fill(0),
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#3B82F6',
        pointBorderWidth: 2,
      },
      {
        label: 'Failures',
        data: Array(7).fill(0),
        borderColor: '#F87171',
        backgroundColor: '#F87171',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#F87171',
        pointBorderWidth: 2,
      }
    ]
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm h-[400px]">
      <div className="w-full h-full p-4">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default WeeklyGraph;
