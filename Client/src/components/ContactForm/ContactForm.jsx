import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";
// import { validate } from "./validate.js";
import axios from "axios";

function ContactForm() {
  const form = useRef();

  // const [errors, setErrors] = useState({
  //   from_name: "",
  //   sender_email: "",
  //   message: "",
  // });

  const [values, setValues] = useState({
    from: "",
    message: "",
    name: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const property = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [property]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/contactmail", values)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.formContainer}
        ref={form}
        onSubmit={sendEmail}>
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
