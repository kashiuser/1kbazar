import Image from "next/image";
import styles from "../styles/SideBar.module.css";
import logo from "./../images/logo.png";

function SideNav() {
  return (
    <div>
      <div className={styles.sidenav}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>

        <a>Blogs</a>
        <a>Career</a>
        <a>Contact Us</a>
      </div>
    </div>
  );
}

export default SideNav;
