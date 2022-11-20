const Contact = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
        <div className="">
            <h1>Thank you!</h1>
        </div>
    );
  }
  return (
    <div>
      <h1>This is the contact page</h1>
    </div>
  );
};

export default Contact;
