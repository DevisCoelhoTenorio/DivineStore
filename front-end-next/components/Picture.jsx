import React from 'react';
import Image from 'next/image';

export default function Picture({ image }) {
  return (
    <div className="responsive-image">
      <Image className="carrousel-image" src={image} width={1920} height={400} alt="carrosel" />
    </div>
  )
};
