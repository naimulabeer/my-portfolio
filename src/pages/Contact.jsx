import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";
import "./Contact/contact.css";
import Title from "../components/Global/Title";
import { Store } from "react-notifications-component";
import "animate.css";

function Contact() {
  const form = useRef();
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const handleFocus = (field) => {
    if (field === "name") {
      setNameFocus(true);
    } else if (field === "email") {
      setEmailFocus(true);
    } else if (field === "message") {
      setMessageFocus(true);
    }
  };

  const handleBlur = (field, value) => {
    if (field === "name" && !value) {
      setNameFocus(false);
    } else if (field === "email" && !value) {
      setEmailFocus(false);
    } else if (field === "message" && !value) {
      setMessageFocus(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3oyhzef",
        "template_cgo9avj",
        form.current,
        "LszH6CSe7Uk0Ubysk"
      )
      .then(
        (result) => {
          Store.addNotification({
            title: "Successfully Sent an Email!",
            message: "teodosii@react-notifications-component",
            type: "success",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__jackInTheBox"],
            animationOut: ["animate__animated", "animate__hinge"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          console.log(result.text);
        },
        (error) => {
          Store.addNotification({
            title: "Error!",
            message: "teodosii@react-notifications-component",
            type: "danger",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__jackInTheBox"],
            animationOut: ["animate__animated", "animate__hinge"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="h-screen bg-[#F0F0F0] flex flex-col items-center justify-center"
    >
      <div className="mb-10 flex flex-col gap-4 items-center">
        <FiMail className="text-4xl mb-2 text-[#00b7c7]" />
        <Title heading="Get In Touch" />
      </div>
      <div className="text-center mb-10">
        <h2 className="text-md w-2/3 inline-block">
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email!
        </h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-container">
          <label className={nameFocus ? "floating-label" : ""}>Name</label>
          <input
            className=" w-80 h-12 px-4 py-2 hover:shadow-md"
            type="text"
            name="name"
            onFocus={() => handleFocus("name")}
            onBlur={(e) => handleBlur("name", e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label className={emailFocus ? "floating-label" : ""}>Email</label>
          <input
            className=" w-80 h-12 px-4 py-2 hover:shadow-md"
            type="email"
            name="email"
            onFocus={() => handleFocus("email")}
            onBlur={(e) => handleBlur("email", e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label className={messageFocus ? "floating-label" : ""}>
            Message
          </label>
          <textarea
            className=" w-80 h-24 px-4 py-2 hover:shadow-md"
            name="message"
            onFocus={() => handleFocus("message")}
            onBlur={(e) => handleBlur("message", e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="animate__animated animate__bounce bg-transparent text-[#00b7c7] p-2 border border-[#00b7c7] hover:bg-[#00b7c7] hover:text-white transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
