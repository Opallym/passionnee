import React from 'react'

const Page = () => {
    return (
        <header className="container-fluid bg-light py-3">
            <div className="row align-items-center">

                <div className="col-3 text-start">
                    <img src="/Image/Logo transparent.png" alt="Logo Gauche" className="img-fluid" style={{ height: "70px" }} />
                </div>

                <div className="col-6 text-center">
                    <h1 className="h4 fw-bold">Passionée</h1>
                </div>

                <div className="col-3 text-end">
                    <img src="/Image/drapeaufr.png" alt="Logo Droit" className="img-fluid" style={{ height: "60px" }} />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "calc(100vh - 56px)" }}>
                <img
                    src="./Image/fond resto.png"
                    alt="Mon Image"
                    className="img-fluid"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }}
                />
            </div>
        </header>
    );
}


export default Page;