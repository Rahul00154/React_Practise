import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function ContactForm() {
  return (
    <section className={`${styles.container} container`}>
      <div className={`${styles.top_btn}`}>
        <Button text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px" />} />
        <Button text="VIA CALL" icons={<FaPhoneAlt />} />
      </div>
      <Button isOutline={true} text="VIA EMAIL FROM" icons={<SiGmail />} />
      <div className={`${styles.contact_form}`}>
        <form action=""></form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
