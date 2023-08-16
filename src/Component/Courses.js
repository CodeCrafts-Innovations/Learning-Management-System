// Courses.js
import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CourseContent from './CourseContent';
import coursesData from './coursesData';



const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleToggleEnroll = courseId => {
    if (enrolledCourses.includes(courseId)) {
      setEnrolledCourses(enrolledCourses.filter(id => id !== courseId));
    } else {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  const handleViewContent = courseId => {
    setSelectedCourse(courseId);
  };

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-container">
      <div className="search-bar">
      <input
          type="text"
          placeholder="Search for courses"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="course-list">
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onToggleEnroll={() => handleToggleEnroll(course.id)}
            onViewContent={() => handleViewContent(course.id)}
          />
        ))}
      </div>
      {selectedCourse !== null && (
        <CourseContent content={coursesData[selectedCourse - 1].content} />
      )}
    </div>
  );
};

export default Courses;
