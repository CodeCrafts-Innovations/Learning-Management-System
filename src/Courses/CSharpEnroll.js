import React, { useState } from 'react';

const coursesData = [
  {
    id: 1,
    title: 'Course 1',
    description: 'Description for Course 1',
    videoUrl: 'https://example.com/course1-video-url',
  },
  {
    id: 2,
    title: 'Course 2',
    description: 'Description for Course 2',
    videoUrl: 'https://example.com/course2-video-url',
  },
  
];

const CourseCard = ({ course, enrolled, onToggleEnroll }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <video src={course.videoUrl} controls />
      <button onClick={onToggleEnroll}>
        {enrolled ? 'Unenroll' : 'Enroll'}
      </button>
    </div>
  );
};

const CSharpEnroll = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  
  const handleToggleEnroll = courseId => {
    if (enrolledCourses.includes(courseId)) {
      setEnrolledCourses(enrolledCourses.filter(id => id !== courseId));
    } else {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
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
            enrolled={enrolledCourses.includes(course.id)}
            onToggleEnroll={() => handleToggleEnroll(course.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CSharpEnroll;

