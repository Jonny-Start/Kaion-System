import { HashRouter, Route, Routes } from "react-router-dom";
import { Login } from "../containers/Login";
import { ResetPassword } from "../containers/ResetPassword";
import { Home } from "../containers/Home";
import { AuthProvider, AuthRoute } from "../context/auth";

function App() {
  return (
    // <BrowserRouter></BrowserRouter>
    <HashRouter>
      <AuthProvider>
        <Routes>
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
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
