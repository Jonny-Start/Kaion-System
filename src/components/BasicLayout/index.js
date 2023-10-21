import React from "react";
import "./BasicLayout.css";
import { Navigation } from "../Navigation/index.js";
import { Header } from "../Header/index.js";
import IMG from "../../backgroundBlack.jpg";

function BasicLayout({ children, idContent, backgroundImage }) {
  const [viewActive, setViewActive] = React.useState(false);

  const onActive = () => {
    setViewActive((prevState) => !prevState);
  };

  return (
    <div className="container" id={idContent}>
      <Navigation active={viewActive} />
      <div
        className={`main ${viewActive && "active"} ${
          backgroundImage && "backgroundImg"
        }`}
        style={
          backgroundImage && {
            backgroundImage: `url(${IMG})`,
          }
        }
      >
        <Header active={viewActive} onActive={onActive} />
        <main>{children}</main>
      </div>
    </div>
  );
}

export { BasicLayout };
