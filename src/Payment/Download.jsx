import React, { useEffect, useState } from 'react';
import './Download.css'; 

const Download = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);}, 5000);          //After 5 seconds the loading will be false then it will render the PDF display. I added the 5 second timer to give off the effect that actual gaming files are being downloaded. 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="download-container">
      {loading ? (                         //The turnery operator that displays 'downloading files...' if the loading is true, then 'download-content' if loading is false
        <h3 className="loading-text">Loading files...</h3>
      ) : (
        <div className="download-content">
          <h3 className="ready-text">Your download is ready!</h3>
          <a href="/RAWGAMES-DOWNLOAD.pdf" download> <button className="download-button">Download PDF</button></a> 
          <h4 className='letter-title'> Dear Customer</h4>
          <p className='paragraph-element'> Unfortunately, this is only a school assignment, so no actual gaming content can be downloaded. We at RAW GAMES (Matalame Mamabolo)
            appreciate your interest in our efficient gaming shopping experience and hope all your needs have been met.</p>
          <p className='paragraph-element'> To make up for the lack of downloadable content, we have provided a pdf that consists of existing, relevant stores that offer original and licensed gaming
            applications.</p>
          <p className='paragraph-element'>If you have any further queries or issues, please leave a comment in the DIGA4015A exam portal, and we will respond as soon as we can.</p>
        </div>
      )}
    </div>
  );
};

export default Download;
