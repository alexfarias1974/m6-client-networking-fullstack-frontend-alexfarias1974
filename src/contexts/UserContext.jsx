// import axios from "axios";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const loadUser = async() => {
      const token = localStorage.getItem("@userToken");
      const userId = localStorage.getItem("@userId");
      console.log(token)
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data } = await api.get(`/users/${userId}`);
          setUser(data);
          // console.log(data);
        } catch (error) {
          // console.log(error, "*****caindo aqui");
        }
      }
      setLoading(false);
    };
    loadUser();
  }, );

  const loginData = (data) => {
    api
    .post("/login", data)
    .then((response) => {
      setUser(response.user);
      // console.log(response.user);
      // localStorage.clear();
      // localStorage.setItem("@userToken", response.data.token);
      // localStorage.setItem("@userID", response.data.id);
      navigate("/home", { replace: true });
      toast.success("Login efetuado com sucesso!");
      
    })
    .catch((error) =>
      console.log(error), toast.error("Email ou senha não cadastrados!"));
  }
  
  const logout = () => {
    window.localStorage.clear();
    setUser(null);
    navigate("/login", { replace: true });
  };

  const signIn = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Usuário cadastrado com sucesso");
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Alguma coisa deu errado");
      });
  };

  const toRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{
        toRegister,
        loginData,
        logout,
        user,
        loading,
        setLoading,
        signIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
