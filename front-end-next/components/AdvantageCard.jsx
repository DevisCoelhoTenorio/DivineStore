import Image from 'next/image';
import React from 'react';
import Proptypes from 'prop-types';

export default function AdvantageCard({ title, content, img }) {
  return (
    <div className="advantage-container">
      <Image className="advantage-image" src={img} alt="vantagem divine" width={30} height={30} />
      <div className="advantage-content-container">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

AdvantageCard.propTypes = {
  title: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
  img: Proptypes.string.isRequired,
};
