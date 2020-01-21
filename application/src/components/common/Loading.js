import React from "react";
import PropTypes from "prop-types";

export default function Loading({ textString }) {
  return (
    <div>
      <p>{textString}</p>
    </div>
  );
}
Loading.propTypes = {
  textString: PropTypes.string
};
Loading.defaultProps = {
  textString: "Loading..."
};
