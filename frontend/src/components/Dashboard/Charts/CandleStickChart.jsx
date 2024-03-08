import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react';

export default function CandleStickChart({ data }) {

    const maximumValue = useMemo(() => Math.max(...data.map(item => item.value)), [data])

    const indicator = useMemo(() => data.map(item => ({
        name: item.name, max: maximumValue
    })), [data, maximumValue])

    const values = useMemo(() => data.map(item => (item.value)), [data])

    const option = {
        title: {
            text: 'CAUSES RANGE',
            textStyle: {
                fontSize: 14
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        textStyle: {
            fontSize: 9
        },
        //         colorBy: 'data',
        //  color: [
        //             '#F80D38',
        //             '#100DB1',
        //             '#FECA57',
        //             '#763CEF',
        //         ],
        radar: {
            radius: 45,
            indicator: indicator,
            center: ['45%', '55%'],
        },
        series: [
            {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                data: [
                    {
                        value: values,
                        name: 'Cases'
                    },

                ]
            }
        ]
    };
    return (
        <ReactECharts option={option} />

    )
}
