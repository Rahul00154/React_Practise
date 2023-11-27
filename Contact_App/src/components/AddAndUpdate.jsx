/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/fireBase";
import { toast } from "react-toastify";

import * as Yup from "yup";

const contactValidation = Yup.object().shape({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

function AddAndUpdate({ isOpen, onClose, isUpdate, contact }) {
  const addUser = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("contact added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, contact, id);
      await updateDoc(contactRef);
      onClose();
      toast.success("contact updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? UpdateContact(values, contact.id) : addUser(values);
          }}
        >
          <Form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name:</label>
              <Field name="name" className="border h-8" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email:</label>
              <Field name="email" className="border h-8" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className=" group relative overflow-hidden rounded-sm bg-white text-lg shadow border-none  px-4 py-1.5  self-end ">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">
                {isUpdate ? "Update" : "Add"} Contact
              </span>
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default AddAndUpdate;
