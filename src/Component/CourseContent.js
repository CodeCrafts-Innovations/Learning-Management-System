// CourseContent.js
import React, { useState } from 'react';
import CourseChapter from './CourseChapter';



const CourseContent = ({ content }) => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleSelectChapter = chapterIndex => {
    setSelectedChapter(chapterIndex);
  };

  return (
    <div className="course-content">
      {content.map((chapter, index) => (
        <CourseChapter
          key={index}
          chapter={chapter}
          onSelectChapter={() => handleSelectChapter(index)}
        />
      ))}
      {selectedChapter !== null && (
        <div className="chapter-content">
          {content[selectedChapter].items.map((item, index) => (
            <div key={index} className={`content-item ${item.type}`}>
              {item.type === 'video' && <iframe src={item.content} title={`Video ${index}`} />}
              {item.type === 'text' && <p>{item.content}</p>}
              {item.type === 'slides' && <iframe src={item.content} title={`Slides ${index}`} />}
              {item.type === 'document' && (
                <a href={item.content} target="_blank" rel="noopener noreferrer">
                  Document {index}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseContent;

