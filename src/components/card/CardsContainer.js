import React, { useMemo, lazy, Suspense } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
import { cards } from "../../assets/constants/constants";
import './CardsContainer.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//its for demonstarting Lazy loading
// const Card = lazy(() => import('./Card'));
// lazy(() => import('./CardsContainer.scss'));
// lazy(() => import('react-responsive-carousel/lib/styles/carousel.min.css'));

const CardsContainer = () => {

  const cardData = useMemo(() => cards, []);

  return (
    <div className="cards-container">
      <h2>Our Innovative Tech</h2>
      <p>Online Music Lessons delivered through advance cutting-edge Technology</p>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay={false}
        centerMode
        centerSlidePercentage={33.33}
        showArrows
      >
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {cardData.map((card, index) => (

          <div key={card.title} className="carousel-card">
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
        {/* </Suspense> */}
      </Carousel>
    </div>
  );
};

export default CardsContainer;
