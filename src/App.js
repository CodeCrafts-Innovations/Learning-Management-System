import React from "react";
import Sidebar from "./Sidebar";
// import CourseComponent from "./CourseComponent";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
};

export default App;

// // App.js
// import React, { useState } from 'react';
// import coursesData from './coursesData';
// import CourseCard from './CourseCard';
// import CourseContent from './CourseContent';
// import Chapter from './Chapter'

// import './styles.css'; // Import your CSS file

// const App = () => {
//   const [courses, setCourses] = useState(coursesData);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedChapter, setSelectedChapter] = useState(null);

//   const handleEnrollToggle = courseId => {
//     setCourses(prevCourses =>
//       prevCourses.map(course =>
//         course.id === courseId
//           ? { ...course, enrolled: !course.enrolled }
//           : course
//       )
//     );
//   };

//   const handleCourseClick = courseId => {
//     setSelectedCourse(courses.find(course => course.id === courseId));
//     setSelectedChapter(null);
//   };

//   const handleChapterClick = chapter => {
//     setSelectedChapter(chapter);
//   };

//   return (
//     <div className="app">
//       <div className="course-list">
//         {courses.map(course => (
//           <CourseCard
//             key={course.id}
//             course={course}
//             onEnrollToggle={handleEnrollToggle}
//             onCourseClick={handleCourseClick}
//           />
//         ))}
//       </div>
//       <div className="course-details">
//         {selectedCourse && (
//           <CourseContent
//             course={selectedCourse}
//             onChapterClick={handleChapterClick}
//           />
//         )}
//         {selectedChapter && (
//           <Chapter chapter={selectedChapter} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
