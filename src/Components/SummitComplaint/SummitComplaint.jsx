import "./SummitComplaint.css";
import { Form } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Confirm from "../../SmallComponents/Confirm/Confirm";
import { useState, useRef, useEffect } from "react";
import Message from "../../SmallComponents/Message/Message";
import axios from "axios";
import Loading from "../../SmallComponents/Loading/Loading";

const SummitComplaint = () => {
  const [token, setToken] = useState(null);
  const [messageKey, setMessageKey] = useState(0);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgNum, setMsgNum] = useState(null);
  const [showMsg, setShowMsg] = useState(false);
  const [viewConfirm, setViewConfirm] = useState(false);
  const [summitComplaintData, setSummitComplaintData] = useState({
    Name: "",
    Matric_no: "",
    Department: "",
    Level: "",
    // ComplaintCategory: "",
    Complaint_Title: "",
    Description: "",
    File_path: [],
  });

  useEffect(() => {
    let loginToken = sessionStorage.getItem("loginToken");
    let loginAuth = sessionStorage.getItem("loginAuthSource");
    let signUpToken = sessionStorage.getItem("signUpToken");
    let signUpAuth = sessionStorage.getItem("authSource");

    if (loginAuth) {
      setToken(loginToken);
    } else if (signUpAuth) {
      setToken(signUpToken);
    }
  }, []);

  const fileInputRef = useRef(null);
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    setSummitComplaintData({
      ...summitComplaintData,
      File_path: [...summitComplaintData.File_path, ...selectedFiles],
    });
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const confirmBtn2 = async (e) => {
    e.preventDefault();
    setViewConfirm(false);
    setLoading(true);

    const isValid = false;

    if (!isValid) {
      setShowMsg(true);
      setMessageKey((prev) => prev + 1);
      // setLoading(false);
    }

    const formData = new FormData();
    formData.append("Name", summitComplaintData.Name);
    formData.append("Matric_no", summitComplaintData.Matric_no);
    formData.append("Department", summitComplaintData.Department);
    formData.append("Level", summitComplaintData.Level);
    formData.append("Complaint_Title", summitComplaintData.Complaint_Title);
    formData.append("Description", summitComplaintData.Description);
    // formData.append("File_path", summitComplaintData.File_path);
    summitComplaintData.File_path.forEach((file) => {
      formData.append("File_path", file);
    });

    console.log(formData);
    try {
      const res = await axios.post(
        "https://student-complaint-system.onrender.com/complaint/submit_complaint",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setMsgNum(1);
      setMsg(res.data.message);
    } catch (err) {
      if (!err.response) {
        // No response from server = likely network error
        setMsg("Please check your network.");
        setMsgNum(2);
      } else {
        // Backend responded with error (like 400, 500)
        // setLoading(false);
        setMsg(err.response.data.message);
        setMsgNum(2);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="summit-complaint-main">
      {viewConfirm && (
        <Confirm
          confirmImg="Icon"
          confirmBtn1={() => setViewConfirm(false)}
          confirmBtn2={confirmBtn2}
          confirmText="Are you sure you want to submit this complaint? Once submitted, you
          won't be able to edit it."
          confirmBtnText="Submit"
        />
      )}
      {showMsg && (
        <Message
          key={messageKey}
          message={msg}
          imgMessage={msgNum === 1 ? "check" : "cancel"}
          imgClassname={msgNum === 1 ? "check" : "cancel"}
        />
      )}

      {loading && <Loading />}
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
          <input
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setSummitComplaintData({
                ...summitComplaintData,
                Name: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Matric no."
            onChange={(e) =>
              setSummitComplaintData({
                ...summitComplaintData,
                Matric_no: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Department"
            onChange={(e) =>
              setSummitComplaintData({
                ...summitComplaintData,
                Department: e.target.value,
              })
            }
          />

          <select
            required
            onChange={(e) =>
              setSummitComplaintData({
                ...summitComplaintData,
                Level: e.target.value,
              })
            }
          >
            <option value="" disabled selected hidden>
              Select Level
            </option>
            <option value="100l">100 Level</option>
            <option value="200l">200 Level</option>
            <option value="300l">300 Level</option>
            <option value="400l">400 Level</option>
          </select>

          {/* <select
            required
            onChange={(e) =>
              setSummitComplaintData({
                ...summitComplaintData,
                ComplaintCategory: e.target.value,
              })
            }
          >
            <option value="" disabled selected hidden>
              Select Complaint Categories
            </option>
            <option value="CBT">CBT</option>
            <option value="Network">Network</option>
            <option value="Robbery">Robbery</option>
            <option value="other">others</option>
          </select> */}

          <input
            type="text"
            placeholder="complaint Title"
            onChange={(e) =>
              setSummitComplaintData({
                ...summitComplaintData,
                Complaint_Title: e.target.value,
              })
            }
          />
          <textarea
            name=""
            id=""
            placeholder="Description"
            onChange={(e) =>
              setSummitComplaintData({
                ...summitComplaintData,
                Description: e.target.value,
              })
            }
          ></textarea>

          <div className="summit-complaint-img-div">
            <span>
              <LazyLoadImage
                src="./Images/img.png"
                alt="Logo1"
                effect="blur"
                wrapperProps={{ style: { transitionDelay: "1s" } }}
                placeholderSrc="logo1"
              />
            </span>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button
              onClick={handleClick}
              className="summit-complaint-img-div-btn1"
            >
              Click to upload
            </button>
            <button
              onClick={handleClick}
              className="summit-complaint-img-div-btn2"
            >
              Upload
            </button>
          </div>
          <div className="summit-complaint-btn-div">
            <button onClick={() => setViewConfirm(true)}>Submit</button>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default SummitComplaint;
