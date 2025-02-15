import { useRef } from "react";
import styles from "./CibilFileUpload.module.css";
import { MdUpload } from "react-icons/md";

function CibilFileUpload() {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected File:", file.name);
      // Handle file upload logic here (e.g., send to backend)
    }
  };
  return (
    <div className={styles.container}>
      <h1>
        Confused About Your <br /> Loan Eligibilty?
      </h1>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2>
            Upload Your CIBIL Report <br /> & <span>Get Answers!</span>
          </h2>
          <div className={styles.btn_icon}>
            {/* <div className={styles.btnWrapper}> */}
            <input
              type="file"
              ref={fileInputRef}
              className={styles.fileInput}
              onChange={handleFileChange}
              accept=".pdf"
            />
            <label
              className={styles.btn}
              onClick={() => fileInputRef.current.click()}
            >
              Upload & Ask Now
            </label>
            {/* <button className={styles.btn}>Upload & Ask Now</button> */}
            {/* </div> */}
            <div className={styles.up_icon}>
              <MdUpload />
            </div>
          </div>
        </div>
        <div className={styles.cre_si}>
          <img src="./images/credit-score01.png" alt="credit score " />
        </div>
      </div>
      <div className={styles.bg_blur}></div>
    </div>
  );
}

export default CibilFileUpload;
