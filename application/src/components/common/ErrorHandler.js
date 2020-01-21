import React from "react";
import PropTypes from "prop-types";

export default function ErrorHandler({ errorMessage }) {
  return (
    <div>
      <p>{errorMessage}</p>
    </div>
  );
}
ErrorHandler.propTypes = {
  textString: PropTypes.string
};
ErrorHandler.defaultProps = {
  textString: "Error..."
};
