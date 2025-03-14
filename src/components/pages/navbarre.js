import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavbarItems = [
    { id: 'HautDePage', label: <img src="/Image/Logo transparent.png" alt="" width="50" /> },
    { id: 'Chef1', label: 'Chef' },
    { id: 'LaCuisine1', label: 'Cuisine' },
    { id: 'menu1', label: 'Menu' },
    { id: 'Reservation1', label: 'Reservation' },
    { id: 'Contacts1', label: 'Contacts' },
];

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

    // Gestion de l'événement de défilement
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 45) { // Si l'utilisateur a défilé de plus de 45 pixels
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Nettoyage de l'écouteur d'événement
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav style={{ ...styles.navbar, top: isFixed ? 0 : 90 }}>
            <ul style={styles.navList}>
                {NavbarItems.map(({ id, label }) => (
                    <li key={id} style={styles.navItem}>
                        <Link
                            to={id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            style={styles.navLink}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        position: 'fixed',
        left: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '10px 0',
        zIndex: 10,
        textAlign: 'center',
        height: '60px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'top 0.3s',
    },
    navList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    navItem: {
        margin: '0 20px',
    },
    navLink: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        transition: 'color 0.3s',
    },
    logo: {
        marginRight: '20px',
        height: '50px',
    },
};

export default Navbar;