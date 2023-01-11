import Image from "next/image";
import React, { useState } from "react";
import Input from "../components/Input";
import arrow from "../public/arrow.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <div id="contact" className="container pt-16 pb-24 flex flex-col text-center">
      <div>
        <h3 className="text-secondary uppercase text-lg">Contact Us</h3>
        <h2 className="text-primary font-bold text-4xl pt-2 pb-12">
          Connect With Us.
        </h2>
      </div>
      <form className="w-full md:w-1/3 self-center">
        <Input
          name="name"
          type="text"
          label="Full Name"
          setFormData={setFormData}
        />
        <Input
          name="email"
          type="email"
          label="Email"
          setFormData={setFormData}
        />
        <Input
          name="message"
          type="text"
          label="Your Message"
          setFormData={setFormData}
        />
      </form>
    </div>
  );
}

export default Contact;
