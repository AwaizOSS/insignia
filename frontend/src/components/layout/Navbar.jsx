import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="sidenav">
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <div>
        <Link to="/destinations">
          <p>Destinations</p>
        </Link>
      </div>
      <div>
        <p>Members</p>
      </div>
      <div>
        <p>Settings</p>
      </div>
    </div>
  );
}

export default SideNav;
