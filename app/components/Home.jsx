import React, { Component } from 'react';
import '../assets/styles/Home.css';
import TypeWriter from 'react-typewriter';
import SmoothScroll from 'smoothscroll'
import image from '../assets/images/bg6.jpg';
import Icon from '../assets/Icon-Font.js';

function HomeContent(props) {
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
      <div id="home">
        <Header />
        <div className="container text-center">
          <HomeImageText text = {props.text} />
          <a href="#services" className="down-btn page-scroll ">
          <svg className="arrow-down" width="32" height="32" viewBox="0 0 32 32" aria-labelledby="title">
            <title id="title">Down arrow</title>
            <path d="M877.254 338.746l-320-320c-24.992-24.994-65.514-24.994-90.508 0l-320 320c-24.994 24.994-24.994 65.516 0 90.51 24.994 24.996 65.516 24.996 90.51 0l210.744-210.746v613.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-613.49l210.746 210.746c12.496 12.496 28.876 18.744 45.254 18.744s32.758-6.248 45.254-18.746c24.994-24.994 24.994-65.514 0-90.508z" />
          </svg>
              {/* <Icon name='angle-down' size='2x' /> */}
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header-bar">
      <ul>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#calendar">Check Availability</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#amenities">Amenities</a></li>
      </ul>
    </div>
  );
}

function HomeImageText(props) {
  return (
    <div className="content">
      <h4>Event coming up?</h4>
      <hr/>
      <div className="header-text btn">
          <h1>
            <span id="head-title">
              <TypeWriteText text = {props.text}/>
            </span>
          </h1>
      </div>
    </div>
  );
}

function TypeWriteText(props) {
  return (
    <div>
      <TypeWriter typing={1}>{props.text}
      </TypeWriter>
    </div>
  );
}

function HomeScrollDown() {
  return (
    <a href="#services" className="down-btn page-scroll ">
        <span className="fa fa-angle-down"></span>
    </a>
  );
}

class Home extends Component {
  render() {
    var bannerStyle = {
                background: 'url('+ image +')'
                // backgroundSize: cover,
                // backgroundPosition: center,
            }

    return (
      <div>
        {/* <section style={bannerStyle}> */}
        <HomeContent
          text = {"Book your next Event Venue!"} />
          {/* </section> */}
      </div>
    );
  }
}

export default Home;
