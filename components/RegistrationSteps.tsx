import styles from "./RegistrationSteps.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function RegistrationSteps() {
  return (
    <section className={`section-padding ${styles.section}`} id="steps">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <h2 className="section-title">
              How to Generate Your Tiger365 ID
            </h2>
            <p className={styles.intro}>
              Getting your ID is the first and easiest step. With Tiger365, even a novice user can get his own account without the trouble of a tedious registration process.
            </p>
            
            <div className={styles.stepsList}>
              <div className={styles.step}>
                <h3>Step 1 – Initiate Chat on WhatsApp</h3>
                <p>Click on any Get ID button below to chat with an official Tiger365 assistant on WhatsApp.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 2 – Provide Nickname</h3>
                <p>State your desired user name or nickname that will be linked to your account.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 3 – Instant ID Generation</h3>
                <p>The back-end will generate your login credentials, wallet address, and the site link as soon as your WhatsApp message is delivered.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 4 – Make Payment</h3>
                <p>Make a minimum deposit of ₹100 using UPI, WhatsApp Pay, or Bank transfer to activate your chips balance</p>
              </div>

              <div className={styles.step}>
                <h3>Step 5 – Login & Start Betting</h3>
                <p>Use the login link and credentials provided, select any game of your choice, and start betting on live matches/market.</p>
              </div>

              <div className={styles.step}>
                <h3>Step 6 – 24/7 Withdrawals</h3>
                <p>With any withdrawal requests sent to WhatsApp, the amount reflected in your account will be transferred to your bank account within 15-30 minutes.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src={SITE_CONFIG.images.aboutImage} 
                alt="Tiger365 Registration Steps" 
                width={1000}
                height={500}
                className={styles.stepImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
