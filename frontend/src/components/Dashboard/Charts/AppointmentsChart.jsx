import React from 'react'
import ReactECharts from 'echarts-for-react';
import { graphic } from 'echarts';

export default function AppointmentsChart() {

    const option = {
        title: {
            text: "OVERALL APPOINTMENTS",
            textStyle: {
                fontSize: 14
            },
        },
        legend: {
            selectedMode: false,
            bottom: 0,
            orient: 'horizontal',
            icon: 'circle',
            left: 'center',
            itemHeight: 10,
            itemWidth: 10,
            textStyle: {
                fontSize: '10px',
                fontWeight: 'bold',
            },
        },
        color: [
            '#100DB1',
            '#F80D38',
            '#FECA57',
            '#763CEF',
            "#2B88D9"
        ],
        height: '60%',
        tooltip: {
            trigger: 'axis',
        },
        left: 0,
        xAxis: {
            type: 'category',
            data: ['April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],

        },
        yAxis: {
            show: false,
        },
        series: [
            {
                data: [12, 20, 15, 8, 7, 11, 13],
                type: 'bar',
                stack: 'a',
                name: 'EMERGENCY',
            },
            {
                data: [10, 46, 64, '-', 0, '-', 0],
                type: 'bar',
                stack: 'a',
                name: 'EXAMINATION',
            },
            {
                data: [30, '-', 0, 20, 10, '-', 0, 2, 3],
                type: 'bar',
                stack: 'a',
                name: 'CONSULTATION',
            },
            {
                data: [10, 5, 5, 80, 3, 32, 10, 14, 8],
                type: 'bar',
                stack: 'a',
                name: 'ROUTINE CHECKUP',
            },
            {
                data: [12, '-', 27, 3, 14, '-', 2, 3, 5],
                type: 'bar',
                stack: 'a',
                name: 'SICK VISIT',
            },

        ]
    }
    return (
        <div className="h-96 md:h-72 p-2">
            <ReactECharts option={option}
                className='relative h-full' style={{ height: '100%' }} />
        </div>
    )
}
