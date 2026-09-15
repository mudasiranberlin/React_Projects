function ContactForm({PageHero}) {
  function handleSubmit(e) {
    e.preventDefault();

    alert(
      "Thank you for contacting us. Your message has been received."
    );
  }

  return (
    <form
      className="university-contact-form"
      onSubmit={handleSubmit}
    >

      <h3>Send Us a Message</h3>

      <div className="form-two">
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        required
      />

      <input
        type="tel"
        placeholder="Phone Number"
      />

      <textarea
        rows="7"
        placeholder="Your Message"
        required
      />

      <button type="submit" className="page-button">
        Send Message →
      </button>

    </form>
  );
}

export default ContactForm