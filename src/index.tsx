import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ServiceContextProvider from "./store/contexts/ServiceContext/ServiceContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import UiContextProvider from "./store/contexts/uiContext/UiContextProvider";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: (
          <h1>
            Non used path try to /service/"id number of the repair service"
          </h1>
        ),
        errorElement: <h1>Error</h1>,
      },
      {
        path: "service/:id",
        element: <ServiceCard />,
        errorElement: <h1>Error</h1>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <UiContextProvider>
      <ServiceContextProvider>
        <RouterProvider router={router} />
      </ServiceContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
