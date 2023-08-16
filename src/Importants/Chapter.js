// Chapter.js
import React from 'react';

const Chapter = ({ chapter, onChapterClick }) => {
  return (
    <div className="chapter" onClick={onChapterClick}>
      <h4>{chapter.title}</h4>
      <p>{chapter.content}</p>
      {/* Render videos, paragraphs, documents */}
    </div>
  );
};

export default Chapter;
