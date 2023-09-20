import React, { useState } from "react";
import "../CSS/Course.css";
import CSharp from "../images/CSharp.jpg";
import Angular from "../images/Angular.png";
import DotNetCore from "../images/DotNetCore.png";
import Java from "../images/Java.jpg";
import javaScript from "../images/javaScript.png";
import SQL from "../images/SQL.png";

const coursesData = [
  {
    id: 1,
    title: "C# Programming",
    description: "Dive into the world of C# programming.",
    imageUrl: CSharp,
    content: [
      {
        module: "Introduction to C#",
        lessons: [
          "Getting Started with C#",
          "Variables and Data Types",
        ],
      },
      {
        module: "Control Structures",
        lessons: [
          "Conditional Statements",
          "Loops",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description: "Learn the basics of JavaScript programming.",
    imageUrl: javaScript,
    content: [
      {
        module: "Introduction to JavaScript",
        lessons: [
          "JavaScript Basics",
          "Variables and Data Types",
        ],
      },
      {
        module: "Functions and Scope",
        lessons: [
          "Functions",
          "Scope and Closures",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Angular Development",
    description: "Explore modern web development with Angular framework.",
    imageUrl: Angular,
    content: [
      {
        module: "Introduction to Angular",
        lessons: [
          "Getting Started with Angular",
          "Components and Templates",
        ],
      },
      {
        module: "Advanced Topics",
        lessons: [
          "Services",
          "Routing and Navigation",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Java Programming",
    description: "Learn the fundamentals of Java programming language.",
    imageUrl: Java,
    content: [
      {
        module: "Introduction to Java",
        lessons: [
          "Java Basics",
          "Object-Oriented Programming",
        ],
      },
      {
        module: "Working with Java APIs",
        lessons: [
          "Collections",
          "File Handling",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "SQL Fundamentals",
    description: "Master the basics of SQL for database querying and management.",
    imageUrl: SQL,
    content: [
      {
        module: "Introduction to SQL",
        lessons: [
          "Database Basics",
          "SQL Queries",
        ],
      },
      {
        module: "Advanced SQL",
        lessons: [
          "Joins",
          "Indexes and Optimization",
        ],
      },
    ],
  },
  {
    id: 6,
    title: ".NET Core Development",
    description: "Build cross-platform applications using the powerful .NET Core framework.",
    imageUrl: DotNetCore,
    content: [
      {
        module: "Introduction to .NET Core",
        lessons: [
          "Getting Started with .NET Core",
          "ASP.NET Core Basics",
        ],
      },
      {
        module: "Web APIs",
        lessons: [
          "Building RESTful APIs",
          "Authentication and Authorization",
        ],
      },
    ],
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
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleToggleEnroll = (courseId) => {
    if (enrolledCourses.includes(courseId)) {
      setEnrolledCourses(enrolledCourses.filter((id) => id !== courseId));
      setSelectedCourse(null);
    } else {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-container">
      <h1 className="allCourses">All Courses</h1>
      {!selectedCourse && (
        <div>
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
                onToggleEnroll={() => {
                  handleToggleEnroll(course.id);
                  setSelectedCourse(enrolledCourses.includes(course.id) ? null : course.id);
                }}
              />
            ))}
          </div>
        </div>
      )}
      {selectedCourse !== null && (
        <div className="course-content">
          <h2>Course Content</h2>
          {coursesData.find((course) => course.id === selectedCourse).content.map((module) => (
            <div key={module.module} className="content-module">
              <h3>{module.module}</h3>
              <ul>
                {module.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;