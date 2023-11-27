/* eslint-disable react/prop-types */
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/fireBase";
import useDisclose from "../hooks/useDisclose";
import AddAndUpdate from "./AddAndUpdate";
import { toast } from "react-toastify";
function ContactCard({ contact }) {
  const { onOpen, isOpen, onClose } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("contact deleted succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-yellow p-2 "
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-5xl text-orange " />
          <div>
            <h1 className="text-md">{contact.name}</h1>
            <p className="text-sm">{contact.email}</p>
          </div>
          <div className="flex text-3xl items-center">
            <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
            <IoMdTrash
              onClick={() => deleteContact(contact.id)}
              className="cursor-pointer text-orange"
            />
          </div>
        </div>
      </div>
      <AddAndUpdate
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
        contact={contact}
      />
    </>
  );
}

export default ContactCard;
