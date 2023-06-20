import NavBarButtons from "../NavBarButtons/NavBarButtons";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.container}>
      <span className={styles.blur}>c</span>
      <div className={styles.opcionesNav}>
        <NavBarButtons text="About" />
        <NavBarButtons text="Skills" />
        <NavBarButtons text="Projects" />
        <NavBarButtons text="Contact me" />
      </div>
    </div>
  );
}

export default NavBar;
