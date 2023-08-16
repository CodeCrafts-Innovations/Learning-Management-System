import React, { useState } from "react";
import "./CSS/Course.css";
import CSharp from "./images/CSharp.jpg";
import Angular from "./images/Angular.png";
import DotNetCore from "./images/DotNetCore.png";
import Java from "./images/Java.jpg";
import javaScript from "./images/javaScript.png";
import SQL from "./images/SQL.png";


const coursesData = [
  {
    id: 1,
    title: "C# Programming",
    description: "Dive into the world of C# programming.",
    imageUrl: CSharp,
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description: "Learn the basics of JavaScript programming.",
    imageUrl: javaScript,
  },
  {
    id: 3,
    title: "Angular Development",
    description: "Explore modern web development with Angular framework.",
    imageUrl: Angular,
  },
  {
    id: 4,
    title: "Java Programming",
    description: "Learn the fundamentals of Java programming language.",
    imageUrl: Java,
  },
  {
    id: 5,
    title: "SQL Fundamentals",
    description:
      "Master the basics of SQL for database querying and management",
    imageUrl: SQL,
  },
  {
    id: 6,
    title: ".NET Core Development",
    description:
      "Build cross-platform applications using the powerful .NET Core framework",
    imageUrl: DotNetCore,
  },
];

const CourseCard = ({ course, enrolled, onToggleEnroll }) => {
  return (
    <div className="course-card">
      <div className="image-container">
        <img src={course.imageUrl} alt="course" />
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
      <button onClick={onToggleEnroll}>
        {enrolled ? "Unenroll" : "Enroll"}
      </button>
    </div>
  );
};

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleToggleEnroll = (courseId) => {
    if (enrolledCourses.includes(courseId)) {
      setEnrolledCourses(enrolledCourses.filter((id) => id !== courseId));
    } else {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-container">
      <div className="courses-container">
          <h1 className="allCourses">All Courses</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for courses"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">Search</button>
        </div>
        <div className="course-list">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              enrolled={enrolledCourses.includes(course.id)}
              onToggleEnroll={() => handleToggleEnroll(course.id)}
            />
            
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
