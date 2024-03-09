import { Suspense, lazy, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Loading from "./common/Loading";
import { useDispatch } from "react-redux";
import { tokenCheck } from "./redux/slice/AuthSlice.js";

const Home = lazy(() => import("../src/cms/Home"));
const Team = lazy(() => import("./cms/Team"));
const Course = lazy(() => import("./cms/Course.jsx"));
const Service = lazy(() => import("./cms/Service.jsx"));
const Blog = lazy(() => import("../src/cms/Blog"));
const BlogDetails = lazy(() => import("../src/cms/BlogDetails.jsx"));
const Login = lazy(() => import("../src/auth/Login"));
const Signup = lazy(() => import("../src/auth/Signup"));
const Profile = lazy(() => import("../src/user/Profile"));
const Terms = lazy(() => import("../src/cms/TermsAndCondition.jsx"));
const Privacy = lazy(() => import("../src/cms/PrivacyPolicy.jsx"));

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  return token !== null && token !== undefined ? (
    children
  ) : (
    <>
      <Navigate to="/" />
    </>
  );
}
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

const PublicRouteNames = [
  {
    path: "/",
    Component: <Home />,
  },
  {
    path: "/team",
    Component: <Team />,
  },
  {
    path: "/service",
    Component: <Service />,
  },
  {
    path: "/blog",
    Component: <Blog />,
  },
  {
    path: "/blog/details/:id",
    Component: <BlogDetails />,
  },
  {
    path: "/login",
    Component: <Login />,
  },
  {
    path: "/signup",
    Component: <Signup />,
  },
  {
    path: "/terms-and-condition",
    Component: <Terms />,
  },
  {
    path: "/privacy-policy",
    Component: <Privacy />,
  },
];
const PrivateRouteNames = [
  {
    path: "/profile",
    Component: <Profile />,
  },
  {
    path: "/course/:id",
    Component: <Course />,
  },
];

function MyRoutes({ locationGet }) {
  const { pathname } = useLocation();
  useEffect(() => {
    locationGet(pathname);
  }, [locationGet, pathname]);
  return (
    <Routes>
      {PublicRouteNames?.map((route, index) => (
        <Route key={index * 2} exact path={route.path} element={route.Component} />
      ))}
      {PrivateRouteNames?.map((route, index) => (
        <Route key={index * 3} path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />
      ))}
    </Routes>
  );
}
MyRoutes.propTypes = {
  locationGet: PropTypes.func.isRequired,
};
function App() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch(tokenCheck());
  }, [dispatch]);

  const locationGet = (location) => {
    setUrl(location);
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          {url !== "/login" && url !== "/signup" && <Header />}
          <MyRoutes locationGet={locationGet} />
          {url !== "/login" && url !== "/signup" && <Footer />}
        </Router>
      </Suspense>
    </>
  );
}

export default App;
