import Link from 'next/link';
import styles from './MissionValues.module.css';

export default function MissionValues() {
    const values = [
        'Team Work',
        'Integrity',
        'Innovativeness',
        'Professionalism',
        'Accountability',
    ];

    return (
        <section className={styles.section} aria-labelledby="mission-values-title">
            <div className={`container ${styles.container}`}>
                <header className={styles.header}>
                    <h2 id="mission-values-title" className={styles.title}>
                        Vision, Mission & Values
                    </h2>
                    <p className={styles.subtitle}>
                        We empower local communities by building skills, knowledge, and practices that help people unlock their potential.
                    </p>
                </header>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardBlock}>
                            <h3 className={styles.cardTitle}>Vision</h3>
                            <p>To be a regional leader in community empowerment for rural development.</p>
                        </div>
                        <div className={styles.cardBlock}>
                            <h3 className={styles.cardTitle}>Mission</h3>
                            <p>
                                To empower local communities by enhancing their skill, knowledge and influencing their attitude, values and
                                practices to effectively unlock their potential.
                            </p>
                        </div>
                        <div className={styles.motto}>
                            <p className={styles.mottoLabel}>Motto</p>
                            <p className={styles.mottoValue}>Unlock your potential</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Core Values</h3>
                        <ul className={styles.valuesList} aria-label="Core values">
                            {values.map((value) => (
                                <li key={value} className={styles.valueItem}>
                                    {value}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.cardNote}>
                            <p>
                                Learn more about SNEP, our purpose, and how we work with community groups through the Revolving Loan Fund (RLF).
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaRow}>
                    <Link href="/about" className={`btn btn-primary ${styles.cta}`}>
                        About SNEP
                    </Link>
                    <Link href="/contact" className={styles.secondaryBtn}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}

