import Link from 'next/link';
import styles from './FeatureSection.module.css';

export default function FeatureSection() {
    const features = [
        {
            title: "Membership & Revolving Loan Fund (RLF)",
            description: "A group-based model that motivates saving and financial discipline through community structures.",
            href: "/rlf",
            cta: "Explore RLF details",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Environmental Conservation",
            description: "Mobilizing local communities around environmental conservation solutions and sustainable use of natural resources.",
            href: "/projects",
            cta: "View related projects",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Empowerment & Training",
            description: "Empowerment workshops and networks that support skills, knowledge, and quality development initiatives.",
            href: "/about",
            cta: "Learn about our mission",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        }
    ];

    return (
        <section id="focus" className={styles.section} aria-labelledby="focus-title">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 id="focus-title" className="section-title">What We Focus On</h2>
                    <p>
                        We work with community groups through the Revolving Loan Fund (RLF), environmental conservation solutions,
                        and empowerment workshops that support skills and knowledge.
                    </p>
                </div>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className={styles.cardFooter}>
                                <Link href={feature.href} className={styles.cardLink}>
                                    {feature.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
