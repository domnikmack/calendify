import React, {Component} from 'react';
import Day from './day';
import Submission from './Submission';
import { connect } from 'react-redux';
import { fetchEvents } from '../redux';

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const createDayNums = (start, end, lastDayPrev, firstSunNext) => {
  let nums = [];
  for (let prev = start; prev <= lastDayPrev; prev++) {
    nums.push(prev)
  }
  for (let curr = 1; curr <= end; curr++) {
    nums.push(curr);
  }
  for (let next = 1; next <= firstSunNext; next++) {
    nums.push(next);
  }
  return nums;
}

class CalGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      submissionFormShowing: false
    };
  }

  toggleSubmissionForm(evt) {

  }

  componentDidMount() {
    this.props.fetchEvents()


  }

  render() {
    const events = this.props.events;
    const dayNums = createDayNums(28, 30, 31, 1);

    return (
      <section>
      <h2 className="month" >June 2018</h2>
      <ul className="calgrid">
        {week.map(day => (<h2
          className="weekday"
          key={day}>{day}
          </h2>))}
        {dayNums.map(num =>
          (<Day
            day={num}
            events = {this.props.events.filter(event => event.day === num)}
            key={num}
          /> ))}

      </ul>
      <Submission />
      </section>
    )

  }
}

const mapState = state => {
  return {
    events: state.events
  }
};

const mapDispatch = dispatch => ({
  fetchEvents() { dispatch(fetchEvents())}
});

export default connect(mapState, mapDispatch)(CalGrid);
