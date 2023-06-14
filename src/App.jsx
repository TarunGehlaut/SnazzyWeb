import { Suspense, lazy } from "react";

import Layout from "./components/Layout";
import Preloader from "./components/Preloader";

const Home  = lazy(() => import("./pages/Home/Home"))

const ErrorPage = lazy(() => import("./components/ErrorPage"));

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
