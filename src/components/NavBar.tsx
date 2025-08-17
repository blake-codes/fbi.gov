import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaChevronDown,
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";
import { useAuth } from "../AuthContext";
import axios from "axios";

interface NavProps {
  $isDropdownOpen: boolean;
}

const NavBar = styled.nav<NavProps>`
  background: #000;
  color: white;
  height: 90px;
  width: 100%;
  position: relative;
  z-index: 1000;

  .navbar-content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hamburger {
    display: block;
    cursor: pointer;
    color: #fff;
    z-index: 1100;

    &:hover {
      color: #fddf00;
    }
  }

  .brand {
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      margin: 0;
    }

    @media (min-width: 1100px) {
      display: none;
    }
  }

  .search-icon {
    color: white;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      color: #fddf00;
    }

    @media (min-width: 1100px) {
      display: none;
    }
  }

  ul {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    list-style: none;

    @media (max-width: 1100px) {
      display: none;
    }
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 6px;

      &:hover {
        color: #fddf00;
        text-decoration: underline;
      }
    }
  }

  .dropdown {
    position: absolute;
    background: #000;
    top: 70px;
    right: 40px;
    border: 1px solid #333;
    border-radius: 5px;
    display: ${({ $isDropdownOpen }) => ($isDropdownOpen ? "block" : "none")};
    z-index: 1100;

    li {
      padding: 10px;
      color: white;

      &:hover {
        background-color: #111;
      }

      a {
        color: white;
      }
    }
  }
`;

const AdminDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #fddf00;
  }
`;

const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 25px;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #000;
  color: white;
  padding: 20px;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1050;
  overflow-y: auto;

  ul {
    list-style: none;
    padding: 0;
    margin-top: 50px;

    li {
      margin-bottom: 20px;

      a {
        color: white;
        text-decoration: none;
        font-size: 1.2rem;

        &:hover {
          color: #fddf00;
        }
      }
    }
  }

  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

const Backdrop = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, username, logout } = useAuth();

  useEffect(() => {
    axios
      .get("https://fbi-server.onrender.com/api/auth/healthcheck")
      .then((res) => console.log("Healthcheck successful", res.data))
      .catch((err) => console.error("Healthcheck failed", err));
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <NavBar $isDropdownOpen={isDropdownOpen}>
        <div className="navbar-content">
          <div className="hamburger" onClick={toggleMenu}>
            <FaBars size={24} />
          </div>

          <div className="brand">
            <h1>FBI</h1>
          </div>

          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/wanted">MOST WANTED</Link>
            </li>
            <li>
              <Link to="/news">NEWS</Link>
            </li>
            <li>
              <Link to="/investigate">WHAT WE INVESTIGATE</Link>
            </li>
            <li>
              <Link to="/help">HOW WE CAN HELP YOU</Link>
            </li>
            <li>
              <Link to="/report">MAKE A REPORT</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT</Link>
            </li>
            {isAuthenticated && (
              <li onClick={toggleDropdown}>
                <AdminDropdown>
                  <FaUser /> {username} <FaChevronDown />
                </AdminDropdown>
                <ul className="dropdown">
                  <li>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {username === "admin" ? "Messages" : "Dashboard"}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={logout}>
                      <FaSignOutAlt /> Logout
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>

          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
      </NavBar>

      <Backdrop $isOpen={isOpen} onClick={closeMenu} />

      <Sidebar $isOpen={isOpen}>
        <div className="close-icon" onClick={closeMenu}>
          <FaTimes size={24} />
        </div>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/wanted" onClick={closeMenu}>
              MOST WANTED
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={closeMenu}>
              NEWS
            </Link>
          </li>
          <li>
            <Link to="/investigate" onClick={closeMenu}>
              WHAT WE INVESTIGATE
            </Link>
          </li>
          <li>
            <Link to="/help" onClick={closeMenu}>
              HOW WE CAN HELP YOU
            </Link>
          </li>
          <li>
            <Link to="/report" onClick={closeMenu}>
              MAKE A REPORT
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={closeMenu}>
              ABOUT
            </Link>
          </li>
          {!isAuthenticated && (
            <>
              <li>
                <Link to="/login" onClick={closeMenu}>
                  LOGIN
                </Link>
              </li>
              <li>
                <Link to="/register" onClick={closeMenu}>
                  CREATE ACCOUNT
                </Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              {username === "admin" && (
                <>
                  <li>
                    <Link to="/dashboard" onClick={closeMenu}>
                      DASHBOARD
                    </Link>
                  </li>
                  <li>
                    <Link to="/messages" onClick={closeMenu}>
                      MESSAGES
                    </Link>
                  </li>
                  <li>
                    <Link to="/reports" onClick={closeMenu}>
                      REPORTS
                    </Link>
                  </li>
                </>
              )}

              <li>
                <Link to="/" onClick={logout}>
                  <FaSignOutAlt /> LOGOUT
                </Link>
              </li>
            </>
          )}
        </ul>
      </Sidebar>
    </>
  );
};

export default Navbar;
