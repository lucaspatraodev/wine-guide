import { useState } from "react";
import TextField from "../FormContactTextField";

export default function FormContact() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    console.log("Name:", name);
    console.log("E-mail:", emailAddress);
    console.log("Message:", message);
  };

  return (
    <div className="text-center w-full min-[700px]:min-h-[60vh] p-4 md:w-6/12 mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold pb-4">Send Us a Message</h1>
      <p className="text-[#8C8C8C] text-sm">
        here are countless food websites catering to various cuisines, dietary
        preferences, and purposes.
      </p>
      <form onSubmit={handleSubmit} className="py-6" autoComplete="off">
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
            inputValue={emailAddress}
            onValueChange={(inputValue) => setEmailAddress(inputValue)}
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
