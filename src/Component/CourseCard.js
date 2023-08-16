// // CourseCard.js
// import React from 'react';

// const CourseCard = ({ course, onToggleEnroll, onViewContent }) => {
//   return (
//     <div className="course-card">
//       <img src={course.imageUrl} alt={course.title} />
//       <h3>{course.title}</h3>
//       <p>{course.description}</p>
//       <button onClick={onToggleEnroll}>
//         {course.enrolled ? 'Unenroll' : 'Enroll'}
//       </button>
//       <button onClick={onViewContent}>View Content</button>
//     </div>
//   );
// };

// CourseCard.propTypes = {
//   course: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
//   onToggleEnroll: PropTypes.func.isRequired,
//   onViewContent: PropTypes.func.isRequired,
// };

// export default CourseCard;
