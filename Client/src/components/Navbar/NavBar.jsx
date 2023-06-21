import { useState } from "react";
import NavBarButtons from "../NavBarButtons/NavBarButtons";
import styles from "./NavBar.module.css";

function NavBar() {
  const [estilo, setEstilo] = useState(null);

  return (
    <div className={styles.container}>
      <div
        className={styles.opcionesNav}
        style={estilo ? estilo : {}}
        onScroll={() => setEstilo({ position: "fixed", top: "0px" })}
      >
        <NavBarButtons text="About" />
        <NavBarButtons text="Skills" />
        <NavBarButtons text="Projects" />
        <NavBarButtons text="Contact me" />
      </div>
    </div>
  );
}

export default NavBar;
