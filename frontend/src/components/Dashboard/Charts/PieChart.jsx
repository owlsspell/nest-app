import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react';

function PieChart({ title, data }) {
    const sum = useMemo(() => data.reduce((acc, val) => acc + val.value, 0), [data])
    const option = {
        title: {
            text: title,
            textStyle: {
                fontSize: 14
            },
        },
        tooltip: {
            trigger: 'item',
            formatter(param) {
                return `${param.marker}${param.name} - ${param.value} <span style="font-weight: bold">(${param.percent * 2}%</span>)`;
            },
        },
        legend: {
            icon: 'circle',
            bottom: '0',
            left: 'center',
            itemHeight: 10,
            itemWidth: 10,
            textStyle: {
                fontSize: '10px',
                fontWeight: 'bold',
            },
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        color: [
            '#F80D38',
            '#100DB1',
            '#FECA57',
            '#763CEF',
        ],
        series: [
            {
                type: 'pie',
                radius: ['50%', '65%'],
                center: ['50%', '50%'],
                labelLine: {
                    show: false
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: '#242e7880',
                    shadowOffsetY: 5,
                },
                label: {
                    show: true,
                    position: 'center',
                    itemStyle: {
                        borderCap: 'round',
                        borderMiterLimit: 20
                    },
                    formatter: [
                        `{a|${sum}}`,
                        '{b|patients}'
                    ].join('\n'),
                    rich: {
                        a: {
                            color: '#100DB1',
                            fontSize: 20
                        },
                        b: {
                            color: '#100DB1',
                        },

                    }
                },
                data
            },
        ]
    };

    return (
        <div>
            <ReactECharts option={option}
            />
        </div>
    )
}

export default React.memo(PieChart)


// import React, { useEffect, useRef, useState } from 'react'
// import * as d3 from "d3";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const ShadowPlugin = {
//     id: 'custom_canvas_background_color',
//     beforeDraw: (chart, args, options) => {
//         const { ctx } = chart;
//         // console.log('chart1', ctx.elements.Arc.prototype.draw);

//         // console.log('ctx', ctx);
//         ctx.shadowColor = "#f80d386b";
//         ctx.shadowBlur = 10;
//         ctx.shadowOffsetX = 0;
//         ctx.shadowOffsetY = 5;
//     },
// };
// export const data = {
//     labels: ['Malaria', 'Cold', 'Typhoid', 'Others'],
//     datasets: [
//         {
//             label: '# of Votes',
//             data: [15, 10, 5, 20],
//             backgroundColor: [
//                 '#100DB1',
//                 '#FECA57',
//                 '#763CEF',
//                 '#F80D38',
//             ],
//             borderWidth: 0
//         },
//     ],

// };


// export default function PieChart() {


//     return <Doughnut data={data}
//         plugins={[ShadowPlugin]}
//         className='m-auto p-2' />
// }
// // export default function PieChart() {
// //     const width = 200
// //     const height = 200
// //     const radius = Math.min(width, height) / 2 - 30;

// //     const data = [
// //         { name: "Mark", value: 90 },
// //         { name: "Robert", value: 12 },
// //         { name: "Emily", value: 34 },
// //         { name: "Marion", value: 53 },
// //         { name: "Nicolas", value: 98 },
// //     ]
// //     const pieGenerator = d3.pie().value((d) => d.value);
// //     const pie = pieGenerator(data);

// //     const arcPathGenerator = d3.arc();

// //     const arcs = pie.map((p) =>
// //         arcPathGenerator({
// //             innerRadius: 50,
// //             outerRadius: radius,
// //             startAngle: p.startAngle,
// //             endAngle: p.endAngle,
// //         })
// //     );
// //     const colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"];

// //     return (
// //         <>
// //             <svg width={width} height={height} style={{ display: "inline-block" }}>
// //                 {/* // render all the arcs */}
// //                 <g transform={`translate(${width / 2}, ${height / 2})`}>
// //                     {arcs.map((arc, i) => {

// //                         return <path key={i} d={arc} fill={colors[i]} />;
// //                     })}
// //                 </g>
// //             </svg>
// //         </>
// //     )
// // }
