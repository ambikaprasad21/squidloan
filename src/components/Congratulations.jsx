import styles from "./Congratulations.module.css";

function Congratulations({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>🎉 Congratulations! 🎉</h2>
        <p>Loan disbursed successfully</p>
        <p>Bank Details: xyz bank</p>
        <button onClick={onClose} className={styles.closeBtn}>
          Download receipt
        </button>
      </div>
    </div>
  );
}

export default Congratulations;
