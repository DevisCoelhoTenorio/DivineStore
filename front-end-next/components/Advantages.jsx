import React from 'react';
import AdvantageCard from './AdvantageCard';

const divineAdvantages = [
  {
    id: 1,
    title: '365 DIAS PARA COMEÇAR A PAGAR',
    content: 'no pix*',
    img: 'https://img.lojasrenner.com.br/banner/01-home/icone-cartaorenner.png',
  },
  {
    id: 2,
    title: 'FRETE GRÁTIS*',
    content: 'para compras acima de R$1.000.000,00, ou caso retire em loja',
    img: 'https://img.lojasrenner.com.br/banner/01-home/icone-fretegratis.png',
  },
  {
    id: 3,
    title: 'COMPRE PELO WHATSAPP*',
    content: 'atendimento personalizado e entrega rápida!',
    img: 'https://img.lojasrenner.com.br/banner/01-home/icone-whatsapp.png',
  },
];

export default function Advantages() {
  return (
    <div className="advantages-container">
      {divineAdvantages.map((advantage) => (
        <AdvantageCard
          key={advantage.id}
          title={advantage.title}
          content={advantage.content}
          img={advantage.img}
        />
      ))}
    </div>
  );
}
