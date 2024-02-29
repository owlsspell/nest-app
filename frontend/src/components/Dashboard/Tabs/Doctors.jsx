import React, { useMemo, useState } from 'react'
import DoctorCard from '../utils/DoctorCard'
import TabsContainer from '../utils/TabsContainer'
import { useSelector } from "react-redux"
import ReactPaginate from 'react-paginate';

export default function Doctors() {
    const doctors = useSelector(state => state.doctors)
    const itemsPerPage = 8
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = useMemo(() => doctors.slice(itemOffset, endOffset), [doctors, itemOffset])
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    console.log(`itemOffset`, itemOffset);
    console.log(`currentItems`, currentItems);

    const pageCount = useMemo(() => Math.ceil(doctors.length / itemsPerPage), [doctors])
    console.log('pageCount', pageCount);
    // const doctors = useMemo(() => [
    //     { id: '1', name: 'Dr. Ibrahim Yekeni', role: 'Heart Surgeon', avatar: '/images/hero.png', appointments: 66, },
    //     { id: '2', name: 'John', role: 'Doctor', avatar: '', appointments: 26, }
    // ], [])
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % doctors.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <TabsContainer title="Doctors">
            <div className='grid grid-cols-4 gap-3 p-4'>
                {currentItems.map(doctor => <DoctorCard data={doctor} />)}
            </div>

            <ReactPaginate
                breakLabel="..."
                breakClassName="join-item btn rounded-full min-h-max h-6 px-2 text-sm hover:text-primary btn-disabled"
                containerClassName="flex items-center ml-auto mr-0 w-max border border-base-content/30 rounded-full space-x-1.5 p-1 mr-3"
                pageClassName="join-item btn rounded-full min-h-max h-6 p-0 leading-6 text-sm hover:text-primary"
                activeClassName="bg-primary text-white hover:text-primary"
                pageLinkClassName="px-2 h-full"
                nextLabel=">"
                nextClassName="join-item btn rounded-full min-h-max h-6 px-2 text-sm leading-none hover:text-primary"
                previousLabel="<"
                previousClassName="join-item btn rounded-full min-h-max h-6 px-2 text-sm leading-none hover:text-primary"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
            />
        </TabsContainer>
    )
}
