// import "./styles.css";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import Section from "./Section";

// import Footer from "./Description";
import Description from "./Description";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Content />
      <Section />
      <Description />
    </div>
  );
};

export default App;
