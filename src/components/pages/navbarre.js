import React from 'react'

const navbarre = () => {
    return (
        <div className="d-flex flex-column vh-100 position-relative" style={{ marginBottom: '50px' }}>
            {/* Navbar sticky */}
            <nav className="navbar navbar-light bg-white sticky-top w-100" style={{ zIndex: 1 }}>
                <div className="container" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                    <div className="d-flex justify-content-between w-100">
                        <a className="navbar-brand" href="#cuisine">cuisine</a>
                        <a className="navbar-brand" href="#chef">chef</a>
                        <a className="navbar-brand" href="#menu">menu</a>
                        <a className="navbar-brand" href="#reservation">reservation</a>
                        <a className="navbar-brand" href="#contact">contact</a>
                    </div>
                </div>
            </nav>

            {/* Image centrée */}
            <div className="d-flex justify-content-center align-items-center" style={{ height: "calc(100vh - 56px)" }}>
                <img
                    src="/Image/fond resto.png"
                    alt="Mon Image"
                    className="img-fluid"
                    style={{
                        maxWidth: "100%",  // S'adapte à la largeur du conteneur
                        height: "auto"     // Maintient les proportions de l'image
                    }}
                />
            </div>
        </div>
    );
}

export default navbarre;