import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Menu from "../Menu";
import photos from "../../G2.js";
import { Link } from "react-router-dom";
import "../../App.css";

export class Gallery2 extends Component {
  render() {
    return (
      <>
        <div>
          <Menu />
          <Gallery photos={photos} />;
        </div>
        <Link to="/">
          <button id="return">
            <i class="fas fa-arrow-circle-left"></i> Home
          </button>
        </Link>
      </>
    );
  }
}

export default Gallery2;
