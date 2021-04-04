import React from 'react';

const MapContent = () => {
    return (
        <div className='about-content-info'>
            <p className='title'>地理位置</p>
            <p>台北市大安區忠孝東路四段49巷4弄16號</p>
            <iframe 
                title='address'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.762126904798!2d121.54347401498799!3d25.04214544411889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abda88777e43%3A0xea8c0209a58fb8f1!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5b-g5a2d5p2x6Lev5Zub5q61NDnlt7c05byEMTbomZ8!5e0!3m2!1szh-TW!2stw!4v1617533468774!5m2!1szh-TW!2stw" 
                width="98%" 
                height="300" 
                style={{border:0}} 
                loading="lazy">
            </iframe>
        </div>
    );
}

export default MapContent;