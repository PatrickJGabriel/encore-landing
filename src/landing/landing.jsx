import React, { Component } from "react";
import encore_logo from "../images/encore-logo.png";
import iPhone from "../images/encore-screenshot.png";
import download_btn from "../images/download-btn.png";
import "./landing.css";

class landing extends Component {
  state = {};
  render() {
    return (
      <div className="landing-container text-center">
        <div className="row">
          <div className="col-12">
            <img
              id="encore-logo"
              src={encore_logo}
              alt="encore - relive your favorite concerts"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="hero-text-wrapper">
              <h1 id="title">encore</h1>
              <p id="tagline">relive your favorite concerts.</p>
              <img id="download-btn" src={download_btn} alt="download-btn" />
            </div>
          </div>
          <div className="col-6">
            <img id="iPhone" src={iPhone} alt="encore-screenshot" />
          </div>
          <div className="col-3">hello</div>
        </div>
      </div>
    );
  }
}

export default landing;
