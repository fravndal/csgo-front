import React from "react";
import PropTypes from "prop-types";
import errorImage from "../../img/networkerror.png";

export default function ErrorHandler({ errorMessage }) {
  return (
    <div>
      <img
        src={errorImage}
        alt="error"
        style={{
          display: "block",
          height: "200px",
          width: "250px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px, 20px"
        }}
      />
      <p
        style={{
          fontSize: "40px",
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        {errorMessage}
      </p>
      <div
        style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <a
          style={{
            fontSize: "40px",

            fontWeight: "bold",
            textDecoration: "none"
          }}
          href="/weapons"
        >
          Try Again
        </a>
      </div>
    </div>
  );
}
ErrorHandler.propTypes = {
  textString: PropTypes.string
};
ErrorHandler.defaultProps = {
  textString: "Error..."
};
