import React, { useCallback, useRef, useState } from 'react'
import TabsContainer from '../utils/TabsContainer'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// const events = [
//     { title: 'Meeting', start: moment().format(), end: moment().add(1, 'days').format() }
// ]


// export default function AppointmentsTab({ callendar }) {

//     const calRef = React.useRef();

//     const handleClick = () => {
//         const inst = calRef.current.getInstance();
//         console.log('inst', inst);
//         console.log(inst.getDate());
//     };
//     const onAfterRenderEvent = (event) => {
//         console.log(event.title);
//     };
//     const onClickSchedule = useCallback((e) => {
//         const { calendarId, id } = e.schedule;
//         const el = cal.current.calendarInst.getElement(id, calendarId);

//         console.log(e, el.getBoundingClientRect());
//     }, []);
//     // const onBeforeUpdateSchedule = useCallback((e) => {
//     //     console.log(e);

//     //     const { schedule, changes } = e;

//     //     cal.current.calendarInst.updateSchedule(
//     //         schedule.id,
//     //         schedule.calendarId,
//     //         changes
//     //     );
//     // }, []);

//     const start = new Date();
//     const end = new Date(new Date().setMinutes(start.getMinutes() + 30));

//     const schedules = [
//         {
//             calendarId: "1",
//             category: "time",
//             isVisible: true,
//             title: "Study",
//             id: "1",
//             body: "Test",
//             start,
//             end
//         },
//         {
//             calendarId: "2",
//             category: "time",
//             isVisible: true,
//             title: "Meeting",
//             id: "2",
//             body: "Description",
//             start: new Date(new Date().setHours(start.getHours() + 1)),
//             end: new Date(new Date().setHours(start.getHours() + 2))
//         }
//     ];
//     const onBeforeCreateSchedule = useCallback((scheduleData) => {
//         console.log(scheduleData);

//         //         const schedule = {
//         //             id: String(Math.random()),
//         //             title: scheduleData.title,
//         //             isAllDay: scheduleData.isAllDay,
//         //             start: scheduleData.start,
//         //             end: scheduleData.end,
//         //             category: scheduleData.isAllDay ? "allday" : "time",
//         //             dueDateClass: "",
//         //             location: scheduleData.location,
//         //             raw: {
//         //                 class: scheduleData.raw["class"]
//         //             },
//         //             state: scheduleData.state
//         //         };

//         //         cal.current.calendarInst.createSchedules([schedule]);
//     }, []);
//     const createEvents = (e) => {
//         console.log('123', e);
//     }
//     return <>
//         <button onClick={handleClick}>test</button>
//         <TabsContainer title="Appointments">
//             <div className='p-4 calendar'>
//                 <Calendar usageStatistics={false} ref={calRef}
//                     view="month"
//                     // view="day"
//                     useFormPopup={true}
//                     useCreationPopup={true}
//                     useDetailPopup={true}
//                     schedules={schedules}
//                     month={{
//                         dayNames: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
//                         // visibleWeeksCount: 4,
//                         startDayOfWeek: 1,
//                         isAlways6Weeks: false,

//                     }}
//                     taskView={true}
//                     theme={{
//                         common: {
//                             today: {
//                             },
//                         },
//                     }}
//                     week={{
//                         taskView: false,
//                     }}
//                     createEvents={createEvents}
//                     onClickSchedule={onClickSchedule}
//                     onAfterRenderEvent={onAfterRenderEvent}
//                     // onClickSchedule={onClickSchedule}
//                     onBeforeCreateSchedule={onBeforeCreateSchedule}
//                 // onBeforeUpdateSchedule={onBeforeUpdateSchedule}
//                 // template={{
//                 //     monthMoreTitleDate(moreTitle) {
//                 //         const { date } = moreTitle;

//                 //         return `<span>${date}</span>`;
//                 //     },
//                 // }}
//                 />
//             </div>
//         </TabsContainer>
//     </>
// }
export default function AppointmentsTab({ callendar }) {
    let eventGuid = 0
    let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
    const eventPopup = useRef()
    const [input, setInput] = useState("")
    const [selectInfo, setSelectInfo] = useState(null)
    const INITIAL_EVENTS = [
        {
            id: createEventId(),
            title: 'All-day event',
            start: todayStr
        },
        {
            id: createEventId(),
            title: 'Timed event',
            start: todayStr + 'T12:00:00'
        }
    ]
    // const [events, setEvents] = useState(INITIAL_EVENTS)



    function createEventId() {
        return String(eventGuid++)
    }

    const [weekendsVisible, setWeekendsVisible] = useState(true)
    const [currentEvents, setCurrentEvents] = useState([])
    console.log('currentEvents', currentEvents);
    function handleWeekendsToggle() {
        setWeekendsVisible(!weekendsVisible)
    }

    function handleDateSelect(selectInfo) {
        console.log('selectInfo', selectInfo);
        setSelectInfo(selectInfo)
        eventPopup.current.showModal()
        // let title = prompt('Please enter a new title for your event')
        // let calendarApi = selectInfo.view.calendar
        // console.log('selectInfo', selectInfo);
        // calendarApi.unselect() // clear date selection
        // console.log('input', input);
        // if (input) {
        //     calendarApi.addEvent({
        //         id: createEventId(),
        //         title: input,
        //         start: selectInfo.startStr + 'T14:00:00',
        //         end: selectInfo.endStr,
        //         // start: moment().hours(3).minutes(45).format(),
        //         // end: moment().add(1, 'days').hours(4).minutes(45).format()
        //         allDay: selectInfo.allDay
        //     })
        // }
    }

    function handleEventClick(clickInfo) {
        console.log('clickInfo', clickInfo);
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    function handleEvents(events) {
        setCurrentEvents(events)
    }

    const saveTitle = () => {
        console.log('api', callendar.current.getApi());
        // let calendarApi = callendar.current.getApi()
        // console.log('getCurrentData', calendarApi.getCurrentData());
        if (input) {
            let calendarApi = selectInfo.view.calendar
            calendarApi.addEvent({
                id: createEventId(),
                title: input,
                start: selectInfo.startStr + 'T14:00:00',
                end: selectInfo.endStr,
                // start: moment().hours(3).minutes(45).format(),
                // end: moment().add(1, 'days').hours(4).minutes(45).format()
                allDay: selectInfo.allDay
            })
            setInput("")
        }
    }

    const handleDateClick = (e) => console.log('e', e);

    return (<>
        <PopupEvent eventPopup={eventPopup} input={input} setInput={setInput} saveTitle={saveTitle} />
        <TabsContainer title="Appointments">
            <div className='p-4'>
                <FullCalendar ref={callendar}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    views={{
                        dayGridMonth: { // name of view
                            titleFormat: { month: 'long' }
                            // other view-specific options here
                        }
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}
                    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    // events={events}
                    select={handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
                    eventsSet={handleEvents}
                    eventResize={console.log('resize events')}
                    eventAdd={function () { console.log('added event') }}
                    dateClick={handleDateClick}
                /* you can update a remote database when these fire:
                eventAdd={function () { }}
                eventChange={function () { }}
                eventRemove={function () { }}
                */
                />

            </div>
        </TabsContainer>
    </>
    )
}

function renderEventContent(eventInfo) {
    console.log('eventInfo', eventInfo);
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

const PopupEvent = ({ eventPopup, input, setInput, saveTitle }) => {

    const handleInput = (e) => setInput(e.target.value)

    return <>
        {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
        <dialog id="my_modal_1" ref={eventPopup} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add event</h3>
                <div className="modal-action">
                    <input value={input} onChange={handleInput} className='border' />
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn" onClick={saveTitle}>Save</button>
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
}

