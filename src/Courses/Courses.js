import React from "react";
import "../CSS/Course.css";
import CSharp from "../images/CSharp.jpg";
import Angular from "../images/Angular.png";
import DotNetCore from "../images/DotNetCore.png";
import Java from "../images/Java.jpg";
import javaScript from "../images/javaScript.png";
import SQL from "../images/SQL.png";
import Sidebar from "../Sidebar";

const Courses = () => {
  return (
    
    <div className="cards">
      <h1>Courses</h1>
      <div className="cSharp-card">
        <h2>C# Programming</h2>
        <p>Dive into the world of C# programming</p>
        <img src={CSharp} alt="c#" />
      </div>

      <div className="Angular-card">
        <h2>C# Programming</h2>
        <p>Dive into the world of C# programming</p>
        <img src={Angular} alt="c#" />
      </div>

      <div className="DotNetCore-card">
        <h2>C# Programming</h2>
        <p>Dive into the world of C# programming</p>
        <img src={DotNetCore} alt="c#" />
      </div>

      <div className="Java-card">
        <h2>C# Programming</h2>
        <p>Dive into the world of C# programming</p>
        <img src={Java} alt="c#" />
      </div>

      <div className="javaScript-card">
        <h2>C# Programming</h2>
        <p>Dive into the world of C# programming</p>
        <img src={javaScript} alt="c#" />
      </div>

      <div className="SQL-card">
        <h2>C# Programming</h2>
        <p>Dive into the world of C# programming</p>
        <img src={SQL} alt="c#" />
      </div>
    </div>
  );
};

export default Courses;
