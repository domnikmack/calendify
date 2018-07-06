import React, {Component} from 'react';
import Day from './Day';
import Submission from './Submission';
import { connect } from 'react-redux';
import { fetchEvents, setCurrentEvent } from '../redux';

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const createGridDates = (start, end, lastDayPrev, firstSunNext) => {
  let dates = [];
  for (let i = start; i <= lastDayPrev; i++) {
    dates.push([5, i]);
  }
  for (let j = 1; j <= end; j++) {
    dates.push([6, j]);
  }
  for (let k = 1; k <= firstSunNext; k++) {
    dates.push([7, k]);
  }
  return dates;
}

class CalGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmission: false,
    };
    this.openSubmissionForm = this.openSubmissionForm.bind(this);
    this.closeSubmissionForm = this.closeSubmissionForm.bind(this);
  }

  openSubmissionForm(evt) {
    evt.preventDefault();
    const month = +evt.target.dataset.month;
    const day = +evt.target.dataset.day;
    let startTime24 = '09:00';
    let endTime24 = '10:00';
    this.props.setCurrentEvent({ month, day, startTime24, endTime24 })
    this.setState({
      showSubmission: true,
    });
  }

  closeSubmissionForm() {
    this.setState({
      showSubmission: false
    })
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const gridDates = createGridDates(28, 30, 31, 1);

    return (
      <section>
      <h2 className="month" >June 2018</h2>
      <ul className="calgrid">
        {week.map(day => (<h2
          className="weekday"
          key={day}>{day}
          </h2>))}
        {gridDates.map(date =>
          (<Day
            day={date}
            events = {this.props.events.filter(event => {
              return event.day === date[1] && event.month === date[0];
            })
            }
            key={date}
            openSubmit={this.openSubmissionForm}
          /> ))}

      </ul>
      {this.state.showSubmission && <Submission closeSubmit={this.closeSubmissionForm} />}
      </section>
    )

  }
}

const mapState = state => {
  return {
    events: state.events,
    currentEvent: state.currentEvent
  }
};

const mapDispatch = dispatch => ({
  fetchEvents() { dispatch(fetchEvents())},
  setCurrentEvent(event) { dispatch(setCurrentEvent(event))}
});

export default connect(mapState, mapDispatch)(CalGrid);
