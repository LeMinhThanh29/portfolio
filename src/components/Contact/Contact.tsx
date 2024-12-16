import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./scss/Contact.module.scss";
import Title from "../Title/Title";
import { SubmitHandler, useForm } from "react-hook-form";
const cx = classNames.bind(styles);
interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log("Form Data:", data);
    // Here you can send the data to your backend/API
  };
  return (
    <section className={cx("contact_container")} id="contact">
      <div className={cx("contact_row")}>
        <Title text="Contact Me" />
        <div className={cx("contact_body")}>
        <form
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
