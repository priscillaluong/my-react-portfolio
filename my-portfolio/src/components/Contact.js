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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid. Please try again.");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form">
      <input
        type="name"
        placeholder="Name"
        name="name"
        className="inputBox"
        onChange={handleInputChange}
        value={name}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="inputBox"
        onChange={handleInputChange}
        value={email}
      />
      <textarea
        placeholder="Your message"
        name="message"
        className="inputBoxMessage"
        onChange={handleInputChange}
        value={message}
      />
      <button className="btn" type="submit" onClick={handleSubmit}>
        Send a message
      </button>
    </form>
  );
};

export default Contact;
