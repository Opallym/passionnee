import React from 'react'

const page = () => {
    return (
        <header className="container-fluid bg-light py-3">
            <div className="row align-items-center">
                {/* Logo gauche */}
                <div className="col-3 text-start">
                    <img src="/Image/Logo transparent.png" alt="Logo Gauche" className="img-fluid" style={{ height: "70px" }} />
                </div>

                {/* Titre centré */}
                <div className="col-6 text-center">
                    <h1 className="h4 fw-bold">Passionée</h1>
                </div>

                {/* Logo droit */}
                <div className="col-3 text-end">
                    <img src="/Image/drapeaufr.png" alt="Logo Droit" className="img-fluid" style={{ height: "60px" }} />
                </div>
            </div>
        </header>
    );
}


export default page;