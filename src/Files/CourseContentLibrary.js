import React from 'react';

const CourseContentLibrary = ({ content }) => {
  return (
    <div className="course-content-library">
      <h2>Course Content Library</h2>
      <ul>
        {content.map((item, index) => (
          <li key={index}>
            <span className="content-title">{item.title}</span>
            <span className="content-type">{item.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseContentLibrary;
