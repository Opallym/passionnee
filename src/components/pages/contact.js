import React from "react";

const Contact = () => {
    return (
        <div>
            <h2>Maps:</h2>
            <div className="d-flex justify-content-center align-items-center height vh-100">
                <img src='/Image/mapfond.jpg' alt="mapfond" className="img-fluid position-absolute rounded" style={{ width: '850px', height: '600px' }} />
                <img src='/Image/map.jpg' alt="map" className="map img-fluid position-absolute rounded" style={{ width: '700px', height: '400px' }} />
            </div>
            <div className="copifond-form text-center" id="Contact">
                <p>Telephone : +33000000000</p>
                <p>Adresse : 2 Rue leo, Lyon </p>
                <p>Courriel : contact.@Passionnée.com</p>
                <img src='/Image/copyright.jpg' alt="copifond" className="img-fluid" style={{ width: '1600px', height: '70px' }} />
            </div>
        </div>
    );
};

export default Contact;