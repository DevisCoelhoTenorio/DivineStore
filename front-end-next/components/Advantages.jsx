import React from 'react';
import AdvantageCard from './AdvantageCard';

const divineAdvantages = [
  {
    title: '365 DIAS PARA COMEÇAR A PAGAR',
    content: 'no pix*',
    img: 'https://img.lojasrenner.com.br/banner/01-home/icone-cartaorenner.png'
  },
  {
    title: 'FRETE GRÁTIS*',
    content: 'para compras acima de R$1.000.000,00, ou caso retire em loja',
    img: 'https://img.lojasrenner.com.br/banner/01-home/icone-fretegratis.png'
  },
  {
    title: 'COMPRE PELO WHATSAPP*',
    content: 'atendimento personalizado e entrega rápida!',
    img: 'https://img.lojasrenner.com.br/banner/01-home/icone-whatsapp.png'
  },
];

export default function Advantages() {
  return (
    <div className="advantages-container">
      {divineAdvantages.map((advantage, index) => (
      <AdvantageCard
        key={index * 100}
        title={advantage.title}
        content={advantage.content}
        img={advantage.img}
      />
      ))}
    </div>
  )
}
