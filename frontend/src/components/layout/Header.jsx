import insigniaLogo from "../../assets/insignia.jpeg";

function Navbar() {
  return (
    <nav>
      <img src={insigniaLogo} alt="" />
      <a href="#">My Account</a>
    </nav>
  );
}

export default Navbar;
