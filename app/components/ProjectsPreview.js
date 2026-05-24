import Link from 'next/link';
import styles from './ProjectsPreview.module.css';

export default function ProjectsPreview() {
    const projects = [
        'Revolving Fund',
        'Gender Mainstreaming & Empowerment',
        'Education',
        'Leadership & Governance and Advocacy',
        'Devolved Governance',
        'Country National Government / Vision 2030',
        'Entrepreneurship',
        'Dairy Farming',
        'Fruit Farming',
        'Bee Keeping',
        'Poultry Farming',
        'Scaling up projects',
        'Nutrition',
        'Agriculture & Nutrition',
    ];

    return (
        <section className={styles.section} aria-labelledby="projects-preview-title">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 id="projects-preview-title" className={styles.title}>Key Projects</h2>
                    <p className={styles.subtitle}>
                        Our work includes field-based and workshop-based initiatives across community empowerment and enterprise development.
                    </p>
                </div>

                <div className={styles.listCard}>
                    <ul className={styles.list} aria-label="Project areas">
                        {projects.map((project) => (
                            <li key={project} className={styles.item}>
                                {project}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.ctaRow}>
                    <Link href="/projects" className={`btn btn-primary ${styles.cta}`}>
                        Explore All Projects
                    </Link>
                    <Link href="/contact" className={styles.secondaryBtn}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
