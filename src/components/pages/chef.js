import React from 'react';

const chef = () => {
    return (
        <div id="Chef" className="container-fluid mx-0 w-100">
            <div className="row">
                {/* Colonne de gauche : Image du Chef */}
                <div className="col-md-6 d-flex align-items-stretch">
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <img src='/Image/Chef.png' className="img-fluid h-75" alt="Image du Chef" />
                    </div>
                </div>

                {/* Colonne de droite : Description du Chef */}
                <div className="col-md-6 d-flex align-items-stretch">
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <img src="/Image/descriptifchef.png" className="img-fluid h-75" alt="Description du Chef" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default chef.js;