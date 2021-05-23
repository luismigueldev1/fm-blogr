import React, { useState } from "react";
import "./styles.scss";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavbarMobile = () => {
    setIsMenuOpen(!isMenuOpen);
    const navMobile = document.querySelector("#nav-mobile");
    navMobile.classList.toggle("active");
  };

  const handleArrowRotate = (pos) => {
    const navMobile = document.querySelectorAll("#icon-arrow");
    navMobile[pos].classList.toggle("active");
  };

  const handleArrowRotateDesktop = (pos) => {
    const navMobile = document.querySelectorAll("#icon-arrow-d");
    navMobile[pos].classList.toggle("active");
  };

  return (
    <>
      {
        //Navbar Mobile
      }
      <nav className="nav-mobile" id="nav-mobile">
        <div className="dropdown">
          <button
            className="dropdown-button"
            onFocus={() => handleArrowRotate(0)}
            onBlur={() => handleArrowRotate(0)}
          >
            Product
            <span>
              <img
                className="dropdown-button-image"
                id="icon-arrow"
                src="./assets/images/icon-arrow-dark.svg"
                alt="Product"
              />
            </span>
          </button>
          <ul className="dropdown-items">
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="dropdown-button"
            onFocus={() => handleArrowRotate(1)}
            onBlur={() => handleArrowRotate(1)}
          >
            Company
            <span>
              <img
                className="dropdown-button-image"
                id="icon-arrow"
                src="./assets/images/icon-arrow-dark.svg"
                alt="Product"
              />
            </span>
          </button>
          <ul className="dropdown-items">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="dropdown-button"
            onFocus={() => handleArrowRotate(2)}
            onBlur={() => handleArrowRotate(2)}
          >
            Connect
            <span>
              <img
                className="dropdown-button-image"
                id="icon-arrow"
                src="./assets/images/icon-arrow-dark.svg"
                alt="Product"
              />
            </span>
          </button>
          <ul className="dropdown-items">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
          </ul>
        </div>

        <div className="divider"></div>
        <div className="auth">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
      <div className="navbar-mobile">
        <img src="./assets/images/logo.svg" alt="Blogr" />
        <button onClick={handleNavbarMobile}>
          {!isMenuOpen ? (
            <img src="./assets/images/icon-hamburger.svg" alt="Menu" />
          ) : (
            <img src="./assets/images/icon-close.svg" alt="Menu" />
          )}
        </button>
      </div>

      {
        // Navbar desktop
      }

      <nav className="navbar">
        <div className="navbar-items">
          <img src="./assets/images/logo.svg" alt="Blogr" className="logo" />
          <div className="dropdown">
            <button
              className="dropdown-button"
              onFocus={() => handleArrowRotateDesktop(0)}
              onBlur={() => handleArrowRotateDesktop(0)}
            >
              Product
              <span>
                <img
                  className="dropdown-button-image"
                  id="icon-arrow-d"
                  src="./assets/images/icon-arrow-light.svg"
                  alt="Product"
                />
              </span>
            </button>
            <ul className="dropdown-items">
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="dropdown-button"
              onFocus={() => handleArrowRotateDesktop(1)}
              onBlur={() => handleArrowRotateDesktop(1)}
            >
              Company
              <span>
                <img
                  className="dropdown-button-image"
                  id="icon-arrow-d"
                  src="./assets/images/icon-arrow-light.svg"
                  alt="Product"
                />
              </span>
            </button>
            <ul className="dropdown-items">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="dropdown-button"
              onFocus={() => handleArrowRotateDesktop(2)}
              onBlur={() => handleArrowRotateDesktop(2)}
            >
              Connect
              <span>
                <img
                  className="dropdown-button-image"
                  id="icon-arrow-d"
                  src="./assets/images/icon-arrow-light.svg"
                  alt="Product"
                />
              </span>
            </button>
            <ul className="dropdown-items">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-auth">
          <button className="login">Login</button>
          <button className="singup">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
