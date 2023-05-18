import React from "react";
import "./Home.css";
import { useAuth } from "../../context/auth";

function Home() {
  const auth = useAuth();

  return (
    <div id="Home">
      <h1>Hola mundo home</h1>
      <button onClick={auth.logout}>logout</button>
    </div>
  );
}

export { Home };
