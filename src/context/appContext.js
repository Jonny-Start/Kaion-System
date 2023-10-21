import React from "react";


import axios from "axios";
//import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const useError = (props) => setError(...error, [props]);

  const useSuccess = (props) => setSuccess(...success, [props]);
  
  /**
   * Consum API
  */
  //const auth = useAuth();
  const baseURL = "http://localhost:4000/v1/api";
  const navigate = useNavigate();

  const useCreateAccount = (allData) => {
    setLoading(true);

    const nickname = allData.nickname;
    const phoneNumber = allData.phoneNumber;
    const prefixNumber = allData.prefixNumber;
    const email = allData.email;
    const validationEmail = true;
    const password = allData.password;
    const role = "Admin";
    const active = true;
    const usersAvailable = 5;
    const nameCompany = allData.nameCompany;
    const delegateCompany = allData.delegateCompany;
    const fullName = allData.fullName;

    axios
      .post(`${baseURL}/userRegister`, {
        fullName: fullName,
        nickname: nickname,
        phoneNumber: phoneNumber,
        prefixNumber: prefixNumber,
        email: email,
        validationEmail: validationEmail,
        password: password,
        role: role,
        active: active,
        usersAvailable: usersAvailable,
        nameCompany: nameCompany,
        delegateCompany: delegateCompany,
      })
      .then(async (response) => {
        context.setLoading(false);
        if (response.status !== 200 && response.status !== 201) {
          context.setError(response);
          return console.error(response);
        }
        if (response.data.error) {
          context.setError(response.data.error);
          return console.log(response.data.error);
        }
        console.log(response.data);
        let storage = {
          _id: response.data._id,
          dataView: response.data._id,
          changedView: false,
          apodo: response.data.nickname,
          role: response.data.role,
        }
        await localStorage.setItem("user", JSON.stringify(storage));
        context.setError(false);
        navigate("/home");

        //auth.ProcessLogin({ email, password });
      })
      .catch((error) => {
        context.setLoading(false);
        console.log("Un error al crear cuenta: "+error.message);
      });
  }

/**
 * End consum API
 */

  const context = {
    loading,
    error,
    success,
    useCreateAccount,
    setLoading,
    setError,
    setSuccess,
    useError,
    useSuccess,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const context = React.useContext(AppContext);
  return context;
}

export { AppProvider, useAppContext };
