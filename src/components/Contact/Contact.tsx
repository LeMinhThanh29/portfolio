import classNames from "classnames/bind";
import React, { useRef } from "react";
import styles from "./scss/Contact.module.scss";
import Title from "../Title/Title";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
const cx = classNames.bind(styles);
interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}
function Contact() {
  const SERVICE_ID = "service_ga62hkc";
  const TEMPLATE_ID = "template_qumre8t";
  const PUBLIC_KEY = "CVVfoRdQhFgFv0lVu";
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = () => {
    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        () => {
          console.log("SUCCESS!");
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
    }
  };

  return (
    <section className={cx("contact_container")} id="contact">
      <div className={cx("contact_row")}>
        <Title text="Contact Me" />
        <div className={cx("contact_body")}>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className={cx("header_container")}
          >
            <div className={cx("form-group")}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                  maxLength: 50,
                })}
                name="name"
              />
              {errors.name && (
                <p className={cx("error_message")}>{errors.name.message}</p>
              )}
            </div>

            <div className={cx("form-group")}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                name="email"
              />
              {errors.email && (
                <p className={cx("error_message")}>{errors.email.message}</p>
              )}
            </div>

            <div className={cx("form-group")}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                {...register("subject", {
                  required: "Subject is required",
                  maxLength: 100,
                })}
                name="subject"
              />
              {errors.subject && (
                <p className={cx("error_message")}>{errors.subject.message}</p>
              )}
            </div>

            <div className={cx("form-group")}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                {...register("message", {
                  required: "Message is required",
                  minLength: 10,
                })}
                name="message"
              />
              {errors.message && (
                <p className={cx("error_message")}>{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className={cx("submit_button")}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
