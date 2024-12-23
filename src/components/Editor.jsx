import React, { useState } from 'react';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from '../services/api';

const Editor = () => {
  const [content, setContent] = useState('');

  const handleSave = async () => {
    try {
      await axios.post('/news', { content });
      alert('News saved successfully!');
    } catch (error) {
      console.error('Error saving news:', error);
      alert('Failed to save news.');
    }
  };

  return (
    <div>
      <h1>News Editor</h1>
      <Quill value={content} onChange={setContent} modules={{
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ 'header': [1, 2, 3, false] }],
          ['link', 'image'],
          ['clean'],
          ['code-block'],
          ['blockquote'],
          ['code-block'],
        ],
      }} />
      <button onClick={handleSave}>Save News</button>
    </div>
  );
};

export default Editor;
