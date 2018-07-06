import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { destroyEvent, setCurrentEvent } from '../redux';

class Day extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  truncateDescription(description) {
    if (description.length > 24) {
      return description.slice(0, 24) + '...';
    }
    return description;
  }

  sortEvents(events) {
    return events.sort((a, b) => {
      return this.timeInt(a.startTime24) - this.timeInt(b.startTime24);
    });
  }

  timeInt(time) {
    return parseInt(time.slice(0, 2) + time.slice(-2));
  }

  handleClick(evt) {
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
  }

  handleDelete(evt, id) {
      evt.stopPropagation();
      evt.nativeEvent.stopImmediatePropagation();
      this.props.destroyEvent(id);
  }

  handleEdit(evt, currentEvent) {
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
    this.props.openSubmit(evt);
    this.props.setEvent(currentEvent);
  }

  render() {
    const { day, openSubmit } = this.props;
    let events = this.sortEvents(this.props.events);

    return (
      <div
        className = "day-box"
        data-month={day[0]}
        data-day={day[1]}
        onClick={openSubmit}
      >
        <p className="day-number" onClick={this.handleClick}>{day[1]}</p>
        <ul className="event-month-view">
          {events.map(e => (
            <li className="single-event" key={e.id} onClick={this.handleClick}>
              <div className="single-event-header">
                {e.startTime} - {e.endTime}
                <div className="event-icons">
                  <FontAwesomeIcon
                    title="edit"
                    className="icon"
                    icon={faPencilAlt}
                    onClick={evt => this.handleEdit(evt, e)}
                  />
                  <FontAwesomeIcon
                    title="delete"
                    className="icon"
                    icon={faTrash}
                    onClick={evt => this.handleDelete(evt, e.id)}
                  />
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

const mapState = null;

const mapDispatch = function(dispatch) {
  return {
    destroyEvent(event) {
      dispatch(destroyEvent(event))
    },
    setEvent(eventId) {
      dispatch(setCurrentEvent(eventId))
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Day);
