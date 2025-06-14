import "./SplashScreen1.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SplashScreen1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/SplashScreen2");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 2 }}
      className="splash SplashScreen1-div"
    >
      <figure>
        <img src="./Images/Logo.png" alt="logo" />
      </figure>
    </motion.div>
  );
};

export default SplashScreen1;
