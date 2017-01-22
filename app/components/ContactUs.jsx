import React, { Component } from 'react';
import '../assets/styles/ContactUs.css';

class ContactUs extends Component {
  render() {
    return (
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Contact us</h3>
              <form>
                <input type="text" className="form-control" placeholder="Your Name" />
                <input type="text" className="form-control" placeholder="Phone No." />
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                <div className="text-right">
                    <a href="#" className="btn send-btn">Send</a>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <h3>Navigation</h3>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default ContactUs;
