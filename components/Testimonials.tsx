import styles from "./Testimonials.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Testimonials() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          What Our Members Say About Tiger365
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              “I have been using it for 3 IPLs and the withdrawals are genuinely quick; I had never waited for more than 20 minutes for a UPI withdrawal. I recommended it to 4 of my friends and they all had the same positive experience. This is the only platform I trust.”
            </p>
            <div className={styles.author}>
              <h4>Vikram Mehta</h4>
              <span>Hyderabad</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              “I was afraid to deposit any money on any platform after losing heavily on a Telegram channel, but one of my friends recommended Tiger365, and I deposited ₹100 and made some bets on CSK matches and ended up winning ₹3,400, which came to my Paytm wallet in just 15 minutes.”
            </p>
            <div className={styles.author}>
              <h4>Sneha Iyer</h4>
              <span>Chennai</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              “The minimum deposit limit of ₹100 encouraged me to start, I was not ready to invest ₹1,000 on a new platform. I am a regular member of Tiger365 now after 3 months, and I have withdrawn more than ₹40,000 in total with zero issues. The live markets during the IPL are amazing.”
            </p>
            <div className={styles.author}>
              <h4>Arjun Kapoor</h4>
              <span>Jaipur</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              “I had a lot of questions about the live login registration, and the support team responded to my queries on WhatsApp within seconds. My ID was created in less than a minute, so much so that it left me embarrassed about considering other platforms.”
            </p>
            <div className={styles.author}>
              <h4>Ravi Verma</h4>
              <span>Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
