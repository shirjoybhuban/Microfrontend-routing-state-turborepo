import * as React from "react";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
import { useStore } from "store";

export type Route = {
  element: React.FunctionComponent;
  path: string;
};

export type NavLink = {
  label: string;
  path: string;
};

function MainLink({ label, path }: NavLink) {
  return (
    <Link to={path}>
      <p>{label}</p>
    </Link>
  );
}

export const AppShell: React.FunctionComponent<{
  title: string;
  routes: Route[];
  navLinks: NavLink[];
  colorScheme?: "light" | "dark";
}> = ({ title, colorScheme, routes, navLinks }) => {
  const { movies } = useStore();
  return (
    <BrowserRouter>
      <h5>{movies.length} selected</h5>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
};
