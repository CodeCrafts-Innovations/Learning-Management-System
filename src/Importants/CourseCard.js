// CourseCard.js
import React from 'react';

const CourseCard = ({ course, onEnrollToggle, onCourseClick }) => {
  return (
    <div className="course-card" onClick={() => onCourseClick(course.id)}>
      <img src={course.imageUrl} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button onClick={() => onEnrollToggle(course.id)}>
        {course.enrolled ? 'Unenroll' : 'Enroll'}
      </button>
    </div>
  );
};

export default CourseCard;
