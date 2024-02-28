import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout, Home, Destinations, MyAccount } from "./pages";

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
