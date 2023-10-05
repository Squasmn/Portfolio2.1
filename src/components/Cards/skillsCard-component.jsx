import "./skillsCard-style.scss";
import PropTypes from "prop-types";

function SkillsCardComponent({ frontTitle, text, backTitle, svgs }) {
  return (
    <div className="skills-card-container">
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <p className="title">{frontTitle}</p>
            <p>{text}</p>
          </div>
          <div className="backSide">
            <p className="title">{backTitle}</p>
            <div className="backSideIcons">
              {svgs.map((Svg, index) => (
                <Svg key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SkillsCardComponent.propTypes = {
  frontTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backTitle: PropTypes.string.isRequired,
  svgs: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default SkillsCardComponent;
