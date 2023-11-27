import "./index.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/fireBase";
import ContactCard from "./components/ContactCard";
import { FaCirclePlus } from "react-icons/fa6";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";

function App() {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclose();

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  const getContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
        return contactList;
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className=" mx-auto max-w-[370px]">
        <Navbar />
        <div className="flex gap-1">
          <div className="flex px-4 relative flex-grow items-center ">
            <FiSearch className=" absolute ml-1 text-white text-3xl  " />
            <input
              onChange={filterContacts}
              type="text"
              className="pl-9 flex-grow bg-transparent h-10 rounded-md border border-white text-white"
            />
          </div>
          <FaCirclePlus
            onClick={onOpen}
            className="text-white text-5xl cursor-pointer "
          />
        </div>
        <div className=" mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFound />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
