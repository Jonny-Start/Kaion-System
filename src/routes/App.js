import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../containers/Login";
import { ResetPassword } from "../containers/ResetPassword";
import { Home } from "../containers/Home";
import { AuthProvider, AuthRoute } from "../context/auth";
import { AppProvider } from "../context/appContext";
import { LandingPage } from "../containers/LandingPage";
import { NotFound } from "../containers/NotFound";
import { CreateAccount } from "../containers/CreateAccount";
import { DashBoard } from "../containers/DashBoard";
import { Profile } from "../containers/Profile";
import { Proyect } from "../containers/Proyect";
import { Task } from "../containers/Task";
import { AccountChange } from "../containers/AccountChange";
import { TaskAssignment } from "../containers/TaskAssignment";
import { ConfigurationUser } from "../containers/ConfigurationUser";
import { ConnectApi } from "../containers/ConnectApi";
import { Help } from "../containers/Help";

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
            <Route
              path="/help"
              element={
                <AuthRoute>
                  <Help />
                </AuthRoute>
              }
            />
            <Route
              path="/connectApi"
              element={
                <AuthRoute>
                  <ConnectApi />
                </AuthRoute>
              }
            />
            <Route
              path="/configurationUser"
              element={
                <AuthRoute>
                  <ConfigurationUser />
                </AuthRoute>
              }
            />
            <Route
              path="/taskAssignment"
              element={
                <AuthRoute>
                  <TaskAssignment />
                </AuthRoute>
              }
            />
            <Route
              path="/accountChange"
              element={
                <AuthRoute>
                  <AccountChange />
                </AuthRoute>
              }
            />
            <Route
              path="/task"
              element={
                <AuthRoute>
                  <Task />
                </AuthRoute>
              }
            />
            <Route
              path="/proyect"
              element={
                <AuthRoute>
                  <Proyect />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              }
            />
            <Route
              path="/dashBoard"
              element={
                <AuthRoute>
                  <DashBoard />
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
