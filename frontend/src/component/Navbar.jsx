import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import useProvideHooks from "../hooks/useProvideHooks";
import httpAction from "../utils/httpAction";
import apis from "../api/apis";
import toast from "react-hot-toast";
import logo from "../assets/img/logo/crime_logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userData, setUserdata } = useContext(AuthContext);
  const { navigate } = useProvideHooks();

  // Logout function
  const logout = async () => {
    try {
      await httpAction({
        url: apis().logout,
        method: "POST",
        credentials: "include",
      });

      setUserdata(null);
      toast.success("User Logged Out Successfully");
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="navbar-area sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              {/* Logo */}
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo" />
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>

              {/* Navbar Links */}
              <div
                className={`collapse navbar-collapse sub-menu-bar ${
                  menuOpen ? "show" : ""
                }`}
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link
                      className="page-scroll"
                      to="/"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="page-scroll"
                      to="/about"
                      onClick={() => setMenuOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="page-scroll"
                      to="/service"
                      onClick={() => setMenuOpen(false)}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="page-scroll"
                      to="/blog"
                      onClick={() => setMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>

                  {/* Conditional Features for Logged-in Users */}
                  {userData && (
                    <>
                      <li className="nav-item">
                        <Link
                          className="page-scroll"
                          to="/analyzer"
                          onClick={() => setMenuOpen(false)}
                        >
                          Analyzer
                        </Link>
                      </li>
                    </>
                  )}

                  {/* Login/Logout Button */}
                  <li className="nav-item">
                    {userData ? (
                      <button onClick={logout} className="page-scroll">
                        <FaUser  /> Logout
                      </button>
                    ) : (
                      <Link
                        className="page-scroll"
                        to="/login"
                        onClick={() => setMenuOpen(false)}
                      >
                        <FaUser /> Login
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;