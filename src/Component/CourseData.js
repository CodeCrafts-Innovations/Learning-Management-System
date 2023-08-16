const coursesData = [
    {
        id: 1,
        title: 'Course 1',
        description: 'Description for Course 1',
        imageUrl: 'https://example.com/course1-image-url',
        content: [
          {
            chapter: 'Introduction',
            items: [
              { type: 'video', content: 'https://example.com/intro-video' },
              { type: 'text', content: 'Introduction text...' },
            ],
          },
          {
            chapter: 'Getting Started',
            items: [
              { type: 'video', content: 'https://example.com/getting-started-video' },
              { type: 'text', content: 'Getting started text...' },
              { type: 'slides', content: 'https://example.com/getting-started-slides' },
              { type: 'document', content: 'https://example.com/getting-started-doc' },
            ],
          },
          // Add more chapters and content as needed
        ],
      },
      {
        id: 2,
        title: 'Course 2',
        description: 'Description for Course 2',
        imageUrl: 'https://example.com/course2-image-url',
        content: [
           {
            chapter: 'Introduction',
            items: [
              { type: 'video', content: 'https://example.com/intro-video' },
              { type: 'text', content: 'Introduction text...' },
            ],
          },
          {
            chapter: 'Getting Started',
            items: [
              { type: 'video', content: 'https://example.com/getting-started-video' },
              { type: 'text', content: 'Getting started text...' },
              { type: 'slides', content: 'https://example.com/getting-started-slides' },
              { type: 'document', content: 'https://example.com/getting-started-doc' },
            ],
          },
        ],
      },
      // Add more courses as needed
];

export default coursesData;