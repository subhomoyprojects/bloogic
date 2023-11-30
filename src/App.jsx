import { Suspense, lazy, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const Home = lazy(() => import("../src/cms/Home"));
const About = lazy(() => import("../src/cms/About"));
const Blog = lazy(() => import("../src/cms/Blog"));
const Login = lazy(() => import("../src/auth/Login"));
const Signup = lazy(() => import("../src/auth/Signup"));
const Profile = lazy(() => import("../src/user/Profile"));

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
    path: "/about",
    Component: <About />,
  },
  {
    path: "/blog/details/:id",
    Component: <Blog />,
  },
  {
    path: "/login",
    Component: <Login />,
  },
  {
    path: "/signup",
    Component: <Signup />,
  },
];
const PrivateRouteNames = [
  {
    path: "/profile",
    Component: <Profile />,
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
  const [url, setUrl] = useState("");
  const locationGet = (location) => {
    setUrl(location);
  };
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
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
