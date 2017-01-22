import React, { Component } from 'react';
import Home from './Home.jsx';
import Gallery from './Gallery.jsx';
import Amenities from './Amenities.jsx';
import CalendarDisplay from './CalendarDisplay.jsx';
import ContactUs from './ContactUs.jsx';
import Icon from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <CalendarDisplay />
        <Amenities />
        <Gallery />
        <ContactUs />
      </div>
    );
  }
}
export default App;
