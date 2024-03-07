import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "../FormContactTextField";

export default function FormContact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const [emailInputValue, SetEmailInputValue] = useState("");

  const sendEmail = (e) => {
    console.log(emailInputValue);
    console.log("Name:", name);
    console.log("E-mail:", emailAddress);
    console.log("Message:", message);
    e.preventDefault();

    const serviceID = import.meta.env.VITE_REACT_APP_YOUR_SERVICE_ID;
    const templateID = import.meta.env.VITE_REACT_APP_YOUR_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_YOUR_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        user_email: emailInputValue,
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("E-mail sent!");
        },
        (error) => {
          console.log("Error in sending e-mail:", error);
        }
      );
  };

  return (
    <div className="text-center w-full min-[700px]:min-h-[60vh] p-4 md:w-6/12 mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold pb-4">Send Us a Message</h1>
      <p className="text-[#8C8C8C] text-sm">
        here are countless food websites catering to various cuisines, dietary
        preferences, and purposes.
      </p>
      <form ref={form} onSubmit={sendEmail} className="py-6" autoComplete="off">
        <div className="flex flex-col justify-center items-center gap-2">
          <TextField
            label="Name"
            placeholder="Name"
            inputValue={name}
            onValueChange={(inputValue) => setName(inputValue)}
          />
          <TextField
            label="E-mail"
            placeholder="Your best e-mail address"
            name="user_email"
            inputValue={emailInputValue}
            onValueChange={(inputValue) => SetEmailInputValue(inputValue)}
          />
          <TextField
            label="Message"
            placeholder="Your message"
            inputValue={message}
            onValueChange={(inputValue) => setMessage(inputValue)}
          />

          <button
            type="submit"
            className="mt-4 w-full md:w-8/12 p-2 bg-[#FCA311] hover:bg-[#E39D00] text-white text-lg rounded-lg flex items-center justify-center shadow-md transition duration-300 ease-in-out"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
