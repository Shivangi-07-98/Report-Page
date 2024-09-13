import React from 'react'
import './Top.scss'

function Top() {
  return (
    <>
    <div className='top1'>
      <div className='top1-text'>Medical Checkup</div>
      <div className='top1-icon'><i class="fa-solid fa-greater-than"></i></div>
    </div>

      <div className="top2">
      <div className="step completed">
        <div className="icon green-check">&#10004;</div>
        <p>STEP 1</p>
        <h4>Medical data</h4>
      </div>

      <div className="line active"></div>

      <div className="step active">
        <div className="icon blue-camera">&#128247;</div>
        <p>STEP 2</p>
        <h4>Treatment Plan</h4>
      </div>

      <div className="line"></div>

      <div className="step">
        <div className="icon gray-check">&#128100;</div>
        <p>STEP 3</p>
        <h4>Oral Check</h4>
      </div>

      <div className="line"></div>

      <div className="step">
        <div className="icon gray-check">&#128221;</div>
        <p>STEP 4</p>
        <h4>Plan Agreement</h4>
      </div>
    </div>

    <div className='top3'>
    <div className="medical-service-container">
      {/* Notification Banner */}
      <div className="notification-banner">
        <div className="info-icon">i</div>
        <span>Patient & Medical data are based on previous check, you can update it according to the latest data.</span>
      </div>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        <div className="circle filled">1</div>
        <div className="line"></div>
        <div className="circle">2</div>
      </div>

      {/* Heading and Subheading */}
      <div className="content-section">
        <h2>Medical service</h2>
        <p>Select a problem tooth</p>
      </div>
    </div>

    </div>
    </>
  )
}

export default Top