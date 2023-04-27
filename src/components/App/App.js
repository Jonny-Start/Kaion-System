import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "../../containers/Login";

function App() {
  return (
    // <BrowserRouter></BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
