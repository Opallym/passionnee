import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
    return (
        <div style={{ marginTop: '60px' }}>
            <h1>Notre Carte:</h1>
            <Carousel>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <img
                            className="d-block"
                            src="Image/Platcarte.png"
                            alt="First slide"
                            style={{ borderRadius: '10px' }} // Optionnel : pour arrondir les coins
                        />
                        <img
                            className="d-block"
                            src="Image/Platcarte2.png"
                            alt="Second slide"
                            style={{ borderRadius: '10px' }} // Optionnel : pour arrondir les coins
                        />
                        <img
                            className="d-block"
                            src="Image/Platcarte3.png"
                            alt="Third slide"
                            style={{ borderRadius: '10px' }} // Optionnel : pour arrondir les coins
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <img
                            className="d-block"
                            src="Image/Platcarte4.png"
                            alt="Fourth slide"
                            style={{ borderRadius: '10px' }} // Optionnel : pour arrondir les coins
                        />
                        <img
                            className="d-block"
                            src="Image/platcarte5.jpg"
                            alt="Fifth slide"
                            style={{ borderRadius: '10px' }} // Optionnel : pour arrondir les coins
                        />
                        <img
                            className="d-block"
                            src="Image/Platcarte6.jpg"
                            alt="Sixth slide"
                            style={{ borderRadius: '10px' }} // Optionnel : pour arrondir les coins
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );

};


export default ImageCarousel;