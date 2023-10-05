import ".././home.style.scss";
import PropTypes from "prop-types";
import { ConnectedNavbarComponent as NavbarComponent } from "../../../components/Navbar/navbar-component.jsx";
import { ReactComponent as BarcodeIcon } from "../../../assets/svg/icons/barcode-solid.svg";
import { ReactComponent as CopyrightIcon } from "../../../assets/svg/icons/copyright-regular.svg";
import { ReactComponent as DavDevIcon } from "../../../assets/svg/icons/isolated-monochrome-white.svg";
import SocialsComponent from "../../../components/Socials/socials-component";
import picture from "../../../assets/david/DavDevDefinitive2.png";

function HomeView({
  onNavClick,
  title,
  textboxTitle,
  textboxTitle2,
  textboxText,
  skillsCards,
  contact,
  past,
  home,
  projectsCards,
}) {
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="sidebar-container">
          <div className="logo-container">
            <img src={picture} alt="Profile Picture Dav.Dev" />
          </div>
          <div className="navbar-container">
            <NavbarComponent onNavClick={onNavClick} />
          </div>
          <div className="icon-container">
            <div className="svg-container-1">
              <BarcodeIcon />
              <BarcodeIcon />
            </div>
            <div className="svg-container-2">
              <DavDevIcon className="davdev-icon" />
              <CopyrightIcon className="copyright-icon" />
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="header-container">
            <div className="socials-container">
              <SocialsComponent />
            </div>
            <div className="title-container">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="page-content-container">
            {skillsCards && (
              <div className="skillsCard-container">{skillsCards}</div>
            )}
            {contact && <div className="contact-container">{contact}</div>}
            {past && <div className="past-container">{past}</div>}
            {home && <div className="about-container">{home}</div>}
            {projectsCards && (
              <div className="project-card-container">{projectsCards}</div>
            )}
          </div>
          <div className="textbox-container">
            <h2>{textboxTitle}</h2>
            <h3>{textboxTitle2}</h3>
            <p>{textboxText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
HomeView.propTypes = {
  onNavClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  textboxTitle: PropTypes.string,
  textboxTitle2: PropTypes.string,
  textboxText: PropTypes.string,
  contact: PropTypes.element,
  skillsCards: PropTypes.arrayOf(PropTypes.element),
  past: PropTypes.element,
  home: PropTypes.element,
  projects: PropTypes.element,
  projectsCards: PropTypes.element,
};
export default HomeView;
