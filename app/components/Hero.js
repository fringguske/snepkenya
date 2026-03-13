import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} aria-labelledby="home-hero-title">
            <div className={styles.background} aria-hidden="true" />
            <div className={`container ${styles.container}`}>
                <div className={styles.copy}>
                    <p className={styles.eyebrow}>SNEP KENYA</p>
                    <h1 id="home-hero-title" className={styles.title}>
                        Solution for Nature <span className={styles.accent}>&</span> Enterprise Programme
                    </h1>
                    <p className={styles.subtitle}>
                        A registered NGO based in Machakos Town, empowering local communities through environmental conservation,
                        enterprise development, and the Revolving Loan Fund (RLF).
                    </p>

                    <div className={styles.ctaGroup}>
                        <Link href="/rlf" className={`btn btn-primary ${styles.primaryCta}`}>
                            Explore Membership & RLF
                        </Link>
                        <Link href="/projects" className={styles.secondaryBtn}>
                            View Key Projects
                        </Link>
                        <Link href="/about" className={styles.tertiaryBtn}>
                            About SNEP
                        </Link>
                    </div>

                    <Link href="#focus" className={styles.scrollHint}>
                        See our focus
                    </Link>
                </div>

                <aside className={styles.sideCard} aria-label="SNEP highlights">
                    <div className={styles.cardHeader}>
                        <Image
                            src="/logo.png"
                            alt="SNEP logo"
                            width={46}
                            height={46}
                            className={styles.cardLogo}
                        />
                        <div>
                            <p className={styles.cardKicker}>Motto</p>
                            <p className={styles.cardTitle}>Unlock your potential</p>
                        </div>
                    </div>

                    <ul className={styles.highlights}>
                        <li>Registered NGO under the NGOs Coordination Act</li>
                        <li>Based in Machakos Town, Machakos County</li>
                        <li>Group-based membership model that encourages saving and financial discipline</li>
                        <li>Empowerment workshops that connect groups and individuals to quality development initiatives</li>
                    </ul>

                    <div className={styles.cardCtas}>
                        <Link href="/contact" className={styles.cardLink}>
                            Contact Us
                        </Link>
                    </div>
                </aside>
            </div>
        </section>
    );
}
