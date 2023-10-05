import "./contact.style.scss";
import { useForm, ValidationError } from "@formspree/react";
export default function ContactComponent() {
  const [state, handleSubmit] = useForm("mbjvpkjw");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <div className="contact-container1">
      <div className="contact-container2">
        <div className="contact-card">
          <span className="contact-title">leave an enquiry</span>
          <form onSubmit={handleSubmit} className="form">
            <div className="group">
              <input placeholder="" type="text" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="group">
              <input placeholder="" type="email" id="email" name="email" />
              <label htmlFor="email">Email</label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="group">
              <textarea
                placeholder=""
                id="message"
                name="message"
                rows="8"
              ></textarea>
              <label htmlFor="comment">Message/Request</label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
