import * as React from "react";
import { useState, createContext } from "react";

export const Compo = () => {
  return <div></div>;
};
/*
export const ContactsContext = createContext<ContactsContextType>(
  {} as ContactsContextType
);

type User = {
  name: string;
  age: number;
};

type ContactsContextType = {
  contacts: User[];
  setContacts: React.Dispatch<React.SetStateAction<User[]>>;
};

type Props = {
  children: React.ReactNode;
};

export const ContactsProvider = (props: Props) => {
  const [contacts, setContacts] = useState<User[]>([
    {
      name: "John",
      age: 20
    },
    {
      name: "Terry",
      age: 45
    },
    {
      name: "Bob",
      age: 67
    }
  ]);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {props.children}
    </ContactsContext.Provider>
  );
};
*/
