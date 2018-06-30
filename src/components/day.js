import React from 'react';

export default ({ events, day, openSubmit }) => {
  const truncateDescription = description => {
    if (description.length > 24) {
      return description.slice(0, 24) + '...';
    }
    return description;
  };

  const sortEvents = events => {
    return events.sort((a, b) => {
      return timeInt(a.startTime24) - timeInt(b.startTime24);
    });
  };

  const timeInt = time => {
    return parseInt(time.slice(0, 2) + time.slice(-2));
  };

  events = sortEvents(events);

  return (
    <div
      style={{
        width: 'auto',
        height: '10rem',
        margin: '0',
        padding: '.5rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255,255,255, 0.4)',
        color: 'white',
        boxShadow: '5px 5px 10px 1px rgba(0, 0, 0, .3)',
        cursor: 'pointer'
      }}
      data-day={day}
      onClick={openSubmit}
    >
      <p className="day-number">{day}</p>
      <ul className="event-month-view">
        {events.map(e => (
          <li>
            {e.startTime} - {e.endTime}
            <br/>
            {truncateDescription(e.description)}
          </li>
        ))}
      </ul>
      {/*<Entry events={events}/>*/}
    </div>
  );
};
