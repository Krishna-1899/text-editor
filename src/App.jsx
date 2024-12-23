import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Editor from './components/Editor';
import NewsList from './components/NewsList';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Editor</Link> | <Link to="/news">News List</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Editor />} />
      <Route path="/news" element={<NewsList />} />
    </Routes>
  </Router>
);

export default App;
