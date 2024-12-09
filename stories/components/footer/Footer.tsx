import React from 'react';
import './footer.css';
import config from '../../../config.json';
import { TextAnim } from "../Components";
 
const delay = config.delay;

export const Footer = () => {   
  return (
    <div className="footer" data-bs-theme="dark">
      <div className="footer-content">
        <span className="date">
          <TextAnim typeText={`© ${new Date().getFullYear()} ${config.name}. All rights reserved.`} delay={delay} />            
          </span>        
      </div>
    </div>
  );
};