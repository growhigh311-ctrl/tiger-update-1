import styles from "./WithdrawalProcess.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function WithdrawalProcess() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Tiger365 Withdrawal Process – Fast, Transparent & Guaranteed
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          The most common question new bettors ask is, “Will I be able to withdraw my winnings?” The short answer is yes, and you can do it with ease and speed.
        </p>

        <div className={styles.methodsGrid}>
          <div className={styles.methodCard}>
            <div className={styles.icon}>📱</div>
            <h3>UPI (GPay, PhonePe, Paytm)</h3>
            <div className={styles.time}>Instant to 30 mins</div>
            <p>Fastest withdrawal method as it is compatible with all smartphones in India</p>
          </div>
          
          <div className={styles.methodCard}>
            <div className={styles.icon}>🏦</div>
            <h3>Bank Transfer (NEFT/IMPS)</h3>
            <div className={styles.time}>1 to 2 hours</div>
            <p>Most reliable withdrawal method available 24/7</p>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.icon}>₿</div>
            <h3>Crypto (USDT, Bitcoin)</h3>
            <div className={styles.time}>5 to 15 mins</div>
            <p>Cryptocurrency wallet withdrawals are processed almost instantly</p>
          </div>
        </div>

        <div className={styles.recordsBox}>
          <h3>Verified Withdrawal Records</h3>
          <p className={styles.recordSub}>Real members. Real transactions. Real amounts.</p>
          <ul className={styles.recordList}>
            <li><strong>Rajesh Sharma, Mumbai</strong> – ₹1,85,000 via UPI – 22 minutes</li>
            <li><strong>Priya Singh, Delhi</strong> – ₹45,000 via Paytm – 11 minutes</li>
            <li><strong>Suresh Patel, Bangalore</strong> – ₹2,50,000 via Bank Transfer – 18 minutes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
