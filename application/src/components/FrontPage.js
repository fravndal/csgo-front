import React from "react";
import Header from "./Header";

const Frontpage = props => {
  let page = props.match.params.page;
  console.log(page);
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="col-md-12">
          <h1>Frontpage {page}</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Frontpage;
