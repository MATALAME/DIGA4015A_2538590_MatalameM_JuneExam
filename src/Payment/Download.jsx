import React, { useEffect, useState } from 'react';
import './Download.css'; 
import DownloadComp from '../Additional/DownloadComp';

import notice from "../Images/NoticeIcon.jpg";
import design from "../Images/Design.jpg";
import reference from "../Images/Reference.jpg";

const files = [
  {
    title: 'NOTICE PDF',
    image: notice,
    file: '/DIGA4015A_2538590_NOTICE.pdf'
  },
  {
    title: 'DESIGN DOC PDF',
    image: design,
    file: '/DIGA4015A_2538590_DESIGNDOC.pdf'
  },
  {
    title: 'REFERENCE LIST PDF',
    image: reference,
    file: '/DIGA4015A_2538590_ReferenceList.pdf'
  }
];


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
           <div className="download-card-container">
            {files.map((file, index) => (
              <DownloadComp key={index} title={file.title} image={file.image} file={file.file} />
            ))}
          </div>

          <h4 className='letter-title'> Dear Customer</h4>
          <p className='paragraph-element'> Unfortunately, this is only a school assignment, so no actual gaming content can be downloaded. We at RAW GAMES (Matalame Mamabolo)
            appreciate your interest in our efficient gaming shopping experience and hope all your needs have been met.</p>
        </div>
      )}
    </div>
  );
};

export default Download;
