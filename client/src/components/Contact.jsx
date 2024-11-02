import React, { useState, useEffect, useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const [emailTextColor, setEmailTextColor] = useState("");
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [emailMessage]);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm("service_29ird9i", "template_jc0fe7b", form.current, {
        publicKey: "pQPKU10wIi06uMH9d",
      })
      .then(
        () => {
          setEmailMessage("Your email was sent :)");
          setEmailTextColor("green");
        },
        error => {
          setEmailMessage("Your email was not sent :(");
          setEmailTextColor("red");
        }
      );
    e.target.reset();
  };

  return (
    <section className="section-sm lg:pt-[250px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]"
          data-aos="zoom"
        >
          <div
            className="flex-1 flex flex-col justify-center pl-8"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <h2 className="h2 mb-3 lg:mb-7">
              Get in Touch With Us for Team Pack.
            </h2>
            <p className="mb-7 lg:mb-0">
              We are here to help you. If you have any queries or want to know
              more about our services, feel free to contact us.
            </p>
          </div>
          <form
            onSubmit={e => sendEmail(e)}
            ref={form}
            className="bg-white flex-1 shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <input
              className="form-control"
              placeholder="First name"
              required
              name="user_firstname"
              type="text"
            />
            <input
              className="form-control"
              placeholder="Last name"
              required
              name="user_lastname"
              type="text"
            />
            <input
              className="form-control"
              placeholder="Email address"
              required
              name="user_email"
              type="email"
            />
            <textarea
              className="form-control py-5 h-[165px] resize-none"
              placeholder="Message"
              name="user_message"
            ></textarea>
            <button className="btn btn-lg btn-orange" type="submit">
              Send Message
            </button>
            <p style={{ color: emailTextColor }}>{emailMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
