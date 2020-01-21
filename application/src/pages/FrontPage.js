import React from "react";

const Frontpage = props => {
  let page = props.match.params.page;
  console.log(page);
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-md-12">
          <h1>Frontpage {page}</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Frontpage;
