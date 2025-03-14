import React from 'react';

const Menu = () => {
    return (
        <div id='menu1' className="container-fluid d-flex justify-content-center align-items-center min-vh-100 mb-5" style={{ marginTop: '60px' }}>
            <div className="text-center">

                <a href='/Image/Mariage_Borde_.jpg' target="_blank" rel="noopener noreferrer" className="d-block">
                    <img src='/Image/menurestau.webp' className="img-fluid" alt="Image du menu" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>

                <a href='/Image/Menuborder.pdf' target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-3">
                    Voir le menu détaillé
                </a>
            </div>
        </div>
    );
};

export default Menu;