import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import validate from "./validate.js";
import axios from "axios";
import send from "../../assets/icons/send.svg";
import check from "../../assets/icons/check.svg";
import warning from "../../assets/icons/exclamation.svg";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import Socials from "../socials/socials";

function ContactForm() {
  const form = useRef();

  const [errors, setErrors] = useState({
    from: "This field is required",
    message: "This field is required",
    name: "This field is required",
  });

  const [values, setValues] = useState({
    from: "",
    message: "",
    name: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const property = e.target.name;
    const value = e.target.value;
    validate(property, value, errors, setErrors);
    setValues({ ...values, [property]: value });
  };

  const [alertMessage, setAlertMessage] = useState("");
  const [alert, setAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!errors.from && !errors.name && !errors.message) {
      axios
        .post("http://localhost:3001/contactmail", values)
        .then(({ data }) => {
          setAlertMessage(data.message);
          setAlert(true);
        })
        .catch((err) => {
          setAlertMessage(err.response.data.message);
          setAlert(true);
        });
    } else {
      setAlertMessage("An error occured, please check your inputs");
      setAlert(true);
    }
  };

  const [errorProp, setErrorProp] = useState("");
  const [errorShow, setErrorShow] = useState(false);
  const handleErrorInput = (e, prop) => {
    e.preventDefault();

    setErrorShow(!errorShow);
    setErrorProp(prop);
  };

  return (
    <div className={styles.container}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={alert}
        onClose={() => setAlert(false)}
        autoHideDuration={2000}>
        <Alert
          onClose={() => setAlert(false)}
          severity={
            !errors.name && !errors.message && !errors.from
              ? "success"
              : "error"
          }>
          {alertMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={errorShow}>
        <Alert severity="error">{errors[errorProp]}</Alert>
      </Snackbar>
      <form
        className={styles.formContainer}
        ref={form}
        onSubmit={sendEmail}>
        <h1 className={styles.contactMe}>Contact me</h1>
        <div className={styles.nameInput}>
          <input
            onChange={(e) => {
              handleInputChange(e);
            }}
            className={styles.name}
            value={values.name}
            type="text"
            name="name"
            placeholder="Name"
          />
          {errors.name ? (
            <img
              onMouseEnter={(e) => handleErrorInput(e, "name")}
              onMouseLeave={(e) => handleErrorInput(e, "name")}
              src={warning}
              className={styles.inputError}
            />
          ) : (
            <img
              src={check}
              className={styles.inputError}
            />
          )}
        </div>
        <div className={styles.emailInput}>
          <input
            onChange={(e) => {
              handleInputChange(e);
            }}
            className={styles.email}
            value={values.from}
            type="text"
            name="from"
            placeholder="Email"
          />
          {errors.from ? (
            <img
              onMouseEnter={(e) => handleErrorInput(e, "from")}
              onMouseLeave={(e) => handleErrorInput(e, "from")}
              src={warning}
              className={styles.inputError}
            />
          ) : (
            <img
              src={check}
              className={styles.inputError}
            />
          )}
        </div>
        <div className={styles.messageInput}>
          <textarea
            onChange={(e) => {
              handleInputChange(e);
            }}
            className={styles.message}
            value={values.message}
            name="message"
            placeholder="Leave a message"
          />
          {errors.message ? (
            <img
              onMouseEnter={(e) => handleErrorInput(e, "message")}
              onMouseLeave={(e) => handleErrorInput(e, "message")}
              src={warning}
              className={styles.inputErrorMessage}
            />
          ) : (
            <img
              src={check}
              className={styles.inputErrorMessage}
            />
          )}
        </div>
        <button className={styles.sendButton}>
          <p className={styles.sendText}>SEND</p>
          <img
            src={send}
            className={styles.sendIcon}
            onClick={sendEmail}
            alt="send"
          />
        </button>
        <hr className={styles.barra}></hr>
        <Socials />
      </form>
    </div>
  );
}

export default ContactForm;
