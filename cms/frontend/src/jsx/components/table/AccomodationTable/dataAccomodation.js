import React, { Fragment } from "react";
import PageTitle from "../../../layouts/PageTitle";
import AccomodationDatatable from "./AccomodationDatatable";

const DataAccomodation = () => {
  return (
    <Fragment>
      <PageTitle
        activeMenu="Accomodation Table"
        motherMenu="Table"
        pageContent="Accomodation Table"
      />
      <div className="row">
        <AccomodationDatatable />
      </div>
    </Fragment>
  );
};

export default DataAccomodation;
