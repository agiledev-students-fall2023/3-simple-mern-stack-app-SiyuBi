import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`).then(response => {
            setAboutData(response.data.aboutData)
            
          })
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
      <br></br>
        <p>{aboutData.paragraph}</p>
        <br></br>
      {/* <img src={require(aboutData.picture)} /> */}
      <img src={require(`./${aboutData.picture}`)} height={'400px'}/>
      
    </div>
  );
};

export default About;