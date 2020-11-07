import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import SlidePhoto1 from '../../assets/img/carousal/spring.jpg';
import SlidePhoto2 from '../../assets/img/carousal/summer.jpg';
import SlidePhoto3 from '../../assets/img/carousal/autumn.jpg';
import SlidePhoto4 from '../../assets/img/carousal/winter.jpg';

const MyCarousal = () => {
    return (
        <div id="home" className="mycarousal">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={SlidePhoto1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={SlidePhoto2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={SlidePhoto3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={SlidePhoto4}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MyCarousal;
