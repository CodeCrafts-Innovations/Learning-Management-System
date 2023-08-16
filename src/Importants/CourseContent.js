// CourseContent.js
import React from 'react';
import Chapter from './Chapter';

const CourseContent = ({ course, onChapterClick }) => {
  return (
    <div className="course-content">
      {course.chapters.map(chapter => (
        <Chapter
          key={chapter.id}
          chapter={chapter}
          onChapterClick={() => onChapterClick(chapter)}
        />
      ))}
    </div>
  );
};

export default CourseContent;
