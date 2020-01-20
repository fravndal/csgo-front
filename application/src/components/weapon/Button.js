import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function Button() {
  const [expanded, setExpanded] = useState(false);

  const updateState = boolean => {
    if (boolean !== expanded) {
      setExpanded(boolean);
    }
  };

  return (
    <div>
      {expanded ? (
        <button onClick={() => updateState(false)}>
          <FaChevronUp />
        </button>
      ) : (
        <button onClick={() => updateState(true)}>
          <FaChevronDown />
        </button>
      )}
    </div>
  );
}

export default Button;
