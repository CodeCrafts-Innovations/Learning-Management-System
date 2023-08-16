import React, { useState } from 'react';
import './CourseComponent.css'; // Import the CSS file for styling

const coursesData = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React framework.',
    imageUrl: 'url_to_image_1.jpg',
    chapters: [
      { id: 1, title: 'Getting Started', content: 'Introductory content here...' },
      // More chapters...
    ],
  },
  // More course objects...
];

const CourseComponent = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const renderCourses = () => {
    return coursesData.map((course) => (
      <div key={course.id} className="course-card">
        <img src={course.imageUrl} alt={course.title} />
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <button onClick={() => handleCourseClick(course)}>
          {selectedCourse === course ? 'Hide Content' : 'View Content'}
        </button>
      </div>
    ));
  };

  const renderCourseContent = () => {
    if (selectedCourse) {
      return (
        <div className="course-content">
          {selectedCourse.chapters.map((chapter) => (
            <div key={chapter.id} className="chapter">
              <h4>{chapter.title}</h4>
              <p>{chapter.content}</p>
              {/* Add video components here */}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="course-container">
      <div className="search-bar">
        {/* Add search bar components */}
      </div>
      <div className="courses-list">{renderCourses()}</div>
      {renderCourseContent()}
    </div>
  );
};

export default CourseComponent;
