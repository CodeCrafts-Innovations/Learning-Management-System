import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaChartBar,
  FaToolbox,
  FaClipboardCheck,
  FaListAlt,
} from "react-icons/fa"; // Import FontAwesome icons
import Grades from "./Grades";
import Assessments from "./Assessments";
import Tools from "./Tools";
import Report from "./Report";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import "./CSS/Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <Router>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/">
                <FaHome /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/courses">
                <FaBook /> Courses Library
              </Link>
            </li>
            <li>
              <Link to="/reports">
                <FaChartBar /> Reporting and Analysis
              </Link>
            </li>
            <li>
              <Link to="/tools">
                <FaToolbox /> Tools
              </Link>
            </li>
            <li>
              <Link to="/assessments">
                <FaClipboardCheck /> Assessments
              </Link>
            </li>
            <li>
              <Link to="/grades">
                <FaListAlt /> Grades
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/grades" element={<Grades />} />
          </Routes>
        </div >
      </Router>
    </div>
  );
};

export default Sidebar;
