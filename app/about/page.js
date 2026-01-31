import styles from './about.module.css';

export default function About() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="section-title">About SNEP</h1>
                    <p className={styles.lead}>
                        Solution for Nature & Enterprise Programme (SNEP) is a registered NGO under the NGOs Coordination Act
                        based in Machakos Town, Machakos County.
                    </p>
                </div>
            </section>

            <section className={`container ${styles.content}`}>
                <div className={styles.block}>
                    <h2>Our Mission</h2>
                    <p>
                        SNEP has an approach to provide local communities with environmental conservation solutions based on Nature.
                        We reach out to individuals and self-help groups and seek to maximize the use of local resources
                        for poverty reduction—benefiting both humans and natural resources.
                    </p>
                    <p>
                        We mobilize local communities on environmental conservation solutions and support the efforts of members
                        towards the implementation and promotion of sustainability for individual economic and social development.
                    </p>
                </div>

                <div className={styles.block}>
                    <h2>Our Role in Development</h2>
                    <ul>
                        <li>Working with County and National Government, Policy makers, and Development partners.</li>
                        <li>Improving sharing, learning, and dissemination of knowledge, skills, and values required for sustainable development.</li>
                        <li>Encouraging dissemination of individual's savings of knowledge.</li>
                        <li>Converting skills into Income Generating Activities (IGAs) and manufacturing quality, affordable products.</li>
                    </ul>
                </div>

                <div className={styles.structure}>
                    <h2>Organizational Structure</h2>
                    <div className={styles.chain}>
                        <div className={styles.node}>MEMBERS</div>
                        <div className={styles.arrow}>→</div>
                        <div className={styles.node}>GROUPS</div>
                        <div className={styles.arrow}>→</div>
                        <div className={styles.node}>SNEP</div>
                    </div>
                    <p className={styles.caption}>
                        We believe in a model that motivates the spirit of saving and financial discipline through group-based structures.
                    </p>
                </div>
            </section>
        </main>
    );
}
