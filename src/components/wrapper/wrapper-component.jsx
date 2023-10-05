import { Routes, Route } from "react-router-dom";
import AboutContainer from "../../routes/about/about.container.jsx";
import WebDevContainer from "../../routes/webdev/webdev.container.jsx";
import ProjectsContainer from "../../routes/projects/projects.container.jsx";
import ContactView from "../../routes/contact/view/contact.view.jsx";
import PastContainer from "../../routes/past/past.container.jsx";
import HomeContainer from "../../routes/home/home.container.jsx";
import PropTypes from "prop-types";

function WrapperComponent({ selectedPage, setSelectedPage }) {
  return (
    <div>
      <HomeContainer
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Routes>
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/webdev" element={<WebDevContainer />} />
        <Route path="/projects" element={<ProjectsContainer />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/past" element={<PastContainer />} />
        <Route
          path="*"
          element={
            <HomeContainer
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          }
        />
      </Routes>
    </div>
  );
}
WrapperComponent.propTypes = {
  selectedPage: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
};
export default WrapperComponent;
