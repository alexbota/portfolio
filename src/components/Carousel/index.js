import React, { useState } from 'react';
import client_item_1 from '../../images/client_item_1.jpg';
import client_item_2 from '../../images/client_item_2.jpg';
import { Dot, DotContainer, MySlide, SlideshowContainer } from './styled';

const Carousel = () => {
  const slides = [
    {
      clientName: 'Emile Vanwinden',
      clientRole: 'Paid Media Manager at Solios Watches',
      clientPic: client_item_1,
      clientReview:
        'Alex works fast, efficiently, and understands very well the assignment that we gave him. I could not wish for a better outcome. He was extremely responsive and flexible during the project. We came up with a lot of unexpected changes during the period we were working together, and he fixed every single issue rapidly. I definitely recommend him!',
    },
    {
      clientName: 'Cosmin Boltea',
      clientRole: 'Project Manager at Rawvisuals',
      clientPic: client_item_2,
      clientReview:
        'Consistently delivering ahead of plan, with an high level of professionalism and integrity - happy to recommend!',
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
