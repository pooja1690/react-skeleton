import React, { Component } from 'react';
import '../assets/styles/Amenities.css';

class Amenities extends Component {
  render() {
    return (
      <div id="amenities">
        <div className="overlay">
        <div className="container text-center">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="section-title">
                        <h2>Amenities</h2>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <div className="amenities-components">
                        <ul>
                          <li>
                            <span className="icon-fountain"></span>
                            <p>Fountain</p>
                          </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4">
                    <div className="amenities-components">
                    <ul>
                      <li>
                        <span className="icon-fountain"></span>
                        <p>Fountain</p>
                      </li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="amenities-components">
                    <ul>
                      <li>
                        <span className="icon-fountain"></span>
                        <p>Fountain</p>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            <a href="#testimonials" className="down-btn page-scroll">
                <span className="fa fa-angle-down"></span>
            </a>
        </div></div>
      </div>
    );
  }
}

export default Amenities;
