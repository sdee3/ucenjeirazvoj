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
const Article = lazy(() => import("./pages/blog/Article"));
const AddArticle = lazy(() => import("./pages/blog/AddArticle"));
const Blog = lazy(() => import("./pages/blog"));
const Edit = lazy(() => import("./pages/blog/Edit"));
const Page404 = lazy(() => import("./pages/404"));

const Topics = lazy(() => import("./pages/topics"));
const DecaOdrastanje = lazy(() => import("./pages/topics/DecaOdrastanje"));
const Roditeljstvo = lazy(() => import("./pages/topics/Roditeljstvo"));
const LicniRazvoj = lazy(() => import("./pages/topics/LicniRazvoj"));

const Support = lazy(() => import("./pages/support"));
const PodrskaDeci = lazy(() => import("./pages/support/PodrskaDeci"));
const PodrskaRoditeljima = lazy(() =>
  import("./pages/support/PodrskaRoditeljima")
);
const PodrskaOdraslima = lazy(() => import("./pages/support/PodrskaOdraslima"));

const Navbar = lazy(() => import("./components/Navbar"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const CategoriesContext = React.createContext();
const AlertContext = React.createContext();
const TopicsContext = React.createContext();
const SubTopicsContext = React.createContext();

const App = () => {
  const [categories, setCategories] = React.useState([]);
  const [topics, setTopics] = React.useState([]);
  const [subTopics, setSubTopics] = React.useState([]);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertState, setAlertState] = React.useState("");

  React.useEffect(() => {
    axios
      .get("/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err.response));

    axios
      .get("/api/topics")
      .then((res) => setTopics(res.data))
      .catch((err) => console.error(err.response));

    axios
      .get("/api/subtopics")
      .then((res) => setSubTopics(res.data))
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
  const updateTopics = (topics) => setTopics(topics);
  const updateSubTopics = (subtopics) => setSubTopics(subtopics);

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
              <TopicsContext.Provider value={{ topics, updateTopics }}>
                <SubTopicsContext.Provider
                  value={{ subTopics, updateSubTopics }}
                >
                  <Route exact path='/teme' component={Topics} />
                </SubTopicsContext.Provider>
              </TopicsContext.Provider>

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
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/blog/admin' component={AdminLogin} />
              <Route exact path='/blog/new' component={AddArticle} />
              <Route exact path='/blog/:slug' component={Article} />
              <Route exact path='/blog/:slug/edit' component={Edit} />
            </CategoriesContext.Provider>
            <Route component={Page404} />
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
