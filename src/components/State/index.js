import React from "react";
import "./styles.scss";

export default function State() {
  return (
    <section className="state">
      <div className="left">
        <div className="bg-circles">
          <img src="./assets/images/bg-pattern-circles.svg" alt="pattern" />
        </div>

        <picture>
          <img src="./assets/images/illustration-phones.svg" alt="Phones" />
        </picture>
      </div>
      <div className="right">
        <h1>State of the Art Infrastructure</h1>

        <p>
          With reliability and speef in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site still
          load instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
}
