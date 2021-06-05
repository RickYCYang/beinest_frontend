import React, {useState} from 'react';
import CarouselBanner from './Components/CarouselBanner';
import PortfolioPage from '../Portfolio/PortfolioPage';
import About from '../About/About';

const Home = () => {
  return (
    <>
        <CarouselBanner/>
        <PortfolioPage showPostNumber={12} />
        <hr className='separate-line' />
        <About showLogo={false} />
    </>
  );
}

export default Home;