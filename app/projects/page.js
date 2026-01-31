import styles from './projects.module.css';

export default function Projects() {
    const projects = [
        "Revolving Fund",
        "Gender Mainstreaming & Empowerment",
        "Education",
        "Leadership & Governance and Advocacy",
        "Devolved Governance",
        "Country National Government / Vision 2030",
        "Entrepreneurship",
        "Dairy Farming",
        "Fruit Farming",
        "Bee Keeping",
        "Poultry Farming",
        "Scaling up projects",
        "Nutrition",
        "Agriculture & Nutrition"
    ];

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div className="container">
                    <h1 className="section-title">Key Projects</h1>
                    <p className={styles.lead}>
                        Our projects within the organization are classified into Field Based and Workshop Based initiatives.
                    </p>
                </div>
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconPlaceholder}>{project[0]}</div>
                            <h3>{project}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
