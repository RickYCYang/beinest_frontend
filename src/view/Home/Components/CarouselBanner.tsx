import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';

const CarouselBanner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    style={{height: '350px'}}
                />
                <Carousel.Caption>
                    <h3>Bei’s Nest 貝窩美睫美容輕設計</h3>
                    <p>嫁接睫毛、無痛粉刺、個人工作室（採完全預約制），產品皆經 SGS合格認證，預約詢問請加 Line</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    style={{width: '800px', height: '350px'}}
                />
                <Carousel.Caption>
                    <h3>BEINEST 美婕</h3>
                    <p>嫁接睫毛、無痛粉刺、個人工作室（採完全預約制），產品皆經 SGS合格認證，預約詢問請加 Line</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBanner;