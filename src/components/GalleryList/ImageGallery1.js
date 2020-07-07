import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import Menu from "../Menu";
import images from "../../G1";
import { Link } from "react-router-dom";

export default class MyGallery1 extends Component {
  render() {
    return (
      <>
        <div className="gallery">
          <Menu />
          <ImageGallery items={images} />
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
