// src/components/BottomNavigation.js
import React from 'react';
import './Bottom.scss';

function BottomNavigation() {
  return (
    <div className="bottom-nav-container">
      {/* Indicator Labels */}
      <div className="indicator-section">
        <div className="indicator">
          <span className="red-dot"></span>
          <p>Recent findings</p>
        </div>
        <div className="indicator">
          <span className="blue-dot"></span>
          <p>Has treatment before</p>
        </div>
        <div className="indicator">
          <span className="yellow-dot"></span>
          <p>Recommended to be treated</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons-section">
        <button className="cancel-btn">Cancel</button>
        <button className="previous-btn">Previous</button>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

export default BottomNavigation;
