/* eslint-disable no-undef */
import { useState } from "react";
import Title from "../components/Global/Title";
import { FiMail } from "react-icons/fi";
import FormInput from "../components/FormInput/FormInput";

function Contact() {
  return (
    <div
      id="contact"
      className="h-screen bg-[#F0F0F0] flex flex-col items-center justify-center"
    >
      <div className="mb-10 flex flex-col gap-4 items-center">
        <FiMail className="text-4xl mb-2 text-[#00b7c7]" />
        <Title heading="Get In Touch" />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-md w-2/3 inline-block">
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email!
        </h2>
      </div>
      <form>
        <FormInput
          name="name"
          type="text"
          required
          //onChange={handleChange}
          value={name}
          label="Name"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          //onChange={handleChange}
        />

        <FormInput
          label="Message"
          name="message"
          type="textfield"
          required
          //onChange={handleChange}
        />

        <button className="bg-transparent text-[#00b7c7] p-2 border border-[#00b7c7] hover:bg-[#00b7c7] hover:text-white transition-all duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
