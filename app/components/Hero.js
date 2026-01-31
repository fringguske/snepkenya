import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    Solutions for Nature <br />
                    <span>& Enterprise</span>
                </h1>
                <p className={styles.subtitle}>
                    Empowering communities in region through environmental conservation
                    and sustainable economic development.
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="/rlf" className="btn btn-primary">
                        Join Membership
                    </Link>
                    <Link href="/projects" className={styles.secondaryBtn}>
                        View Our Projects
                    </Link>
                    <Link href="/login" className={styles.secondaryBtn}>
                        Staff Login
                    </Link>
                </div>
            </div>
        </section>
    );
}
