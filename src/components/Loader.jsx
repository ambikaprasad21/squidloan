import styles from "./Loader.module.css";

function Loader() {
  return (
    <div>
      <div className={styles.gallery}>
        <img src="./images/seong-ki.png" alt="" />
        <img src="./images/dkachi.png" alt="" />
        <img src="./images/squre-sol.png" alt="" />
        <img src="./images/master.png" alt="" />
      </div>
    </div>
  );
}

export default Loader;
