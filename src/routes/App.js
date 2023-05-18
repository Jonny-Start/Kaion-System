import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../containers/Login";
import { ResetPassword } from "../containers/ResetPassword";
import { Home } from "../containers/Home";
import { AuthProvider, AuthRoute } from "../context/auth";
import { AppProvider } from "../context/appContext";
import { LandingPage } from "../containers/LandingPage";
import { NotFound } from "../containers/NotFound";
import { CreateAccount } from "../containers/CreateAccount";

function App() {
  return (
    // <BrowserRouter></BrowserRouter>
    //<HashRouter>
    <BrowserRouter>
      <AppProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route
              path="/home"
              element={
                <AuthRoute>
                  <Home />
                </AuthRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </AppProvider>
    </BrowserRouter>
    //</HashRouter>
  );
}

export default App;
