import React, { lazy, Suspense, useContext } from "react";
import Loader from "react-loader-spinner";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/useAuthListener";
import UserContext from "./context/user";
import ProtectedRoute from "./helpers/protected-route";
import IsUserLoggedIn from "./helpers/is-user-logged-in";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/notfound"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center align-middle">
              <Loader
                type="ThreeDots"
                color="#005c98"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            </div>
          }
        >
          <Switch>
            <IsUserLoggedIn
              user={user}
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.LOGIN}
            >
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn
              user={user}
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.SIGN_UP}
            >
              <Signup />
            </IsUserLoggedIn>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
