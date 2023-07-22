import styles from "./NavBarButtons.module.css";

// eslint-disable-next-line react/prop-types
function NavBarButtons({ text, references, scrollToSection }) {
  return (
    <button
      onClick={() => scrollToSection(references)}
      className={styles.container}>
      {text}
    </button>
  );
}

export default NavBarButtons;

//! falta hacer que si estoy en una parte que me seleccione esa parte en el boton
