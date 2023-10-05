import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "./routes/home/home.container.jsx";
import AboutContainer from "./routes/about/about.container.jsx";
import WebDevContainer from "./routes/webdev/webdev.container.jsx";
import ProjectsContainer from "./routes/projects/projects.container.jsx";
import ContactContainer from "./routes/contact/contact.container.jsx";
import PastContainer from "./routes/past/past.container.jsx";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomeContainer
                key={selectedPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            }
          />
          <Route path="/about" component={AboutContainer} />
          <Route path="/webdev" component={WebDevContainer} />
          <Route path="/projects" component={ProjectsContainer} />
          <Route path="/contact" component={ContactContainer} />
          <Route path="/past" component={PastContainer} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
