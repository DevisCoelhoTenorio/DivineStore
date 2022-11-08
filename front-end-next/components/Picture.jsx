import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Picture({ image }) {
  return (
    <div className="responsive-image">
      <Image className="carrousel-image" src={image} width={1920} height={400} alt="carrosel" />
    </div>
  );
}

Picture.propTypes = {
  image: PropTypes.string.isRequired,
};
