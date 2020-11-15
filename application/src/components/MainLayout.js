import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout(props) {
  return (
    <React.Fragment>
      <Header />

      {props.children}
      <Footer />
    </React.Fragment>
  );
}
