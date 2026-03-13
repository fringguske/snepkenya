import Link from 'next/link';
import styles from './RlfSnapshot.module.css';

export default function RlfSnapshot() {
    const stats = [
        { label: 'Registration Total', value: 'Ksh 850' },
        { label: 'Minimum Saving', value: 'Ksh 500' },
        { label: 'Loan Range', value: 'Ksh 5,000 - 900,000' },
        { label: 'Interest Rate', value: '1.5% (Reducing Balance)' },
        { label: 'Loan Multiplier', value: 'x2.5 Member Savings' },
    ];

    return (
        <section className={styles.section} aria-labelledby="rlf-snapshot-title">
            <div className={`container ${styles.container}`}>
                <div className={styles.copy}>
                    <p className={styles.kicker}>Membership & Microfinance</p>
                    <h2 id="rlf-snapshot-title" className={styles.title}>
                        Revolving Loan Fund (RLF), at a glance
                    </h2>
                    <p className={styles.subtitle}>
                        A group-based loan model that motivates the spirit of saving and financial discipline.
                    </p>

                    <div className={styles.ctaRow}>
                        <Link href="/rlf" className={`btn btn-primary ${styles.cta}`}>
                            See Membership & Loan Details
                        </Link>
                    </div>
                </div>

                <div className={styles.grid} role="list" aria-label="RLF key figures">
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.statCard} role="listitem">
                            <p className={styles.label}>{stat.label}</p>
                            <p className={styles.value}>{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

