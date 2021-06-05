import React from 'react';
import Container from '../Components/Container';
import MapContent from './Components/MapContent'
import Content from './Components/Content';
import Logo from './Components/Logo'

interface propsType {
    showLogo: boolean | null
}

const About = (props: propsType) => {
    const showLogo: boolean | null = props.showLogo;
    return (
        <Container align={'center'}>
            <div className='flex-container-column' style={{paddingTop: '10px'}}>
                {showLogo? <Logo/> : null}
                <div className='container-content-center'>
                    <Content />
                    <MapContent />
                </div>
            </div>
        </Container>
    )
};

export default About;