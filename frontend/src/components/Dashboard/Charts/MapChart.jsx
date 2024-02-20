import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react';
import { registerMap } from 'echarts';
import world_map from '../../../../custom.geo.json'


export default function MapChart() {

    registerMap("world", world_map);

    const data = useMemo(() => [
        { name: 'USA', value: 9 },
        { name: 'Canada', value: 12 },
        { name: 'China', value: 1440 },
        { name: 'India', value: 840 },
        { name: 'Brazil', value: 40 },
        { name: 'Chad', value: 220 },
    ], [])
    const maximumValue = useMemo(() => Math.max(...data.map(item => item.value)), [data])

    const option = {
        title: {
            text: "COVID 19 PANDEMIC",
            textStyle: {
                fontSize: 14
            },
        },
        tooltip: {
            trigger: "item",
        },

        color: [
            '#F80D38',
            '#100DB1',
            '#FECA57',
            '#763CEF',
        ],
        // geo: {
        //     map: 'world',
        //     roam: true,
        //     emphasis: {

        //         itemStyle: {
        //             areaColor: '#2B88D9',
        //         }
        //     },
        //     itemStyle: {
        //         areaColor: '#2b88d969'
        //     },
        //     scaleLimit: {
        //         min: 1
        //     },
        // }

        series: [
            {
                type: "map",
                center: ['5%', '10%'],

                coordinateSystem: 'geo',
                roam: true,
                map: "world",
                data,
                emphasis: {
                    itemStyle: {
                        areaColor: '#2B88D9',
                    }
                },
                itemStyle: {
                    areaColor: '#2b88d969'
                },
                select: {
                    itemStyle: { color: '#2B88D9' }
                },
                scaleLimit: {
                    min: 1
                },
            },
        ],
        visualMap: {
            orient: "vertical",
            left: "right",
            align: "center",
            min: 1,
            max: maximumValue,
            itemHeight: '250px',
            top: '0',
            inRange: {
                color: [
                    "#31955c",
                    "#40b974",
                    "#4fd288",
                    "#60e79b",
                    "#81edb0",
                    "#ffffbf",
                    "#fee090",
                    "#fdae61",
                    "#f46d43",
                    "#d73027",
                    "#a50026",
                ],
            },
            text: ["High", "Low"],
            calculable: true,
        },
    };
    return (
        <>
            <ReactECharts option={option} />

        </>
    )
}
