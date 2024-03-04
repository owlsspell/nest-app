import React, { useEffect, useMemo, useRef, useState } from 'react'
import DoctorCard from '../utils/DoctorCard'
import TabsContainer from '../utils/TabsContainer'
import { useDispatch, useSelector } from "react-redux"
import ReactPaginate from 'react-paginate';
import { updateDoctorsList } from '../../../store/slices/doctorsSlice';
import allDoctors from "../../../../mock_data/doctors.json"
import { AnimatePresence, motion } from 'framer-motion';

export default function Doctors() {
    const doctors = useSelector(state => state.doctors.doctorsList)
    const dispatch = useDispatch()

    const itemsPerPage = 8
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = useMemo(() => doctors.slice(itemOffset, endOffset), [doctors, itemOffset])
    const pageCount = useMemo(() => Math.ceil(doctors.length / itemsPerPage), [doctors])
    const [currentPage, setCurrentPage] = useState(0)

    const [activeFilter, setActiveFilter] = useState('all')
    const filters = ["all", "man", "woman"]
    const [search, setSearch] = useState('')

    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
        const newOffset = (event.selected * itemsPerPage) % doctors.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    const handleInput = (e) => setSearch(e.target.value)
    const searchDoctors = () => {
        const newList = doctors.filter((item) => new RegExp(search, 'i').test(item.name) || new RegExp(search, 'i').test(item.role));
        dispatch(updateDoctorsList(newList))
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') searchDoctors()
    }
    const getAllDoctorsList = () => {
        setSearch("")
        dispatch(updateDoctorsList(allDoctors))
    }
    const updateDoctorsByGender = (filter) => {

        setActiveFilter(filter)
        setCurrentPage(0)
        setItemOffset(0)

        switch (filter) {
            case 'all': dispatch(updateDoctorsList(allDoctors))
                break
            case 'man': dispatch(updateDoctorsList(allDoctors.filter((item) =>
                item.gender === 'Male'
            )))
                break
            case 'woman': dispatch(updateDoctorsList(allDoctors.filter((item) =>
                item.gender === 'Female'
            )))
                break

        }
    }

    return (
        <TabsContainer title="Doctors">
            <div className='flex justify-between px-4 pt-4'>
                <label className="input input-bordered input-sm flex items-center gap-2">
                    <input type="text" className="grow leading-3" placeholder="Search doctors" value={search} onChange={handleInput} onKeyDown={onKeyDown} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" onClick={searchDoctors} onKeyDown={onKeyDown} className="w-4 h-4 opacity-70 cursor-pointer"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    <button onClick={getAllDoctorsList}>X</button>
                </label>
                <div role="tablist" className="tabs border border-base-content/20 p-0 h-max rounded-lg overflow-hidden">
                    {filters.map(filter =>
                        <a role="tab" className={"tab text-xs border border-base-content/20 font-medium w-20 " + (activeFilter === filter ? "bg-primary text-secondary" : "")}
                            onClick={() => updateDoctorsByGender(filter)}
                        >{filter.toUpperCase()}</a>)}
                </div>
            </div>

            <div className='grid grid-cols-4 gap-3 p-4'>

                {currentItems.map((doctor, index) =>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={doctor.id || doctor.name}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.3 }}
                        >
                            <DoctorCard data={doctor} />
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
            <ReactPaginate
                forcePage={currentPage}
                breakLabel="..."
                breakClassName="join-item btn rounded-full min-h-max h-6 px-2 text-sm hover:text-primary btn-disabled"
                containerClassName="flex items-center ml-auto mr-0 w-max border border-base-content/30 rounded-full space-x-1.5 p-1 mr-3"
                pageClassName="join-item btn rounded-full min-h-max h-6 p-0 leading-6 text-sm hover:text-primary"
                activeClassName="bg-primary text-white hover:text-primary"
                pageLinkClassName="px-2 h-full"
                nextLabel=">"
                nextClassName="join-item btn rounded-full min-h-max h-6 p-0 text-sm leading-none hover:text-primary"
                previousLinkClassName="px-2"
                previousLabel="<"
                nextLinkClassName="px-2"
                previousClassName="join-item btn rounded-full min-h-max h-6 p-0 text-sm leading-none hover:text-primary"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                renderOnZeroPageCount={null}

            />
        </TabsContainer>
    )
}
