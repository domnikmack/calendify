import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdite = this.handleEdit.bind(this);
  }

  truncateDescription (description) {
      if (description.length > 24) {
        return description.slice(0, 24) + '...';
      }
      return description;
    }

  sortEvents (events) {
      return events.sort((a, b) => {
        return this.timeInt(a.startTime24) - this.timeInt(b.startTime24);
      });
    }

  timeInt (time) {
      return parseInt(time.slice(0, 2) + time.slice(-2));
  }

  // handleClick(evt) {
  //   // console.log('EVT', evt)
  //   evt.stopProgagation();
  //   evt.nativeEvent.stopImmediatePropagation();
  //   console.log('CLICKED');
  // }

  handleDelete(evt) {
    evt.stopProgagation();
    // evt.nativeEvent.stopImmediatePropagation();

    console.log('DELETE');
  }

  handleEdit(evt) {
    evt.stopProgagation();
    // evt.nativeEvent.stopImmediatePropagation();
    CONSOLE.LOG('EDIT');
  }


  render() {
    const { day, openSubmit } = this.props;
    let events = this.sortEvents(this.props.events);

    return (
      <div
        style={{
          width: 'auto',
          height: '10rem',
          margin: '0',
          padding: '.3rem',
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
            <li className="single-event" >
              <div className="single-event-header">

                {e.startTime} - {e.endTime}
                <div className="event-icons">
                  <FontAwesomeIcon className="icon" icon={faPencilAlt} onClick={() => this.handleDelete(evt)} />
                  <FontAwesomeIcon className="icon" icon={faTrash} onClick={() => this.handleEdit(evt)} />
                </div>
              </div>

              {this.truncateDescription(e.description)}
            </li>
          ))}
        </ul>
        </div>
      );
    }
}
