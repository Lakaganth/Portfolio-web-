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
import { SosWeb } from "./pages/projects/SosWeb";
import { SosAdmin } from "./pages/projects/SosAdmin";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <NavBar />
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
        <Route path="/projects/sosweb" component={SosWeb} />
        <Route path="/projects/sosadmin" component={SosAdmin} />
      </Switch>
    </div>
  );
};
export default App;
