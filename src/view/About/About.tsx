import React from 'react';
import Container from '../Components/Container';
import MapContent from './Components/MapContent'
import Content from './Components/Content';


const background = require('../../images/logo.png');

const About = () => {
    return (
        <Container align={'center'}>
            <div className='flex-container-column'>
                <img 
                    src={background} 
                    alt='logo'
                />
                <div className='container-content-center'>
                    <Content />
                    <MapContent />
                </div>
            </div>
        </Container>
    )
}

export default About;