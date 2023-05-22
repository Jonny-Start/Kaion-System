import React from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState([]);
  const [success, setSuccess] = React.useState([]);

  const useError = (props) => setError(...error, [props]);

  const useSuccess = (props) => setSuccess(...success, [props]);

  const auth = {
    loading,
    error,
    success,
    setLoading,
    setError,
    setSuccess,
    useError,
    useSuccess,
  };

  return <AppContext.Provider value={auth}>{children}</AppContext.Provider>;
}

function useApp() {
  const auth = React.useContext(AppContext);
  return auth;
}

export { AppProvider, useApp };
