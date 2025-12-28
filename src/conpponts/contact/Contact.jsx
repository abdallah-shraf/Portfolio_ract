import React, { useRef } from "react";
import "./contact.css";
import { IoMailOpenSharp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const contactData = [
  {
    id: 1,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "+01117630598",
    link: "https://api.whatsapp.com/send?phone=01117630598",
  },
  {
    id: 2,
    icon: <IoMailOpenSharp />,
    title: "Maill",
    info: "abdallahashraf743@gmail.com",
    link: "mailto:abdallahashraf743@gmail.com",
  },
  {
    id: 3,
    icon: <FaFacebookMessenger />,
    title: "Messenger",
    info: "abdalla.ashraf.1829",
    link: "https://m.me/abdalla.ashraf.1829",
  },
];

function Contact() {
    const form = useRef();
     const sendEmail = (e) => {
       e.preventDefault();

       emailjs.sendForm(
         "service_j8ui9je",
         "template_hojexgj",
         form.current,
         "PDG15UhvUnzdMIvk4"
         )
         e.target.reset();
       
     };
  return (
    <section className=" contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {contactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Send a message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" required name="name" />
          <input type="email" placeholder="Your Email" required name="email" />
          <textarea
            rows={10}
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
