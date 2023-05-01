import React from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* logo design */}
        <div className="logo">
          <h2>
            <span>T</span>hapa
            <span>T</span>echnical
          </h2>
        </div>

        {/* menu design */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM">Home</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM">About</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM">Services</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <FaFacebookSquare className="facebook" />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare className="instagram"/>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutubeSquare className="youtube" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* hero code below navbar */}

      <section className="hero-section">
        <p>welcome to</p>
        <h1>Thapa Technical</h1>
      </section>
    </>
  );
};

export default Navbar;
