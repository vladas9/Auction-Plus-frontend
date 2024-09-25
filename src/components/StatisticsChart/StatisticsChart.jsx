import React from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController, BarController, Title, Tooltip, Legend } from 'chart.js';
import { Chart as ChartJS } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController, BarController, Title, Tooltip, Legend);

const StatisticsChart = ({ labels, bidsPerDay, maxBidPerDay }) => {
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Lot Bidding Statistics',
            },
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                max: (+bidsPerDay + 0.3*bidsPerDay), 
                title: {
                    display: true,
                    text: 'Bids per day',
                },
            },
            y1: {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Max bid per day',
                },
                grid: {
                    drawOnChartArea: false, 
                },
            },
        },
    };
    
    const data = {
        labels: labels,
        datasets: [
            {
                type: 'line',
                label: 'Max bid per day',
                borderColor: 'rgba(200, 224, 152)',
                backgroundColor: 'rgba(200, 224, 152, 0.5)',
                data: maxBidPerDay,
                fill: false,
                yAxisID: 'y1',
                order: 1, 
            },
            {
                type: 'bar',
                label: 'Bids per day',
                backgroundColor: 'rgba(14, 103, 175)',
                data: bidsPerDay,
                borderColor: 'rgba(14, 103, 175)',
                borderWidth: 0,
                yAxisID: 'y',
                order: 2,
            },
        ],
    };
    
    

    return <ChartJS type='bar' data={data} options={options} />;
};

export default StatisticsChart;
