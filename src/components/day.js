import React from 'react';



export default ({ events, day }) => {
  const truncateName = (name) => {
    console.log('truncating');
    if(name.length > 16) {
      return name.slice(0, 16) + '...';
    }
  }

  const sortEvents = events => {
    return events.sort((a, b) => {
      return timeInt(a.startTime24) - timeInt(b.startTime24);
  })
}

  const timeInt = time => {
    return parseInt(time.slice(0, 2) + time.slice(-2));
  }

  events = sortEvents(events);
  // console.log('EVENTS FROM DAY', events);

  return (
    <div
      style={{
        width: 'auto',
        height: '10rem',
        padding: '.5rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255,255,255, 0.4)',
        color: 'white',
        boxShadow: '5px 5px 10px 1px rgba(0, 0, 0, .3)'
      }}
    >
      <p>{day}</p>
      <ul className="event-month-view">
        {events.map(e => (
          <li>{e.startTime} {truncateName(e.name)}</li>
        ))}
      </ul>
      {/*<Entry events={events}/>*/}
    </div>
  );
};
