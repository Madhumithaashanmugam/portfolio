import { useState, useEffect, useRef } from "react";
import "./ContactSection.css";
import { Mail, Phone, Linkedin, Globe, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [state, handleSubmit] = useForm("xaqpplyd");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  useEffect(() => {
    if (state.succeeded) {
      alert("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }
  }, [state.succeeded]);

  const contacts = [
    { icon: Phone, label: "+91 6305410507", href: "tel:+916305410507" },
    { icon: Mail, label: "madhumithaashanmugam@gmail.com", href: "mailto:madhumithaashanmugam@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Globe, label: "Portfolio", href: "#" },
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>

      <div className="contact-container">

        <div className={`contact-header ${visible ? "show" : ""}`}>
          <Mail className="contact-main-icon" />
          <h2 className="contact-title">Get In Touch</h2>
          <div className="contact-line"></div>
        </div>

        <div className="contact-grid">

          <div className={`contact-info ${visible ? "show" : ""}`}>

            <p className="contact-description">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out!
            </p>

            <div className="contact-links">

              {contacts.map(({ icon: Icon, label, href }) => (

                <a key={label} href={href} className="contact-link">

                  <div className="contact-icon-box">
                    <Icon className="contact-icon"/>
                  </div>

                  <span>{label}</span>

                </a>

              ))}

            </div>

          </div>

          <form 
            className={`contact-form ${visible ? "show" : ""}`} 
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e)=>setForm({...form,email:e.target.value})}
              required
            />

            <ValidationError 
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={form.message}
              onChange={(e)=>setForm({...form,message:e.target.value})}
              required
            ></textarea>

            <ValidationError 
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button 
              type="submit" 
              className="send-btn"
              disabled={state.submitting}
            >
              <Send className="send-icon"/>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;