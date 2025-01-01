import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

function Calendar() {
  return (
    <div className="calendar-block">
      <h2>日历</h2>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: '事件 1', date: '2023-10-01' },
          { title: '事件 2', date: '2023-10-05' },
        ]}
      />
    </div>
  );
}

export default Calendar;
