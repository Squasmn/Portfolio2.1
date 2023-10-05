import PropTypes from "prop-types";
import "./navbar.style.scss";
import { connect } from "react-redux";
import { toggleNavbar } from "../../redux/actions";

function NavbarComponent({ onNavClick, isNavbarOpen, toggleNavbar }) {
  return (
    <nav className="navbar">
      {isNavbarOpen && (
        <ul>
          <li>
            <button className="ui-btn" onClick={() => onNavClick("home")}>
              <span>Home </span>
            </button>
          </li>
          <li>
            <button className="ui-btn" onClick={() => onNavClick("webdev")}>
              <span>Skills</span>
            </button>
          </li>
          <li>
            <button className="ui-btn" onClick={() => onNavClick("projects")}>
              <span>Projects</span>
            </button>
          </li>
          <li>
            <button className="ui-btn" onClick={() => onNavClick("past")}>
              <span>Past</span>
            </button>
          </li>
          <li>
            <button className="ui-btn" onClick={() => onNavClick("contact")}>
              <span>Contact</span>
            </button>
          </li>
          <li>
            <button className="ui-btn close-btn" onClick={toggleNavbar}>
              <span>Close </span>
            </button>
          </li>
        </ul>
      )}
      {!isNavbarOpen && (
        <button className="ui-btn" onClick={toggleNavbar}>
          <span>Menu </span>
        </button>
      )}
    </nav>
  );
}
const mapStateToProps = (state) => ({
  isNavbarOpen: state.isNavbarOpen,
});

const mapDispatchToProps = {
  toggleNavbar,
};
NavbarComponent.propTypes = {
  onNavClick: PropTypes.func.isRequired,
  isNavbarOpen: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export const ConnectedNavbarComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarComponent);
