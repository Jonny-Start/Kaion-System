import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../containers/Login";
import { ResetPassword } from "../containers/ResetPassword";
import { Home } from "../containers/Home";
import { AuthProvider, AuthRoute } from "../context/auth";
import { LandingPage } from "../containers/LandingPage";
import { NotFound } from "../containers/NotFound";

function App() {
  return (
    // <BrowserRouter></BrowserRouter>
    //<HashRouter>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
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
    </BrowserRouter>
    //</HashRouter>
  );
}

export default App;
