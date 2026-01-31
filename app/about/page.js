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
                {/* Strategic Direction */}
                <div className={styles.gridTwo}>
                    <div className={styles.block}>
                        <h2>Vision & Mission</h2>
                        <div className={styles.subBlock}>
                            <h3>Vision</h3>
                            <p>To be a regional leader in community empowerment for rural development.</p>
                        </div>
                        <div className={styles.subBlock}>
                            <h3>Mission</h3>
                            <p>
                                To empower local communities by enhancing their skill, knowledge and influencing
                                their attitude, values and practices to effectively unlock their potential.
                            </p>
                        </div>
                        <div className={styles.motto}>
                            <strong>Motto:</strong> Unlock your potential
                        </div>
                    </div>

                    <div className={styles.block}>
                        <h2>Core Values</h2>
                        <ul className={styles.valuesList}>
                            <li>Team Work</li>
                            <li>Integrity</li>
                            <li>Innovativeness</li>
                            <li>Professionalism</li>
                            <li>Accountability</li>
                        </ul>
                    </div>
                </div>

                {/* Why SNEP */}
                <div className={styles.block}>
                    <h2>Why "Solution for Nature & Enterprise Programme"?</h2>
                    <p>
                        Just like the name “Solution for Nature and Human Enterprise Development Programme”, the organization seeks
                        to provide solutions to income generating activities through projects based on natural resources such as
                        fruits, poultry, dairy, among others, which are of great importance to communities and national socio-economic growth.
                    </p>
                    <p>
                        We have realized the great potential in the counties, with unique natural resources in rural Kenya,
                        by focusing on enterprise development programmes designed to promote both social and natural resources
                        development in the communities.
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
