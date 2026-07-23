import styles from "./Bonuses.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Bonuses() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          <span>{SITE_CONFIG.brand.name}</span> Bonuses – Complete Breakdown you need
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.badge}>CODE: TIGER500</div>
            <h3>500% Welcome Bonus</h3>
            <p>The most generous welcome bonus in India betting industry. The deposited amount is multiplied by 5x for you to play with</p>
            <ul className={styles.list}>
              <li>₹500 deposit = ₹3,000 to play</li>
              <li>₹1,000 deposit = ₹6,000 to play</li>
              <li>₹5,000 deposit = ₹30,000 to play</li>
              <li>₹10,000 deposit = ₹60,000 to play</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>DAILY</div>
            <h3>15% Cashback</h3>
            <p>On Every day at midnight you will get 15% of the net losses from your previous day returned to your account as a reward for betting with us.</p>
            <ul className={styles.list}>
              <li>No claims needed</li>
              <li>No promo codes needed</li>
              <li>Calculated automatically</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>NO LIMIT</div>
            <h3>₹1,500 Referral Bonus</h3>
            <p>Share your referral link and earn ₹1,500 for every person who deposits ₹500 or more with us.</p>
            <ul className={styles.list}>
              <li>5 referrals = ₹7,500</li>
              <li>20 referrals = ₹30,000</li>
              <li>50 referrals = ₹75,000</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
