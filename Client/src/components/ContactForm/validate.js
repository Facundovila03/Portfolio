const validate = (property, value, errors, setErrors) => {
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (property === "name") {
    if (!value) {
      setErrors({ ...errors, name: "This field is required" });
    } else if (value.length < 3) {
      setErrors({ ...errors, name: "Name must be at least 3 characters" });
    } else {
      setErrors({ ...errors, name: "" });
    }
  } else if (property === "from") {
    if (!value) {
      setErrors({ ...errors, from: "This field is required" });
    } else if (!validEmail.test(value)) {
      setErrors({ ...errors, from: "Invalid email" });
    } else {
      setErrors({ ...errors, from: "" });
    }
  } else if (property === "message") {
    if (!value) {
      setErrors({ ...errors, message: "This field is required" });
    } else if (value.length < 10) {
      setErrors({
        ...errors,
        message: "Message must be at least 10 characters",
      });
    } else {
      setErrors({ ...errors, message: "" });
    }
  }
};
export default validate;
