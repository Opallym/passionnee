import React from 'react';


const Cuisine = () => {
    return (
        <section id="LaCuisine">
            <h1>La cuisine:</h1>
            <div id="cuisine" className="container-fluid mx-0 w-100">

                <div className="row m-0 p-0">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src='/Image/NotreCarte.png' className="img-fluid mt-5" alt="Notre Carte" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src='/Image/nos herbes et epices.png' className="img-fluid mt-5" alt="Nos Herbes et Epices" />
                    </div>
                </div>


                <div className="row m-0 p-0">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src='/Image/nospain.png' className="img-fluid" alt="Nos Pain" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src='/Image/notrecave.png' className="img-fluid" alt="Notre Cave" />
                    </div>
                </div>


                <div className="row m-0 p-0">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src='/Image/nosdesserts.png' className="img-fluid" alt="Nos Desserts" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src='/Image/notresalle.png' className="img-fluid" alt="Notre Salle" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cuisine;