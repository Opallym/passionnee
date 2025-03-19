import React from 'react';
import { Carousel } from 'react-bootstrap';

const carousel = () => {
    return (
        <div className="carousel-container">
            <h1>Notre Carte:</h1>
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-images">
                        <img src="Image/Platcarte.png" alt="First slide" />
                        <img src="Image/Platcarte2.png" alt="Second slide" />
                        <img src="Image/Platcarte3.png" alt="Third slide" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-images">
                        <img src="Image/Platcarte4.png" alt="Fourth slide" />
                        <img src="Image/platcarte5.jpg" alt="Fifth slide" />
                        <img src="Image/Platcarte6.jpg" alt="Sixth slide" />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default carousel;
