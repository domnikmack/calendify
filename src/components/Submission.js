import React, { Component } from 'react';
import { postEvent } from '../redux';
import { connect } from 'react-redux';

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '09:00',
      endTime: '10:00',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(date, startTime24, endTime, description, evt) {
    evt.preventDefault();
    this.props.closeSubmit();
    this.props.postEvent(date, startTime24, endTime, description);
  }

  render() {
    const { closeSubmit, entryDay } = this.props;
    const { description, startTime, endTime } = this.state;
    const date = `2018-06-0${entryDay}`;

    return (
      <div className="submission-form">
        <h2>June {entryDay} </h2>
        <p>Create a new event:</p>
        <form
          onSubmit={ evt =>
            this.handleSubmit(date, startTime, endTime, description, evt)
          }
        >
          <input
            type="text"
            name="description"
            value={description}
            placeholder="New Entry"
            onChange={this.handleChange}
          />
          <label>
            Start Time:
            <input
              type="time"
              value={this.state.startTime}
              name="startTime"
              onChange={this.handleChange}
            />
          </label>
          <label>
            End Time:
            <input
              type="time"
              value={this.state.endTime}
              name="endTime"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" name="Create Event" value="Create Event" />
          <button onClick={closeSubmit}>Cancel</button>
        </form>
      </div>
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => ({
  postEvent(date, startTime24, endTime, description) {
    dispatch(postEvent({ date, startTime24, endTime, description }));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Submission);
