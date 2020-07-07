import React, { Component } from "react";
import data from "../table.js";
import "../App.css";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

export class Tables extends Component {
  render() {
    const columns = ["Name", "Company", "District", "Zone"];

    const options = {
      filterType: "checkbox",
    };

    return (
      <>
        <div className="table">
          <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
          />
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

export default Tables;
