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
        <h3 className="loading-text">Downloading files...</h3>
      ) : (
        <div className="download-content">
          <h3 className="ready-text">Your download is ready!</h3>
          <a href="/RAWGAMES-DOWNLOAD.pdf" download> <button className="download-button">Download PDF</button></a> 

          <iframe
            src="/RAWGAMES-DOWNLOAD.pdf#toolbar=0"
            className="pdf-frame"
            title="Game PDF"
          />
        </div>
      )}
    </div>
  );
};

export default Download;
