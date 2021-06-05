import React from 'react';
import MapContent from './Components/MapContent'
import Content from './Components/Content';
import Logo from './Components/Logo'

interface propsType {
    showLogo: boolean | null
}

const About = (props: propsType) => {
    const showLogo: boolean | null = props.showLogo;
    return (
        <div className='about-container-main'>
            {showLogo? <Logo/> : null}
            <div className='about-container-sub'>
                <Content />
                <MapContent />
            </div>
        </div>
    )
};

export default About;