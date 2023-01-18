import SideNav from "./SideNav";
import styles from "../styles/SideBar.module.css";

export default function MainDashboard() {
  return (
    <div>
      <SideNav />
      <div className={styles.main}>
        <div className={styles.logouttext}>
          <button type="submit">Log Out</button>
        </div>
        <div className={styles.MaincountDiv}>
          <div className={styles.countDiv}>
            {" "}
            <p className={styles.textCount}>Count &nbsp;45</p>
          </div>
          <div className={styles.countDiv}>
            {" "}
            <p className={styles.textCount}>Count &nbsp;15</p>
          </div>
          <div className={styles.countDiv}>
            {" "}
            <p className={styles.textCount}>Count &nbsp;78</p>
          </div>
        </div>
      </div>
    </div>
  );
}
