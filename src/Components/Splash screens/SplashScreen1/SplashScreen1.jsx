import "./SplashScreen1.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen1 = () => {
  const navigate = useNavigate();

  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartExit(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (startExit) {
      const navTimer = setTimeout(() => {
        navigate("/splashScreen2");
      }, 5000); // must match exit transition duration

      return () => clearTimeout(navTimer);
    }
  }, [startExit, navigate]);

  return (
    <AnimatePresence>
      {!startExit && (
        <motion.section
          initial={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0.5 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="SplashScreen1-sec"
        >
          <figure>
            <img src="./Images/Logo.png" alt="logo" />
          </figure>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen1;
