// import React from "react";
// import axios from "axios";

// const baseURL = "http://localhost:4000/v1/api";

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
