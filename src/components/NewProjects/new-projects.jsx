import "./new-projects.scss";
import PropTypes from "prop-types";

function ProjectsCardComponent({
  projectTitle,
  projectText,
  projectImage,
  projectLink,
}) {
  return (
    <div className="project-card-container">
      <div className="project-myCard">
        <div className="project-innerCard">
          <div className="project-frontSide">
            <p className="project-title">{projectTitle}</p>
            <p>{projectText}</p>
          </div>
          <div className="project-backSide">
            <div className="project-image">
              {projectImage}
              {projectLink}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectsCardComponent.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectText: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  svgs: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectsCardComponent;
