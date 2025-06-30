import "./SummitComplaint.css";

import { Form } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useRef, useState } from "react";

const SummitComplaint = () => {
  const initialCountdownSeconds = 60; // Set your desired initial countdown time
  const [countdownTime, setCountdownTime] = useState(initialCountdownSeconds);
  const intervalIdRef = useRef(null); // Ref to store the interval ID
  const [isCountdownActive, setIsCountdownActive] = useState(true); // Control countdown state

  // Main useEffect for the countdown logic
  useEffect(() => {
    if (isCountdownActive && countdownTime > 0) {
      // Set up the interval if active and time remains
      intervalIdRef.current = setInterval(() => {
        setCountdownTime((prevTime) => prevTime - 1);
      }, 1000); // Decrement every second
    } else if (countdownTime === 0) {
      // If countdown reaches 0, stop it
      setIsCountdownActive(false);
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null; // Clear the ref
      }
    } else if (countdownTime < 10) {
      setCountdownTime();
    }

    // Cleanup function: Clear the interval when component unmounts or effect dependencies change
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null; // Clear the ref
      }
    };
  }, [isCountdownActive, countdownTime]); // Dependencies: Re-run effect if these change

  console.log(initialCountdownSeconds, countdownTime);

  return (
    <main className="summit-complaint-main">
      <Form action="/home">
        <button className="arrow-left-btn">
          <img src="./Images/arrow-left.png" alt="arrow-left" />
        </button>
      </Form>

      <section className="summit-complaint-first-sec">
        <div>
          <div className="logo1">
            <LazyLoadImage
              src="./Images/Logo1.png"
              alt="Logo1"
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "1s" } }}
              placeholderSrc="logo1"
            />
          </div>
          <div className="summit-complaint-first-sec-user">
            <LazyLoadImage
              src="./Images/user.png"
              alt="User"
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "2s" } }}
              placeholderSrc="User"
            />
          </div>
        </div>
        <h2>Submit Complaint </h2>
      </section>

      <section className="summit-complaint-second-sec">
        <Form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Matric no." />
          <input type="text" placeholder="Department" />
          <select required>
            <option value="" disabled selected hidden>
              Select Level
            </option>
            <option value="100l">100 Level</option>
            <option value="200l">200 Level</option>
            <option value="300l">300 Level</option>
            <option value="400l">400 Level</option>
          </select>

          <select required>
            <option value="" disabled selected hidden>
              Select Complaint Categories
            </option>
            <option value="100l">100 Level</option>
            <option value="200l">200 Level</option>
            <option value="300l">300 Level</option>
            <option value="400l">400 Level</option>
          </select>
          <input type="text" placeholder="complaint Title" />
          <textarea name="" id="" placeholder="Description"></textarea>
          <button>Submit</button>
        </Form>
      </section>
    </main>
  );
};

export default SummitComplaint;
