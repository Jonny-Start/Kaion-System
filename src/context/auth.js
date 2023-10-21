import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { useLoginApi } from "../ApiConsume";
import axios from "axios";
import { useAppContext } from "./appContext";

// const adminList = ["Irisval", "RetacMaster", "freddier"];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const baseURL = "http://localhost:4000/v1/api";

  const context = useAppContext();

  React.useEffect(() => {
    const userStorage = localStorage.getItem("user");
    !user && setUser(userStorage);
  }, [user]);

  const ProcessLogin = ({ email, password }) => {
    context.setLoading(true);
    // console.log(email, password);

    axios.post(`${baseURL}/login`, { email, password }).then((response) => {
      context.setLoading(false)
      if (response.status !== 200){
        context.setError(response)
        return console.error(response);
      } 
      if (response.data.error){
        context.setError(response.data.error)
        return console.log(response.data.error);
      } 
      console.log(response.data);
      let storage = {
        _id: response.data.data._id,
        dataView: response.data.data._id,
        changedView: false,
        token: response.data.token,
        apodo: response.data.data.nickname,
        role: response.data.data.role,
      }
      setUser(storage);
      localStorage.setItem("user", JSON.stringify(storage));
      context.setError(false);
      navigate("/home");
    }).catch((error)=>{
      context.setLoading(false)
      console.log('Un error en el inicio de sesion: '.error)
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.clear();
    navigate("/login");
  };

  const auth = { user, setUser, logout, ProcessLogin};

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  // const user = localStorage.getItem("user");
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
