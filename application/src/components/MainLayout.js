import React from "react";
import Header from "./Header";

export default function MainLayout(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
}
