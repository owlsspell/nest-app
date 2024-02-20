import React from 'react'
import ReactECharts from 'echarts-for-react';
import { graphic } from 'echarts';

export default function BarChart() {
    const option = {
        title: {
            text: "HEALTH INDEX",
            textStyle: {
                fontSize: 14
            },
        },
        tooltip: {
            trigger: 'axis',
            formatter(params) {
                const param = params[0]
                return `${param.marker}${param.name}`;
            },
        },
        // height: '100%',
        grid: {
            bottom: '10%',
            left: 0,
            right: 0,
        },
        xAxis: {
            type: 'category',
            data: ['June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],

        },
        yAxis: {
            show: false,
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                itemStyle: {
                    borderRadius: [10, 10, 0, 0],
                    width: 5
                },
                showSymbol: false,
                barWidth: '20%',
                z: 2,

            },
            {
                data: [120, 200, 150, 80, 70, 100, 130].map(item => item + 20),
                // data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                z: 1,
                lineStyle: {
                    width: 0,
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 1,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#2823f9'
                        },
                        {
                            offset: 1,
                            color: '#05042E'
                        }])
                },
                smooth: true

            }
        ]
    }
    return (
        <ReactECharts option={option}
            className='relative h-full' />
    )
}
