import { replace, useNavigate } from "react-router-dom";
import styles from "./LoanEligibility.module.css";
import {
  MdCloudUpload,
  MdOutlineFileDownload,
  MdCheckBox,
} from "react-icons/md";
import Header from "../components/Header";

function LoanEligibility() {
  const navigate = useNavigate();
  function handleRequestLoan() {
    navigate("/disbursal", { replace: true });
  }
  function handleDownloadKFS() {}
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.loan_amount}>
          <div className={styles.g_u}>
            <p>
              Welcome, <span className={styles.e_l}>John Doe</span> Based on
              your credit score, here’s your eligible loan amount.
            </p>
            <button onClick={handleRequestLoan}>Request Loan</button>
          </div>
          <div className={styles.loan_amt}>
            <p className={styles.l_t}>Loan Amount</p>
            <p className={styles.amt}>₹ 20, 000</p>
          </div>
        </div>
        <div className={styles.upload}>
          <h1>
            <span> upload your bank </span>
            statement <br /> for higher eligibility
          </h1>
          <div className={styles.f_u}>
            <p>file type (pdf only)</p>
            <button type="file">
              <p>Upload Bank Statement</p>
              <MdCloudUpload style={{ color: "white" }} />
            </button>
          </div>
        </div>

        <div className={` ${styles.loan_amount} ${styles.kfs}`}>
          <div>
            <h2>Key Fact Statement (KFS)!</h2>
            <div className={styles.kfs_item}>
              <div className={styles.item}>
                <MdCheckBox />
                <span>Loan Amount: ₹20,000</span>
              </div>
              <div className={styles.item}>
                <MdCheckBox />
                <span>Interest Rate: 12% per month</span>
              </div>
              <div className={styles.item}>
                <MdCheckBox />
                <span>Loan Tenure: 5 months</span>
              </div>
              <div className={styles.item}>
                <MdCheckBox />
                <span>Repayment days: 1 month</span>
              </div>
              <div className={styles.item}>
                <MdCheckBox />
                <span>Processing + GST Fee: 1% of loan amount</span>
              </div>
              {/* <div className={styles.item}>
              <MdCheckBox />
              <span>Prepayment Charges: 2% if closed within 12 months</span>
            </div> */}
            </div>
            <div className={styles.f_u}>
              <button className={styles.kfs_down} onClick={handleDownloadKFS}>
                <span> Download Key Fact Statement</span>
                <MdOutlineFileDownload />
              </button>
            </div>
          </div>
          <div className={styles.kfs_img}>
            <img src="./images/stand-soldier.png" alt="standing soldier" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoanEligibility;
