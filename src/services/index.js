import React from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:4000/v1/api";

function useCreateAccount({ allData }) {
  const context = useAppContext();
  context.setLoading(true);

  const auth = useAuth();

  const navigate = useNavigate();

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
    .then((response) => {
      context.setLoading(false);
      if (response.status !== 200) {
        context.setError(response);
        return console.error(response);
      }
      if (response.data.error) {
        context.setError(response.data.error);
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
      };
      auth.setUser(storage);

      localStorage.setItem("user", JSON.stringify(storage));
      context.setError(false);
      navigate("/home");
    })
    .catch((error) => {
      context.setLoading(false);
      console.log("Un error al crear cuenta: ".error);
    });
}

export { useCreateAccount };

// function useLoginApi(emailVal, passwordVal) {
//   const [data, setData] = React.useState();
// var data = {
//   email: emailVal,
//   password: passwordVal,
// };

// var config = {
//   method: "post",
//   maxBodyLength: Infinity,
//   url: `${baseURL}/login`,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   data: data,
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   axios.post(baseURL, data).then((response) => {
//     setData(response.data);
//   });
//   return data;
// }

// export { useLoginApi };

// function loginApi(emailVal, passwordVal) {
//   const endPoint = `${baseURL}login`;
//   const dataSend = {
//     email: emailVal,
//     password: passwordVal,
//   };
//   // url, dataSend, method
//   return FetchData(endPoint, dataSend, "POST")
//     .then((data) => data)
//     .catch((error) => JSON.parse(error));
// }
