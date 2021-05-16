import React, {useState} from 'react';
import CarouselBanner from './Components/CarouselBanner';
import About from '../About/About';
import PortfolioPage from '../Portfolio/PortfolioPage'
import Logo from '../About/Components/Logo';

const Home = () => {
  return (
    <>
        <CarouselBanner/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Logo/>
        </div>
        <PortfolioPage showPostNumber={12}/>
        <hr className='separate-line' />
        <About/>
    </>
  );
}

export default Home;