const CsharpCourses = [
    {
      id: 1,
      title: 'C# Beginers',
      description: 'Getting Started With C#',
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
          chapter: 'Chapter 1',
          items: [
            { type: 'video', content: 'https://example.com/chapter1-video' },
            { type: 'text', content: 'Chapter 1 text...' },
          ],
        },
        {
          chapter: 'Chapter 2',
          items: [
            { type: 'video', content: 'https://example.com/chapter2-video' },
            { type: 'text', content: 'Chapter 2 text...' },
            { type: 'slides', content: 'https://example.com/chapter2-slides' },
          ],
        },
        // Add more chapters and content as needed
      ],
    },
    // Add more courses as needed
  ];
  
  export default CsharpCourses;
  