/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Alert = lazy(() => import("./components/Alert"));
const Home = lazy(() => import("./pages/home"));
const AdminLogin = lazy(() => import("./pages/blog/admin"));

const TopicsAdminIndex = lazy(() => import("./pages/topics"));
const Topic = lazy(() => import("./pages/topics/Topic"));
const AddTopic = lazy(() => import("./pages/topics/AddTopic"));
const EditTopic = lazy(() => import("./pages/topics/Edit"));

const Navbar = lazy(() => import("./components/Navbar"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const CategoriesContext = React.createContext();
const AlertContext = React.createContext();

const App = () => {
  const [categories, setCategories] = React.useState([]);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertState, setAlertState] = React.useState("");

  React.useEffect(() => {
    axios
      .get("/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err.response));
  }, []);

  const setAlert = (message, state) => {
    setAlertMessage(message);
    setAlertState(state);

    setTimeout(() => {
      setAlertMessage("");
      setAlertState("");
    }, 2500);
  };

  const updateCategories = (categories) => setCategories(categories);

  return (
    <Router>
      <Suspense fallback='Loading...'>
        <AlertContext.Provider value={setAlert}>
          <Navbar />
          <Alert alertMessage={alertMessage} alertState={alertState} />
          <Switch>
            <Route exact path='/' component={Home} />
            <CategoriesContext.Provider
              value={{ categories, updateCategories }}
            >
              <Route exact path='/teme' component={TopicsAdminIndex} />
              <Route exact path='/tema/:slug' component={Topic} />
              <Route exact path='/teme/new' component={AddTopic} />
              <Route exact path='/teme/admin' component={AdminLogin} />
              <Route exact path='/tema/:slug/admin' component={AdminLogin} />
              <Route exact path='/tema/:slug/edit' component={EditTopic} />
            </CategoriesContext.Provider>
          </Switch>
          <Contact />
          <Footer />
        </AlertContext.Provider>
      </Suspense>
    </Router>
  );
};

export default withRouter(App);
export { AlertContext, CategoriesContext };

render(<App />, document.getElementById("app"));
