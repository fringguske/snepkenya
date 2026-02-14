import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.section}>
                    <h3>SNEP KENYA</h3>
                    <p>Solution for Nature & Enterprise Programme</p>
                    <p>Registered NGO working with communities for sustainable development.</p>
                </div>

                <div className={styles.section}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/rlf">Revolving Loan Fund</a></li>
                        <li><a href="/projects">Key Projects</a></li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h3>Contact Us</h3>
                    <p>P.O. BOX 1862, MACHAKOS</p>
                    <p>Gilgal Apartment</p>
                    <p>Phone: 07000000000</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} SNEP Kenya. All rights reserved.</p>
            </div>
        </footer>
    );
}
