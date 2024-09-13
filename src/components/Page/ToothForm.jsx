import React, { useState } from 'react';
import './ToothForm.scss'; // Make sure to import the CSS file

const teethData = {
  11: 'Central Incisor',
  12: 'Lateral Incisor',
  13: 'Canine',
  14: '1st Premolar',
  15: '2nd Premolar',
  16: '1st Molar',
  17: '2nd Molar',
  18: '3rd Molar',
  21: 'Central Incisor',
  22: 'Lateral Incisor',
  23: 'Canine',
  24: '1st Premolar',
  25: '2nd Premolar',
  26: '1st Molar',
  27: '2nd Molar',
  28: '3rd Molar',
  31: 'Central Incisor',
  32: 'Lateral Incisor',
  33: 'Canine',
  34: '1st Premolar',
  35: '2nd Premolar',
  36: '1st Molar',
  37: '2nd Molar',
  38: '3rd Molar',
  41: 'Central Incisor',
  42: 'Lateral Incisor',
  43: 'Canine',
  44: '1st Premolar',
  45: '2nd Premolar',
  46: '1st Molar',
  47: '2nd Molar',
  48: '3rd Molar',
};

const ToothForm = ({ toothNumber, toothName }) => (
  <div className="tooth-form">
    <div className="tooth-header">
      <div className="tooth-info">
        <h2 className="tooth-name">{toothName}</h2>
        <p className="tooth-number"><span role="img" aria-label="tooth">🦷</span> {toothNumber}</p>
      </div>
    </div>
    <div className="tooth-details">
      <div className="form-group">
        <select className="form-select">
          <option value="">Select condition</option>
          <option value="healthy">Healthy</option>
          <option value="cavity">Cavity</option>
          <option value="gum-disease">Gum Disease</option>
          <option value="enamel-erosion">Enamel Erosion</option>
        </select>
      </div>
      <div className="form-group">
        <select className="form-select">
          <option value="">Select treatment</option>
          <option value="fill">Fill</option>
          <option value="extract">Extract</option>
          <option value="observe">Observe</option>
          <option value="root-canal">Root Canal</option>
          <option value="had-treatment-before">Had Treatment Before</option>
        </select>
      </div>
      <div className="form-group">
        <textarea type="text" placeholder="Note" className="note-input" />
      </div>
    </div>
    <div className="tooth-footer">
      <div className='delete-btn'>

        <i className="fa fa-trash"></i>
      </div>
      
      <button className="end">Save</button>
    </div>
  </div>
);

const TeethDiagram = () => {
  const [selectedTooth, setSelectedTooth] = useState(null);

  const handleClick = (number) => {
    setSelectedTooth({ number, name: teethData[number] });
  };

  return (
    <div className="teeth-diagram">
      <div className="tooth-numbers">
        {Object.keys(teethData).map((number) => (
          <div key={number} onClick={() => handleClick(number)} className="tooth-number">
            {number}
          </div>
        ))}
      </div>
      {selectedTooth && (
        <ToothForm toothNumber={selectedTooth.number} toothName={selectedTooth.name} />
      )}
    </div>
  );
};

export default TeethDiagram;
