import { useState } from "react";
import "../styles/Contact.css";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputValue = target.value;

    if (inputValue === "") {
      setErrorMessage("This field is required.");
      setTimeout(() => {
        setErrorMessage("");
      }, 6000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid. Please try again!");
      setTimeout(() => {
        setErrorMessage("");
      }, 6000);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div>
      <form className="form">
        <input
          type="name"
          placeholder="Name"
          name="name"
          className="inputBox"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="inputBox"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={email}
        />
        <textarea
          placeholder="Your message"
          name="message"
          className="inputBoxMessage"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={message}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          Send a message
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="errorMessage">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
