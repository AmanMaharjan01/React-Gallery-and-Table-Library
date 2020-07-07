import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import Menu from "../Menu";
import IMAGES from "../../G3.js";
import { Link } from "react-router-dom";

class MyGallery3 extends Component {
  render() {
    return (
      <>
        <Menu />
        <Gallery images={IMAGES} />
        <Link to="/">
          <button id="return">
            <i class="fas fa-arrow-circle-left"></i> Home
          </button>
        </Link>
      </>
    );
  }
}

export default MyGallery3;
