import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/about'); // Assuming this is the correct route
        setAboutData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="About">
      <h1>About</h1>
      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <img src={aboutData.picture} />
    </div>
  );
};

export default About;