import { slide as Menu } from "react-burger-menu";
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import "./index.css";

const Header = () => {
  return (
    <nav className="navbar" id="outer-container">
      <div className="navbar-section">
        <div className="logo-container">
          <Menu width={"250px"} outerContainerId={"outer-container"}>
            <li id="home" className="menu-item">
              Home
            </li>
            <li id="about" className="menu-item">
              Buy Courses
            </li>
            <li id="about" className="menu-item">
              Buy Books
            </li>
            <li id="contact" className="menu-item">
              Contact
            </li>
            <li className="menu-item--small">Settings</li>
          </Menu>
          <h1 className="logo-text">IndigoLearn</h1>
        </div>
        <ul className="nav-list-container">
          <li className="nav-list-item">BUY COURSES</li>
          <li className="nav-list-item">BUY BOOKS</li>
          <li className="nav-list-item">PROGRAMS</li>
          <li className="nav-list-item">FREE RESOURCES</li>
        </ul>
        <button type="button" className="login-button">
          <CgProfile className="profile-icon" />
          Log In/Sign Up
        </button>
        <IoMdCart className="cart-icon" />
      </div>
    </nav>
  );
};

export default Header;
