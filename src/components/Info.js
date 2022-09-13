import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faB } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div className="info">
      <img src={require("../assets/images/personal-photo.jpg")} alt="Personal" className="info--personal-photo"/>
      <h1 className="info--name">Smoleac Mihai</h1>
      <p className="info--proffesion">Frontend Developer</p>
      <div className="center-box">
        <a href="myportfolio-69833.web.app" className="info--website">myportfolio.com</a>
      </div>
      <div className="info--buttons">
        <a href='#' className="info--button-email">
          <img src={require("../assets/images/button_icons/mail.png")} alt="logo"/>
          Email
        </a>
        <a href='#'className="info--button-linkedin">
          <img src={require("../assets/images/button_icons/linkedin.png")} alt="logo"/>
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Info;