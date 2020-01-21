import React from "react";

const About = props => {
  let page = props.match.params.page;
  console.log(page);
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-md-12">
          <h1>ABOUT! side {page}</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
