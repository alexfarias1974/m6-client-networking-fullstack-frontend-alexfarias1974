import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { createContext } from "react";

export const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({});

  const toHandleContactSubmit = async (data) => {
    console.log("Estou clicado")
    const token = localStorage.getItem("@userToken");

    try {
      api.get(`/contacts/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      api
        .post("/contacts", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setContactData(response.data);
          toast.success("Contato cadastrado com sucesso!");
        });
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    }
  };

  const logout = () => {
    window.localStorage.clear();
    setContactData(null);
    navigate("/login", { replace: true });
  };

  return (
    <ContactContext.Provider
      value={{
        contactData,
        setContactData,
        toHandleContactSubmit,
        navigate,
        logout,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
