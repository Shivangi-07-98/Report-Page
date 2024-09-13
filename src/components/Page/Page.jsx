import React, { useState } from 'react';
import './Page.scss';
import Top from '../Top/Top';
import { ReactComponent as Teeth } from './teeth.svg'; // Ensure SVG has class attributes
import Bottom from '../Bottom/Bottom';
import ToothForm from '../ToothForm/ToothForm';

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

const Page = () => {
  const [selectedTooth, setSelectedTooth] = useState(null);

  const handlePathClick = (event) => {
    const className = event.target.getAttribute('class');
    if (className) {
      // Extract the tooth number from the class name
      const match = className.match(/teeth_svg__tooth-(\d{2})/);
      if (match) {
        const toothNumber = match[1];
        setSelectedTooth({ number: toothNumber, name: teethData[toothNumber] });
      }
    }
  };

  return (
    <>
      <Top />
      <div className='teeth'>
        <Teeth onClick={handlePathClick} />
      </div>
      {selectedTooth && <ToothForm toothNumber={selectedTooth.number} toothName={selectedTooth.name} />}
      <Bottom />
    </>
  );
};

export default Page;
