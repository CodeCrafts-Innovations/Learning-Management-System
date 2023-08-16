// import React, { useState } from "react";
// import "./Courses.css";

// const coursesData = [
//   {
//     id: 1,
//     title: "Course 1",
//     description: "Description for Course 1",
//     videoUrl: "https://youtu.be/uvtkwOpwAYU",
//   },
//   {
//     id: 2,
//     title: "Course 2",
//     description: "Description for Course 2",
//     videoUrl: "https://example.com/course2-video-url",
//   },
//   {
//     id: 3,
//     title: "Course 3",
//     description: "Description for Course 1",
//     videoUrl: "https://example.com/course1-video-url",
//   },
//   {
//     id: 4,
//     title: "Course 4",
//     description: "Description for Course 1",
//     videoUrl: "https://example.com/course1-video-url",
//   },
//   {
//     id: 5,
//     title: "Course 5",
//     description: "Description for Course 1",
//     videoUrl: "https://example.com/course1-video-url",
//   },
//   // Add more courses as needed
// ];

// const CourseCard = ({ course, enrolled, onToggleEnroll }) => {
//   return (
//     <div className="course-card">
//       <video src={course.videoUrl} controls />
//       <h3>{course.title}</h3>
//       <p>{course.description}</p>
//       <button className="enrol" onClick={onToggleEnroll}>
//         {enrolled ? "Unenroll" : "Enroll"}
//       </button>
//     </div>
//   );
// };

// const Courses = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   const handleToggleEnroll = (courseId) => {
//     if (enrolledCourses.includes(courseId)) {
//       setEnrolledCourses(enrolledCourses.filter((id) => id !== courseId));
//     } else {
//       setEnrolledCourses([...enrolledCourses, courseId]);
//     }
//   };

//   const filteredCourses = coursesData.filter((course) =>
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
    
//       <div className="courses-container">  
//       <div className=" same-align">
//       <h1>All Courses</h1>
//         <div className="search-bar">
        
//           <input
//             type="text"
//             placeholder="Search for courses"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}

//           /> <button>Search</button>
          
//            </div>   
//         </div>
//         <div className="course-list">
//           {filteredCourses.map((course) => (
//             <CourseCard
//               key={course.id}
//               course={course}
//               enrolled={enrolledCourses.includes(course.id)}
//               onToggleEnroll={() => handleToggleEnroll(course.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Courses;
