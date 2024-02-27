import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function MoreAboutSection() {
  const form = useRef();
  const [emailInputValue, SetEmailInputValue] = useState("");

  const sendEmail = (e) => {
    console.log(emailInputValue);
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
    <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 w-screen h-auto p-12 bg-white">
      <div className="flex flex-col gap-4 p-4 text-center md:text-left">
        <h1 className="text-3xl">Do you wanna know more about WineGuide?</h1>
        <p className="text-sm">
          Sign up and learn about our subscription and how you can enjoy our
          handpicked premium wines!
        </p>
      </div>
      <div className="flex flex-col">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center md:items-right md:flex-row gap-4"
        >
          <input
            placeholder="Enter your e-mail"
            type="email"
            onChange={(ev) => {
              SetEmailInputValue(ev.target.value);
            }}
            name="user_email"
            className="shadow border border-[#FCA311] rounded w-72 md:w-60 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
          ></input>

          <input
            type="submit"
            value="Send me all details"
            className="bg-[#14213D] hover:bg-[#FCA311] text-white w-72 md:w-48 font-bold p-3 rounded cursor-pointer"
          />
        </form>

        <p className="pt-4 text-sm">
          We care about the protection of your data. Read our{" "}
          <span className="text-[#FCA311] underline decoration-solid cursor-pointer">
            privacy policy.
          </span>
        </p>
      </div>
    </section>
  );
}
