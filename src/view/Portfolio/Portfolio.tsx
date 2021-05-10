import React from 'react';
import {useParams} from 'react-router';
import Container from '../Components/Container';

interface ParamTypes {
    id: string 
};

const Portfolio = () => {
    const caption = '🧧開工好運睫🎊春酒最亮眼 新春開運 預約中 🔺即日起 - 108.02.28 加入line官方帳號並預約成功，即可享有優惠 . 預約詢問請➕LINE @beisnest 詢問 . ❥ Line 官方帳號：@beisnest ❥ Instagram：beisnest ❥ FB 粉絲專頁：Bei’s Nest 貝窩美睫美容輕設計 . . . #台北東區美睫 #美睫美容 #美睫 #睫毛嫁接 #eyelashes #臉部Spa #臉部護理 #捷運忠孝復興站 #貝窩經典單根'
    let {id} = useParams<ParamTypes>(); 

    return (
        <Container>
            <div className='portfolio'>
                <div className='portfolio-content'>
                <img                   
                    src="https://scontent.cdninstagram.com/v/t51.29350-15/174409295_158629782823304_8263266267148393784_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=GBhksrQHM1sAX8rQtA6&_nc_ht=scontent.cdninstagram.com&oh=5bb4d9beac82e31588f9b80c911b21c0&oe=60B0A4B1" 
                    style={{objectFit: 'cover'}} 
                
                ></img>
                    <div style={{height: '300px', width: '49%', margin: '1%'}}>
                    {caption}
                    </div>
                </div>
            </div>
            
        </Container>
    )
}

export default Portfolio