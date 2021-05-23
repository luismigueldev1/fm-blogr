import React from "react";
import "./styles.scss";
export default function Footer() {
  return (
    <footer>
      <picture>
        <img src="./assets/images/logo.svg" alt="Blogr" className="logo" />
      </picture>
      <div className="product">
        <h2>Product</h2>
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>

      <div className="company">
        <h2>Company</h2>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>

      <div className="connect">
        <h2>Connect</h2>
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}
