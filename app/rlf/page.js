import styles from './rlf.module.css';

export default function RLFModel() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div className="container">
                    <h1 className="section-title">Revolving Loan Fund (RLF)</h1>
                    <p className={styles.lead}>
                        A group-based loan model that motivates the spirit of saving and financial discipline.
                    </p>
                </div>
            </div>

            <div className={`container ${styles.content}`}>

                {/* Membership Section */}
                <section className={styles.card}>
                    <h2>Membership Requirements</h2>
                    <div className={styles.gridTwo}>
                        <div>
                            <h3>Qualifying for Group Membership</h3>
                            <ul>
                                <li>Must be over 18 years old.</li>
                                <li>Must be a registered member of a group within your location/residence.</li>
                                <li>Good record of moral values and self-discipline.</li>
                                <li>Willingness to pay fines and participate in group activities.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Registration Fees</h3>
                            <table className={styles.table}>
                                <tbody>
                                    <tr><td>Registration Fee</td><td>Ksh 150</td></tr>
                                    <tr><td>Passbook</td><td>Ksh 150</td></tr>
                                    <tr><td>Minimum Saving</td><td>Ksh 500</td></tr>
                                    <tr><td>Risk Fund</td><td>Ksh 50</td></tr>
                                    <tr className={styles.totalRow}><td>Total</td><td>Ksh 850</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Loaning Section */}
                <section className={styles.card}>
                    <h2>Loaning & Advancing</h2>
                    <div className={styles.rulesGrid}>
                        <div className={styles.ruleItem}>
                            <span>Minimum Loan</span>
                            <strong>Ksh 5,000</strong>
                        </div>
                        <div className={styles.ruleItem}>
                            <span>Maximum Loan</span>
                            <strong>Ksh 900,000</strong>
                        </div>
                        <div className={styles.ruleItem}>
                            <span>Interest Rate</span>
                            <strong>1.5% (Reducing Balance)</strong>
                        </div>
                        <div className={styles.ruleItem}>
                            <span>Loan Multiplier</span>
                            <strong>x2 Member Savings</strong>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <p><strong>Eligibility:</strong> Loans are issued after 3 months of membership. You must have minimum savings for those 3 months.</p>
                        <p><strong>Advance Loans:</strong> Maximum Ksh 4,800 (x2 savings), Repayment 1 month, 10% interest.</p>
                    </div>
                </section>

                {/* Dividends & Withdrawal */}
                <section className={styles.row}>
                    <div className={styles.card}>
                        <h3>Dividends</h3>
                        <p>Investment returns are distributed to motivate members. Groups may be disqualified from dividends due to poor performance or low banking amounts.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Withdrawal of Shares</h3>
                        <ul>
                            <li>Notice period: One Month.</li>
                            <li>Can only withdraw 40% of total shares.</li>
                            <li>Cannot borrow advance/loan for 3 months after withdrawal.</li>
                            <li>Must not have guaranteed any active loan.</li>
                        </ul>
                    </div>
                </section>

                {/* Risk Fund & Insurance */}
                <section className={styles.card}>
                    <h2>Risk Fund & Insurance</h2>
                    <p>The risk fund (Ksh 50) caters for unprecedented eventualities. In case of member demise, shares are refunded to next of kin within 6 months.</p>
                    <div className={styles.insuranceList}>
                        <span>Covered:</span>
                        <ul>
                            <li>Permanent Incapacitation (e.g., Paralysis, Stroke)</li>
                            <li>Insanity</li>
                            <li>Death</li>
                        </ul>
                    </div>
                    <p className={styles.note}>* The risk fund does not cover business commerce failures.</p>
                </section>

            </div>
        </main>
    );
}
