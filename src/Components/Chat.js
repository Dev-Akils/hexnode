import React from "react";

import { IoLogoWhatsapp } from "react-icons/io";

const Chat = () => {
  return (
    <>
      <a href="https://web.whatsapp.com/" style={buttonStyle} aria-label="Chat">
        <IoLogoWhatsapp color="#25D366" size={30} />
      </a>
    </>
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  background: "black",

  border: "none",
  borderRadius: "50%",
  padding: "16px",
  fontSize: "18px",
  cursor: "pointer",
  zIndex: 1000,
  animation: "gradientAnimation 3s infinite alternate",
};

export default Chat;
