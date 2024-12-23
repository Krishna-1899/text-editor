import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>All News</h1>
      {news.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
