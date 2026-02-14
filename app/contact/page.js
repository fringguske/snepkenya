import styles from './contact.module.css';

export default function Contact() {
    return (
        <main className={styles.main}>
            <div className="container">
                <h1 className="section-title">Contact Us</h1>
                <div className={styles.card}>
                    <div className={styles.infoBlock}>
                        <h2>Get in Touch</h2>
                        <p className={styles.description}>
                            We are located at Gilgal Apartment, Machakos Town. Feel free to visit us or contact us via phone.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.item}>
                                <strong>Address</strong>
                                <p>P.O. BOX 1862 MACHAKOS</p>
                            </div>

                            <div className={styles.item}>
                                <strong>Location</strong>
                                <p>Gilgal Apartment, Machakos Town</p>
                            </div>

                            <div className={styles.item}>
                                <strong>Phone</strong>
                                <p>07000000000</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapBlock}>
                        {/* Placeholder for map or image as none was provided */}
                        <div className={styles.mapPlaceholder}>
                            <span>Machakos Town, Kenya</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
