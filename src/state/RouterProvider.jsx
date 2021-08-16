import React, { createContext, useContext, useState } from 'react';
import { Component } from 'react';

const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [path, setPath] = useState('');
  const location = window.location;

  return (
    <RouterContext.Provider value={{ location, path, setPath }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useLocation = () => {
  const { location } = useContext(RouterContext);
  return location;
};

export const useParams = () => {
  const location = useLocation();
  const { path } = useContext(RouterContext);

  const locationParts = location.pathname.split('/');

  const pathParts = path.split('/');

  return pathParts.reduce((acc, pathPart, i) => {
    if(pathPart.startsWith(':')) acc[pathPart.slice(1)] = locationParts[i];
    return acc;
  }, {});
};

const pathToRegExp = (path) => {
  const pathPattern = path.replace(/:\w*/g, '.*');
  return new RegExp(`${pathPattern}$`);
};

export const Switch = ({ children }) => {
  const location = useLocation();
  const childToRender = children.find((child) => {
    if(child.props.exact) {
      return pathToRegExp(child.props.path).test(location.pathname);
    } else return child.props.path.includes(location.pathname);
  });

  return <>{childToRender}</>;
};

export const Route = ({ exact, path, component: Component }) => {
  const { setPath } = useContext(RouterContext);
  setPath(path);
  return <Component />;
};
