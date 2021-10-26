import React from "react";
import { Route, Switch } from "react-router-dom";
const LogFileRead = React.lazy(() => import("../../logfile/LogfileRead"));
const NotFount = React.lazy(() => import("./NotFound"));

/**
 * The routing of the application will handle here.
 * we have an array of needed properties for @Route Component.
 * @param id uses as key value of the route
 * @param exact determines that a Route should considered exact route or not
 * @param path determines the path of the screen component
 * @param component determines the name of the component that we are defining its route
 */
const routes = [
  {
    id: "logFile",
    exact: true,
    path: "/",
    component: LogFileRead,
  },
  {
    id: "notfound",
    exact: false,
    path: "*",
    component: NotFount,
  },
];

/**
 * The component that routing of the whole application is set inside it
 * while adding another screen component which needs routing we have to set it to {@link routes} array inside the component
 */
const MyRoute = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.id} {...route} />
      ))}
    </Switch>
  );
};

export default MyRoute;
