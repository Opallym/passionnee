import classNames from "classnames";
import React, { useState } from "react";

<section id="reservation"></section>
const Reservation = () => {
    const [formData, setFormData] = useState({
        date: '',
        nom: '',
        email: '',
        telephone: '',
        personnes: '',
        heure: '',
        commentaire: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire soumises :', formData);
    };

    return (
        <div className="container mt-5" id="Reservation">
            <h2 className="text-center mb-4">Réserver une table</h2>

            <form onSubmit={handleSubmit}>

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


                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Réserver
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Reservation;