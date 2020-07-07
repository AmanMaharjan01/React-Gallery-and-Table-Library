import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export class Gallery extends Component {
  render() {
    return (
      <div className="gallery-intro">
        <img src="./img/logo1.png" alt="gallery logo" />
        <Link to="/g1">
          <button>Check now</button>
        </Link>
      </div>
    );
  }
}

export default Gallery;
