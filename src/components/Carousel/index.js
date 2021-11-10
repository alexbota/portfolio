import React, { useState } from 'react';
import client_item_2 from '../../images/client_item_2.png';
import client_item_1 from '../../images/client_item_1.png';
import { Dot, DotContainer, MySlide, SlideshowContainer } from './styled';

const Carousel = () => {
  const slides = [
    {
      clientName: 'Davide Papale',
      clientRole: 'Senior Electrical Designer at DIEMME',
      clientPic: client_item_1,
      clientReview:
        'Consistently delivering ahead of plan, with an high level of professionalism and integrity - happy to recommend!',
    },
    {
      clientName: 'Cosmin Boltea',
      clientRole: 'Founder at c-rb.ro',
      clientPic: client_item_2,
      clientReview:
        "Alex is a very good team worker, thanks to his expertise our product was launched ahead of time. I'm more that satisfied by his performance.",
    },
  ];

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <SlideshowContainer>
        {slides.map((e, i) => (
          <MySlide key={i} isActive={i === counter}>
            <div className="flex flex-col items-center max-w-4xl">
              <p className="text-lg md:text-xl text-text-secondary mb-10 md:text-center tracking-tight">
                {e.clientReview}
              </p>
              <div className="flex items-center justify-center mb-10">
                <img
                  className="w-16 h-16 rounded-full mr-5 object-cover"
                  src={e.clientPic}
                  alt=""
                />
                <div>
                  <p className="text-2xl font-medium tracking-tighter text-text-dark">
                    {e.clientName}
                  </p>
                  <p className="text-lg tracking-tighter text-text-secondary">
                    {e.clientRole}
                  </p>
                </div>
              </div>
            </div>
          </MySlide>
        ))}
      </SlideshowContainer>
      <DotContainer>
        {slides.map((e, i) => (
          <Dot isActive={i === counter} key={i} onClick={() => setCounter(i)} />
        ))}
      </DotContainer>
    </div>
  );
};

export default Carousel;
