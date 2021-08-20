import React from "react";
import { Route, Redirect } from "react-router-dom";
import { loggedin_user } from "./loggedindata";
// import { useAuthState } from "../context";

const AdminRoute = ({exact, component: Component, ...rest }) => {
  // const { auth_user } = useAuthState(); //read user details from context
  const auth_user = loggedin_user

  return (
    <Route
      exact
      {...rest}
      render={(props) => {
        if (auth_user === null) {
          return <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location },
            }}
          />
        } else {
          return auth_user.role === 'ADMIN' ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          )
        }
      }

      }
    />
  );
};

export default AdminRoute;
