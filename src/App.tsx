import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AboutPage, HomePage, LocationsPage, ServicesPage } from "./components";
import { ErrorPage } from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "services",
    element: <ServicesPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "location",
    element: <LocationsPage />,
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
