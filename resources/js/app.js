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
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

const Alert = lazy(() => import("./components/Alert"));
const Home = lazy(() => import("./pages/home"));
const AdminLogin = lazy(() => import("./pages/blog/admin"));
const Page404 = lazy(() => import("./pages/404"));

const Topics = lazy(() => import("./pages/topics"));
const AddTopic = lazy(() => import("./pages/topics/AddTopic"));
const Topic = lazy(() => import("./pages/topics/Topic"));
const EditTopic = lazy(() => import("./pages/topics/Edit"));

const Support = lazy(() => import("./pages/support"));
const PodrskaDeci = lazy(() => import("./pages/support/PodrskaDeci"));
const PodrskaRoditeljima = lazy(() =>
  import("./pages/support/PodrskaRoditeljima")
);
const PodrskaOdraslima = lazy(() => import("./pages/support/PodrskaOdraslima"));

const Quotes = lazy(() => import("./pages/quotes"));
const About = lazy(() => import("./pages/about"));

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
              <Route exact path='/teme' component={Topics} />
              <Route exact path='/teme/new' component={AddTopic} />
              <Route exact path='/teme/admin' component={AdminLogin} />
              <Route exact path='/tema/:slug' component={Topic} />
              <Route exact path='/tema/:slug/admin' component={AdminLogin} />
              <Route exact path='/tema/:slug/edit' component={EditTopic} />

              <Route exact path='/podrska' component={Support} />
              <Route
                exact
                path='/podrska/podrska-deci'
                component={PodrskaDeci}
              />
              <Route
                exact
                path='/podrska/podrska-roditeljima'
                component={PodrskaRoditeljima}
              />
              <Route
                exact
                path='/podrska/podrska-odraslima'
                component={PodrskaOdraslima}
              />
              <Route exact path='/citati' component={Quotes} />
              <Route exact path='/o-meni' component={About} />
              <Route component={Page404} />
            </CategoriesContext.Provider>
          </Switch>
          <Contact />
          <Footer />
        </AlertContext.Provider>
      </Suspense>
    </Router>
  );
};

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}

export { AlertContext, CategoriesContext };
