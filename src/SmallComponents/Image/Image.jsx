import "./Image.css";

const Image = ({ src, removeImg, visible = "visible" }) => {
  const styles = {
    visibility: visible,
  };

  return (
    <div className="image-div">
      <span onClick={removeImg} style={styles}>
        <img src="./Images/cancel1.png" alt="cancel" />
      </span>
      <img src={src} alt="Images" className="img" />
      {/* <img src="./Images/sign-up logo.png" alt="Images" className="img" /> */}
    </div>
  );
};

export default Image;
