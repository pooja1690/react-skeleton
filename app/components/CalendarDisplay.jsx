import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/en-gb';
import '../assets/styles/CalendarDisplay.css';

class CalendarDisplay extends Component {
constructor(props) {
  super(props);

  this.state = {date: moment()};
}
  render() {
    return (
      <div id = "calendar">
      <div id = "calendar-display">
      <div className="section-title">
          <h2>Current Availability</h2>
          <hr />
      </div>
      <Calendar
        onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months') }) }
        onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
        date={this.state.date}
        onPickDate={(date) => console.log(date)}
        renderDay={(day) => day.format('D')}
      />
      </div>
      </div>
    );
  }
}

export default CalendarDisplay;
