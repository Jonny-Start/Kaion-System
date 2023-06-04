import React from "react";
import axios from "axios";

const baseURL = "http://localhost:4000/v1/api";

function useCreateAccount({ allData }) {
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
      if (response.status !== 200) return console.error(response);
      if (response.data.error) return console.log(response.data.error);
      console.log(response.data);
    //   setUser({
    //     _id: response.data.data._id,
    //     token: response.data.token,
    //     role: response.data.data.role,
    //   });
    //   localStorage.setItem("user", JSON.stringify(user));
    //   navigate("/home");
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
