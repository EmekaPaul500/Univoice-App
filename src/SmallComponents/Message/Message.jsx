import { useState, useEffect } from "react";
import "./Message.css";
import { motion } from "framer-motion";

const Message = ({ message, imgMessage, imgClassname }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <motion.div
        animate={{ y: "0%" }}
        exit={{ y: "-50%", opacity: 0.5 }}
        transition={{ ease: "easeInOut" }}
        className={`message-div message-div-${imgClassname}`}
      >
        <img src={`./Images/${imgMessage}.png`} alt="" />
        <p> {message}</p>
      </motion.div>
    )
  );
};

export default Message;
