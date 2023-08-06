/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./menuMobile.module.css";
import { AnimatePresence, motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function MenuMobile({ scrollToSection, references }) {
  const [menu, setMenu] = useState(false);
  const navigateAndClose = (arg) => {
    scrollToSection(arg);
    setMenu(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.menuIcon}
        onClick={() => {
          setMenu(!menu);
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="22"
          viewBox="0 0 34 22"
          fill="none">
          <path
            d="M2 2H32"
            stroke="#95C6A8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M2 11H32"
            stroke="#95C6A8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M2 20H32"
            stroke="#95C6A8"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <AnimatePresence>
        {menu && (
          <motion.div
            className={styles.menu}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}>
            <button
              onClick={() => setMenu(false)}
              className={styles.closeIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none">
                <path
                  d="M19.75 2.25L2.25 19.75M2.25004 2.25L19.75 19.75"
                  stroke="#0F193C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={styles.menuList}>
              <button
                className={styles.option}
                onClick={() => {
                  navigateAndClose(references.about);
                }}>
                About
              </button>
              <button
                className={styles.option}
                onClick={() => {
                  navigateAndClose(references.skills);
                }}>
                Skills
              </button>
              <button
                className={styles.option}
                onClick={() => {
                  navigateAndClose(references.projects);
                }}>
                Projects
              </button>
              <button
                className={styles.option}
                onClick={() => {
                  navigateAndClose(references.contactMe);
                }}>
                Contact me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MenuMobile;
