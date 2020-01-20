import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function Button(expanded, setExpanded) {



  return (
    <div>
        <button onClick={() => setExpanded = true}>
          {console.log(expanded)}
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
    </div>
  );
}

export default Button;
