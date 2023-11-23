import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
    console.log(e);
    console.log("I am submit button");
  };
  return (
    <section className={`${styles.container} container`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button
            text="VIA SUPPORT CHAT"
            icons={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icons={<FaPhoneAlt />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FROM" icons={<SiGmail />} />
        <form onSubmit={handleClick}>
          <div className={`${styles.form_control}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={6} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
