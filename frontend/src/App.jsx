import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import {
  RootLayout,
  Home,
  Destinations,
  MyAccount,
  Auth,
  Stream,
} from "./pages";

const routerAuthorized = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/destinations",
        element: <Destinations />,
      },
      {
        path: "/myAccount",
        element: <MyAccount />,
      },
    ],
  },
  {
    path: "/stream",
    element: <Stream />,
  },
]);

const routerUnauthorized = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth" />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

function App() {
  const isAuthenticated = true;

  const router = isAuthenticated ? routerAuthorized : routerUnauthorized;

  return <RouterProvider router={router} />;
}

export default App;
