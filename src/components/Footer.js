import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="images-container">
        <img src={require("../assets/images/social_icons/twiter.png")}/>
        <img src={require("../assets/images/social_icons/facebook.png")}/>
        <img src={require("../assets/images/social_icons/instagram.png")}/>
        <img src={require("../assets/images/social_icons/github.png")}/>
      </div>
    </footer>
  )
}

export default Footer;