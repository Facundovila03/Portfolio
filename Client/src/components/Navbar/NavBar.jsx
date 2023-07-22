/* eslint-disable react/prop-types */
import { useState } from "react";
import NavBarButtons from "../NavBarButtons/NavBarButtons";
import styles from "./NavBar.module.css";

function NavBar({ scrollToSection, references }) {
  const [estilo, setEstilo] = useState(null);

  return (
    <div className={styles.container}>
      <div
        className={styles.opcionesNav}
        style={estilo ? estilo : {}}
        onScroll={() => setEstilo({ position: "fixed", top: "0px" })}>
        <NavBarButtons
          text="About"
          scrollToSection={scrollToSection}
          references={references.about}
        />
        <NavBarButtons
          text="Skills"
          scrollToSection={scrollToSection}
          references={references.skills}
        />
        <NavBarButtons
          text="Projects"
          scrollToSection={scrollToSection}
          references={references.projects}
        />
        <NavBarButtons
          text="Contact me"
          scrollToSection={scrollToSection}
          references={references.contactMe}
        />
      </div>
    </div>
  );
}

export default NavBar;
