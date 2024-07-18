import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from './views/User';
import UserId from './views/UserId';
import Person from './views/Person';
import PersonDetails from './views/PersonDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "contact",
        element: <h1>Contact</h1>
      },
      {
        path: "dynamic-route",
        element: <h1>Dynamic Router</h1>
      },
      {
        path: ":id",
        element: <UserId />
      }
    ]
  },
  {
    path: "/person",
    element: <Person />,
    loader: () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => data);
    }
  },
  {
    path: "/person/:id",
    element: <PersonDetails />,
  },
  {
    path: "*",
    element: <h1>[404] Oops! No Route Found ...</h1>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

