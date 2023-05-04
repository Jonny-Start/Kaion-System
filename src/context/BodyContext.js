// import React from "react";

// const BodyContext = React.createContext();

// function BodyContextProvider({ children }) {
//   const [nameView, setNameView] = React.useState("body");
//   const bodyRef = React.useRef(document.querySelector("body"));

//   React.useEffect(() => {
//     const { current: body } = bodyRef;
//     body.classList.remove(...body.classList);
//     body.classList.add(nameView);
//     return () => {
//       body.classList.remove(nameView);
//     };
//   }, [nameView]);

//   return (
//     <BodyContext.Provider value={{ nameView, setNameView }}>
//       {children}
//     </BodyContext.Provider>
//   );
// }

// export { BodyContext, BodyContextProvider };
