import React from 'react';

const Chef = () => {
    return (
        <div id="Chef1" className="container-fluid mx-0" style={{ backgroundColor: 'black', marginTop: '60px' }}>
            <div className="row">

                <div className="col-md-6 d-flex align-items-stretch">
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <img src='/Image/Chef.png' className="img-fluid h-75" alt="Image du Chef" />
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-stretch">
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <img src="/Image/descriptifchef.png" className="img-fluid h-75" alt="Description du Chef" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Chef;