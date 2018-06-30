import React, { Component } from 'react';
import postEvent from '../redux';

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      startTime: '09:00',
      endTime: '10:00',
      eventDescription: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange (evt) {

    console.log('EVT:', evt.target.name)
    this.setState({[evt.target.name]: evt.target.value })

  }



  render() {
    const { name, startTime, endTime, description } = this.state;
    const { handleSubmit } = this.props;

    return (
      <div className="submission-form">
        <p>Create a new event:</p>
        <form onSubmit={handleSubmit(name, startTime, endTime, description)} >
          <input type="text" placeholder="New Event" name="name" onChange={this.handleChange} />
          <label>
            Start Time:
            <input type="time" value={this.state.startTime} name="startTime" onChange={this.handleChange} />
          </label>
          <label>
            End Time:
            <input type="time" value={this.state.endTime} name="endTime" onChange={this.handleChange} />
          </label>
          <textArea placeholder="Description" />
        </form>
      </div>
    );
  }
}

export default Submission;


const mapState = null;

const mapProps = function (dispatch) {
  return {
    handleSubmit(event) {
      dispatch(postEvent(event))
    }
  }
}
