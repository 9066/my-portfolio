import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import Typed from 'react-typed';


const header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web Developer</h1>
        <Typed className="typed-text"
         strings={["web design","web development","Software Engineer","DevOps"]}
         typeSpeed={40}
         backSpeed={60}
         loop
        />
        <a href="#" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  );
};

export default header;
