import React from 'react';

const menu = () => {
    return (
        <div id="Menu" className="container-fluid d-flex justify-content-center align-items-center min-vh-100 mb-5">
            <div className="text-center">
                {/* Lien vers l'image du menu */}
                <a href='/Image/Mariage_Borde_.jpg' target="_blank" rel="noopener noreferrer" className="d-block">
                    <img src='/Image/menurestau.webp' className="img-fluid" alt="Image du menu" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>

                {/* Bouton pour voir le menu détaillé */}
                <a href='/Image/Menuborder.pdf' target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-3">
                    Voir le menu détaillé
                </a>
            </div>
        </div>
    );
};

export default menu.js