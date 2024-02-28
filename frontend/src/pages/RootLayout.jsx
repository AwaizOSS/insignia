import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const RootLayout = () => {
  return (
    <div className="home">
      <Header />
      <div className="main">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
