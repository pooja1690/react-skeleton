import React, { Component } from 'react';
import '../assets/styles/Home.css';

function HomeContent(props) {
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
      <div id="home">
      </div>
    </div>
  );
}

class Home extends Component {
  render() {
    return (
      <div>
        <HomeContent
          text = {"Book your next Event Venue!"} />
      </div>
    );
  }
}

export default Home;
