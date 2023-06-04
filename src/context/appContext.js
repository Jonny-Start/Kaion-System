import React from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const useError = (props) => setError(...error, [props]);

  const useSuccess = (props) => setSuccess(...success, [props]);

  const context = {
    loading,
    error,
    success,
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
