import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo.png" alt="SNEP Logo" className={styles.logoImage} />
                    <span>SNEP <span className={styles.accent}>KENYA</span></span>
                </Link>

                <button
                    className={styles.hamburger}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                </button>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
                    <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                    <li><Link href="/rlf" onClick={() => setIsMenuOpen(false)}>Membership & RLF</Link></li>
                    <li><Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                    <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
