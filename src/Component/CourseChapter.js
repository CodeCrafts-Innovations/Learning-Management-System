// CourseChapter.js
import React from 'react';

const CourseChapter = ({ chapter, onSelectChapter }) => {
  return (
    <div className="course-chapter" onClick={onSelectChapter}>
      <h4>{chapter.chapter}</h4>
    </div>
  );
};

export default CourseChapter;
