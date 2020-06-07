import React from "react";
import { Route, Switch, withRouter, useLocation } from "react-router-dom";
import "./App.scss";

import { useTransition, animated } from "react-spring";
// Components
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import BlogPage from "./pages/blogPage/BlogPage";
import AddBlog from "./components/blog/AddBlog";
import { ProjectPage } from "./pages/projectsPage/ProjectPage";
import ContactPage from "./pages/contactPage/ContactPage";
import BlogDetail from "./components/blog/BlogDetail";
import NavBar from "./components/UI/navbar/NavBar";
import SamAuto from "./pages/projects/SamAuto";
import { SansaKitchen } from "./pages/projects/SansaKitchen";
import { PaInventory } from "./pages/projects/PaInventory";
import { Petsgram } from "./pages/projects/Petsgram";
import { ProjectPageAlt } from "./pages/projectsPage/ProjectPageAlt";

const App = withRouter(() => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div>
      <NavBar />
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={location}>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route exact path="/projects" component={ProjectPageAlt} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route path="/blog/add" component={AddBlog} />
            <Route path="/blog/detail" component={BlogDetail} />
            <Route path="/projects/samauto" component={SamAuto} />
            <Route path="/projects/sansa" component={SansaKitchen} />
            <Route path="/projects/inventory" component={PaInventory} />
            <Route path="/projects/petsgram" component={Petsgram} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
});
export default App;
