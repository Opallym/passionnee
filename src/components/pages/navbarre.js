import React from "react";
import { Link } from "react-scroll";

const NavbarItems = [
    { id: 'HautDePage', label: <img src="/Image/Logo transparent.png" alt="" width="50" height="50" /> },
    { id: 'Chef', label: 'Chef' },
    { id: 'Cuisine', label: 'Cuisine' },
    { id: 'Menu', label: 'Menu' },
    { id: 'Contacts', label: 'Contacts' },
];

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
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
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '10px 0',
        zIndex: 10,
        textAlign: 'center',
        height: '60px',
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