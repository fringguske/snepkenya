import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} aria-labelledby="home-hero-title">
            <div className={`container ${styles.container}`}>
                <div className={styles.copy}>
                    <p className={styles.eyebrow}>SNEP KENYA</p>
                    <h1 id="home-hero-title" className={styles.title}>
                        SNEP Kenya
                    </h1>
                    <p className={styles.subtitle}>
                        Solution for Nature &amp; Enterprise Programme (SNEP) is a registered NGO based in Machakos Town,
                        working with community groups through the Revolving Loan Fund (RLF), environmental conservation, and empowerment workshops.
                    </p>

                    <div className={styles.ctaGroup}>
                        <Link href="/rlf" className={`btn btn-primary ${styles.primaryCta}`}>
                            Membership &amp; RLF
                        </Link>
                        <div className={styles.secondaryLinks} aria-label="Secondary links">
                            <Link href="/projects" className={styles.secondaryLink}>
                                Projects
                            </Link>
                            <Link href="/about" className={styles.secondaryLink}>
                                About
                            </Link>
                            <Link href="/contact" className={styles.secondaryLink}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                <aside className={styles.infoCard} aria-label="SNEP at a glance">
                    <div className={styles.cardHeader}>
                        <Image src="/logo.png" alt="SNEP logo" width={44} height={44} className={styles.cardLogo} />
                        <div>
                            <p className={styles.cardKicker}>At a glance</p>
                            <p className={styles.cardTitle}>
                                Solution for Nature <span className={styles.accent}>&</span> Enterprise Programme
                            </p>
                        </div>
                    </div>

                    <ul className={styles.highlights}>
                        <li>Registered NGO under the NGOs Coordination Act</li>
                        <li>Based in Machakos Town, Machakos County</li>
                        <li>Group-based model that supports saving and financial discipline</li>
                        <li>Empowerment workshops for groups and individuals</li>
                    </ul>

                    <div className={styles.cardFooter}>
                        <p className={styles.mottoLabel}>Motto</p>
                        <p className={styles.mottoValue}>Unlock your potential</p>
                    </div>
                </aside>
            </div>
        </section>
    );
}
