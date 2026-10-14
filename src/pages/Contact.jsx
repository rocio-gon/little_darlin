import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <h1>Get in Touch</h1>
      <p>
        We'd love to hear from you! If you have questions
        about our registry or would like to send us a note,
        please reach out.
      </p>

      <form>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Write your message..."
        />

        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}

export default Contact;