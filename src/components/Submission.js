import React, { Component } from 'react';
import { updateCurrentEvent, postEvent, setCurrentEvent, editEvent } from '../redux';
import { connect } from 'react-redux';
import { getMonthName, getDate } from '../utils';

class Submission extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(evt) {
    this.props.updateCurrentEvent({[evt.target.name]: evt.target.value});
  }

  handleSubmit(currentEvent, evt) {
    evt.preventDefault();
    currentEvent.date = getDate(currentEvent.month, currentEvent.day);

    this.props.closeSubmit();
    this.props.postEvent(currentEvent);
    this.props.setCurrentEvent({});
  }

  handleUpdate(currentEvent, evt) {
    const { id, description, startTime24, endTime24} = currentEvent;
    evt.preventDefault();
    this.props.closeSubmit();
    this.props.editEvent(id, { description, startTime24, endTime24 });
    this.props.setCurrentEvent({});
  }

  handleCancel(evt) {
    evt.preventDefault();
    this.props.closeSubmit();
    this.props.setCurrentEvent({});
  }

  render() {
    let submissionType;
    let buttonText;
    let currentEvent = this.props.currentEvent;
    if (currentEvent.id) {
      submissionType = 'Edit Event';
      buttonText = 'Update';
    } else {
      submissionType = 'Create New Event';
      buttonText = 'Submit';
    }

    let {month, day, startTime24 = '09:00', endTime24 = '10:00', description = 'New Event' } = currentEvent;

    return (
      <div className="submission-form">
        <h2>{getMonthName(month)} {day} </h2>
        <p>{submissionType}</p>
        <form
          onSubmit={
            submissionType === 'Create New Event' ?
              evt => this.handleSubmit(currentEvent, evt) :
              evt => this.handleUpdate(currentEvent, evt)
          }
        >
          <input
            type="text"
            name="description"
            value={description}
            placeholder="New Event"
            onChange={this.handleChange}
          />
          <label>
            Start Time:
            <input
              type="time"
              value={startTime24}
              default="9:00:00"
              name="startTime24"
              onChange={this.handleChange}
            />
          </label>
          <label>
            End Time:
            <input
              type="time"
              value={endTime24}
              default="10:00:00"
              name="endTime24"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" name={buttonText} value={buttonText} />
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  currentEvent: state.currentEvent
});

const mapDispatch = dispatch => ({
  updateCurrentEvent(event) {
    dispatch(updateCurrentEvent(event));
  },
  postEvent(event) {
    dispatch(postEvent(event))
  },
  editEvent(id, update) {
    dispatch(editEvent(id, update))
  },
  setCurrentEvent(event) {
    dispatch(setCurrentEvent(event))
  }
});

export default connect(
  mapState,
  mapDispatch
)(Submission);
