import React from "react";
import "./styles.scss";
export default function Free() {
  return (
    <section className="free">
      <div class="grid-spec">
        <picture>
          <img
            src="./assets/images/illustration-laptop-mobile.svg"
            alt="Laptop"
          />
        </picture>

        <div class="spec">
          <h1 className="section-title">Free, Open, simple</h1>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting. RSS feeds, social media integration.
            third-party commetings tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>

          <h1 className="section-title">Powerful tooling</h1>
          <p>
            Batteries includes. We built a simple straightforward CLI tool that
            make customization and deployment a breeze, but capable of producing
            even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
}
