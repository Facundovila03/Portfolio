import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetail from "./views/Project Detail/ProjectDetail.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
