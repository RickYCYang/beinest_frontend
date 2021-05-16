import React from 'react';
import Container from '../Components/Container';
import MapContent from './Components/MapContent'
import Content from './Components/Content';
import Logo from './Components/Logo'

const About = () => {
    console.log('render about');
    return (
        <Container align={'center'}>
            <div className='flex-container-column' style={{paddingTop: '10px'}}>
                <Logo/>
                <div className='container-content-center'>
                    <Content />
                    <MapContent />
                </div>
            </div>
        </Container>
    )
};

export default About;