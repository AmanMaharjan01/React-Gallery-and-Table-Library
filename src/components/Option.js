import React from "react";
import { withRouter } from "react-router-dom";
import "../App.css";

function Option({ history }) {
  function gotogallery() {
    history.replace("/gallery");
  }
  function gototable() {
    history.replace("/table");
  }
  return (
    <div>
      <div className="option">
        <div id="gallery" onClick={() => gotogallery()}>
          <img src="./img/logo1.png" alt="gallery logo" />
          <img src="./img/gallery.png" alt="gallery logo" />
        </div>
        <div id="table" onClick={() => gototable()}>
          <img src="./img/tables.png" alt="table logo" />
          <img src="./img/table.png" alt="table logo" />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Option);
