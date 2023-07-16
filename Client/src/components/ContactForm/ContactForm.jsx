import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";
// import { validate } from "./validate.js";

function ContactForm() {
  const form = useRef();

  const [errors, setErrors] = useState({
    from_name: "",
    sender_email: "",
    message: "",
  });

  const [values, setValues] = useState({
    from_name: "",
    sender_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const property = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [property]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79tvrsj",
        "contact_form_portfolio",
        form.current,
        "CoOK8kZ1Hup1_H_kH"
      )
      .then((result) => console.log(result));
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.formContainer}
        ref={form}
        onSubmit={sendEmail}>
        <input
          className={styles.name}
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={values.from_name}
          type="text"
          name="from_name"
          placeholder="Name"
        />
        <input
          onChange={(e) => {
            handleInputChange(e);
          }}
          className={styles.email}
          value={values.sender_email}
          type="text"
          name="sender_email"
          placeholder="Email"
        />
        <textarea
          onChange={(e) => {
            handleInputChange(e);
          }}
          className={styles.message}
          value={values.message}
          name="message"
          placeholder="Leave a message"
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
