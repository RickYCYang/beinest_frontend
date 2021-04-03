import React from 'react';
import Container from '../Components/Container';
import Footer from '../Components/Footer'

const background = require('../../images/logo.png');

const About = () => {
    return (
        <Container align={'center'}>
            <div className='about-container'>
                <img 
                    style={{display: 'block'}}
                    src={background} 
                />
                <div style={{width: '100%', textAlign: 'center'}}>
                    <div style={{display:'inline-block', height: '300px', width: '50%', backgroundColor: 'yellow'}}>123</div>
                    <div style={{display:'inline-block', height: '300px', width: '50%', backgroundColor: 'green'}}>123</div>
                </div>
            </div>
        </Container>
    )
}

export default About;