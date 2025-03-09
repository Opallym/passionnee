import React, { useState } from "react";

const Reservation = () => {
    // États pour gérer les valeurs du formulaire
    const [formData, setFormData] = useState({
        date: '',
        nom: '',
        email: '',
        telephone: '',
        personnes: '',
        heure: '',
        commentaire: '',
    });

    // Gestion des changements dans les champs du formulaire
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire soumises :', formData);
        // Vous pouvez ajouter ici la logique pour envoyer les données à un serveur
    };

    return (
        <div className="container mt-5" id="Reservation">
            <h2 className="text-center mb-4">Réserver une table</h2>

            <form onSubmit={handleSubmit}>
                {/* Champ Date de réservation */}
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Date de réservation
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Champ Nom */}
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">
                        Nom
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nom"
                        placeholder="Votre nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Champ Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Champ Téléphone */}
                <div className="mb-3">
                    <label htmlFor="telephone" className="form-label">
                        Téléphone
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="telephone"
                        placeholder="Votre numéro"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Champ Nombre de personnes */}
                <div className="mb-3">
                    <label htmlFor="personnes" className="form-label">
                        Nombre de personnes
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="personnes"
                        min="1"
                        placeholder="Nombre de personnes"
                        value={formData.personnes}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Champ Heure de réservation */}
                <div className="mb-3">
                    <label htmlFor="heure" className="form-label">
                        Heure de réservation
                    </label>
                    <input
                        type="time"
                        className="form-control"
                        id="heure"
                        value={formData.heure}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Champ Commentaire */}
                <div className="mb-3">
                    <label htmlFor="commentaire" className="form-label">
                        Commentaire
                    </label>
                    <textarea
                        className="form-control"
                        id="commentaire"
                        rows="3"
                        placeholder="Ajoutez des précisions"
                        value={formData.commentaire}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Bouton de soumission */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Réserver
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Reservation.js