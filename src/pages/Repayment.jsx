import styles from "./Repayment.module.css";

function Repayment() {
  return (
    <div className={styles.container}>
      <div className={styles.sideImg}>
        <img src="./images/logo-01.png" alt="squid game logo" />
      </div>
      <div className={styles.details}>
        <h1>Bank Details</h1>
        <div className={styles.g_2}>
          <div>
            <p>Bank Name</p>
            <div>XYZ bank</div>
          </div>
          <div>
            <p>Account Number</p>
            <div>0000-0000-0000</div>
          </div>
          <div>
            <p>IFSC Code</p>
            <div>BAN000012</div>
          </div>
          <div>
            <p>UPI ID</p>
            <div>upi@okaxis</div>
          </div>
          <div>
            <p>Account Type</p>
            <div>XYZ account</div>
          </div>
          <div>
            <p>Bank Name</p>
            <img src="./images/qr_code.png" alt="qr code" />
          </div>
          <div>
            <p>Share Repayment Details</p>
            <div>repayment@mail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repayment;
