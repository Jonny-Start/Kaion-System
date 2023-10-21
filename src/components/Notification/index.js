import React from "react";

function Notification() {
  const type = 'error'
  switch (type) {
    case "error":
      return (
        <div className="alert danger-alert">
          <h3>Danger Alert Message</h3>
          <span className="close">X</span>
          {/* &times; */}
        </div>
      );
    case "succes":
      return (
        <div className="alert success-alert">
          <h3>Success Alert Message</h3>
          <span className="close">X</span>
        </div>
      );

    case "simple":
      return (
        <div className="alert simple-alert">
          <h3>Simple Alert Message</h3>
          <span className="close">X</span>
        </div>
      );

    case "warning":
      return (
        <div className="alert warning-alert">
          <h3>Warning Alert Message</h3>
          <span className="close">X</span>
        </div>
      );

    default:
      break;
  }
}
export { Notification };
