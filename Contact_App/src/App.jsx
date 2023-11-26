import "./index.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/fireBase";

function App() {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");
      const contactSnapshot = await getDocs(contactsRef);
      const contactList = contactSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setContacts(contactList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className=" mx-auto max-w-[370px]">
      <Navbar />
      <div className="flex gap-1">
        <div className="flex px-4 relative flex-grow items-center ">
          <FiSearch className=" absolute ml-1 text-white text-3xl  " />
          <input
            type="text"
            className="pl-9 flex-grow bg-transparent h-10 rounded-md border border-white text-white"
          />
        </div>
        <FiSearch className="text-white text-5xl cursor-pointer " />
      </div>
    </div>
  );
}

export default App;
