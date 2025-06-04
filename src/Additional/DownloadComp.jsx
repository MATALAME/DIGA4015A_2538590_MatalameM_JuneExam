import React from 'react';
import "./DownloadComp.css"

const DownloadComp = ({ title, image, file }) => {
  return (
    <div className="download-card">
      <img src={image} alt={title} className="download-card-image" />
      <h4 className="download-card-title">{title}</h4>
      <a href={file} download>
        <button className="download-card-button">Download PDF</button>
      </a>
    </div>
  );
};

export default DownloadComp;
