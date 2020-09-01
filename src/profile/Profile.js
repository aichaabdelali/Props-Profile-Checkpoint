import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  Profile.defaultProps = {
    fullName: "Mr Smith",
    bio: "bio",
    profession: "unknown",
  };
  Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    handleAlert: PropTypes.func.isRequired,
  };
  const handleAlert = (fullName) => {
    alert(`Welcome ${fullName} !`);
  };
  return (
    <div>
      <h2 style={{ fontFamily: "sans-serif", textAlign: "center" }}> Name : {props.fullName} </h2>
      {props.children}
      <h4 style={{ fontFamily: "sans-serif", textAlign: "center" }}> Bio : {props.bio} </h4>
      <h4 style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        {" "}
        Profession : {props.profession}
      </h4>
      <button
        onClick={() => handleAlert(props.fullName)}
        style={{
          marginLeft: "300px",
          backgroundColor: "darkblue",
          color: "white",
          fontFamily: "sans-serif",
          width: "120px",
          height: "50px",
          borderRadius: "6px",
          position: "flex-end",
        }}
      >
        Click here !
      </button>
    </div>
  );
};

export default Profile;
