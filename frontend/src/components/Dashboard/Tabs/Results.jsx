import React, { useMemo } from 'react'
import ResultsCard from '../utils/ResultsCard'
import TabsContainer from '../utils/TabsContainer'

export default function Results() {
    const results = useMemo(() => [
        { id: '1', name: 'Dr. Ibrahim Yekeni', file: 'Malaria Infection Treatment', avatar: '/images/hero.png', time: '2:00PM', },
        { id: '2', name: 'Dr. Ebuka Kelechi', file: 'Transcend', avatar: '', time: '5:00AM', }
    ], [])
    return (
        <TabsContainer title="Pathology Results">
            <div className='p-4'>
                <div className='flex my-2 gap-x-2 overflow-x-auto text-center text-[10px] font-bold text-black'>
                    <div className='w-1/3 text-left pl-3'>
                        DOCTOR
                    </div>
                    <div className='w-1/4 text'>FILE</div>
                    <div className='w-1/5 '>TIME</div>
                    <div className='w-1/5 '>ACTION</div>
                    <div className='w-10'></div>
                </div>
                {results.map(result => <ResultsCard data={result} key={result.id} />)}
            </div>
        </TabsContainer>
    )
}
