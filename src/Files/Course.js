// import React, { useState } from 'react';

// const coursesData = [
//   {
//     id: 1,
//     title: 'Course 1',
//     description: 'Description for Course 1',
//     imageUrl: 'https://example.com/course1-image-url',
//     content: [
//       { chapter: 'Introduction', type: 'text' },
//       { chapter: 'Getting Started', type: 'video' },
//       // Add more chapters and content as needed
//     ],
//   },
//   {
//     id: 2,
//     title: 'Course 2',
//     description: 'Description for Course 2',
//     imageUrl: 'https://example.com/course2-image-url',
//     content: [
//       { chapter: 'Chapter 1', type: 'video' },
//       { chapter: 'Chapter 2', type: 'text' },
//       // Add more chapters and content as needed
//     ],
//   },
//   // Add more courses as needed
// ];

// const CourseCard = ({ course, onToggleEnroll, onViewContent }) => {
//   return (
//     <div className="course-card">
//       <img src={course.imageUrl} alt={course.title} />
//       <h3>{course.title}</h3>
//       <p>{course.description}</p>
//       <button onClick={onToggleEnroll}>
//         {course.enrolled ? 'Unenroll' : 'Enroll'}
//       </button>
//       <button onClick={() => onViewContent(course.id)}>View Content</button>
//     </div>
//   );
// };

// const CourseChapter = ({ chapter }) => {
//   return (
//     <div className="course-chapter">
//       <h4>{chapter.chapter}</h4>
//       <p>Type: {chapter.type}</p>
//       {/* Render videos, texts, quizzes, etc. for this chapter */}
//     </div>
//   );
// };

// const Courses = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const handleToggleEnroll = courseId => {
//     if (enrolledCourses.includes(courseId)) {
//       setEnrolledCourses(enrolledCourses.filter(id => id !== courseId));
//     } else {
//       setEnrolledCourses([...enrolledCourses, courseId]);
//     }
//   };

//   const handleViewContent = courseId => {
//     setSelectedCourse(courseId);
//   };

//   const filteredCourses = coursesData.filter(course =>
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="courses-container">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for courses"
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className="course-list">
//         {filteredCourses.map(course => (
//           <CourseCard
//             key={course.id}
//             course={course}
//             onToggleEnroll={() => handleToggleEnroll(course.id)}
//             onViewContent={() => handleViewContent(course.id)}
//           />
//         ))}
//       </div>
//       {selectedCourse !== null && (
//         <div className="course-content">
//           {coursesData.map(course => {
//             if (course.id === selectedCourse) {
//               return (
//                 <div key={course.id}>
//                   <h2>{course.title} Content</h2>
//                   {course.content.map((chapter, index) => (
//                     <CourseChapter key={index} chapter={chapter} />
//                   ))}
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Courses;
