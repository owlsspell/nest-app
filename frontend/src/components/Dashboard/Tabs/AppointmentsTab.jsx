import React, { useState } from 'react'
import TabsContainer from '../utils/TabsContainer'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment';

const events = [
    { title: 'Meeting', start: moment().format(), end: moment().add(1, 'days').format() }
]
export default function AppointmentsTab({ callendar }) {
    let eventGuid = 0
    let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

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
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
        console.log('selectInfo', selectInfo);
        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr + 'T14:00:00',
                end: selectInfo.endStr,
                // start: moment().hours(3).minutes(45).format(),
                // end: moment().add(1, 'days').hours(4).minutes(45).format()
                allDay: selectInfo.allDay
            })
        }
    }

    function handleEventClick(clickInfo) {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    function handleEvents(events) {
        setCurrentEvents(events)
    }

    return (
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
                    select={handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
                    eventsSet={handleEvents}
                    eventResize={console.log('resize events')}
                /* you can update a remote database when these fire:
                eventAdd={function () { }}
                eventChange={function () { }}
                eventRemove={function () { }}
                */
                />

            </div>
        </TabsContainer>
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