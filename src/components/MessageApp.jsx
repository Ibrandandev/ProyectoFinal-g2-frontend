import { useState, useEffect } from "react";

const MessageApp = ({ msg }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (msg === "Login OK!") {
      setColor("alert-succes");
    } else {
      setColor("alert-danger");
    }
  }, [msg]);

  return <div className={`alert ${color} mt-3`}>{msg}</div>;
};

export default MessageApp;
