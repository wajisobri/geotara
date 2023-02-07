import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import ArticleDatatable from "./ArticleDatatable";

const DataArticle = () => {
  return (
    <Fragment>
      <PageTitle
        activeMenu="TabelArtikel"
        motherMenu="Table"
        pageContent="TabelArtikel"
      />
      <div className="row">
        <ArticleDatatable />
      </div>
    </Fragment>
  );
};

export default DataArticle;
