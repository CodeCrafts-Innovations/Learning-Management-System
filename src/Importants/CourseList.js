// CourseList.js
import React from 'react';
import CourseCard from './CourseCard';

const CourseList = ({ courses, onEnrollToggle, onCourseClick }) => {
  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
          onEnrollToggle={onEnrollToggle}
          onClick={onCourseClick}
        />
      ))}
    </div>
  );
};

export default CourseList;
