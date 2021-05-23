import React from "react";
import "./styles.scss";

export default function Designed() {
  return (
    <section className="designed">
      <h1 className="section-title">Designed for the future</h1>
      <div className="grid-spec">
        <picture>
          <img
            src="./assets/images/illustration-editor-mobile.svg"
            alt="mobile editor"
          />
        </picture>
        <div className="spec">
          <h1>Introducing an extensible editor</h1>
          <p>
            Blogr features an exceemdingly intuitive interface which you focus
            on one thing: creating content. The editor supports management of
            multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add funcitonality or change the looks of a
            blog.
          </p>

          <h1>Robust content managment</h1>
          <p>
            Flexible content manangement enables users to easily move through
            posts. Increase the usability of your nlog by adding customized
            categories, sections, format, or flow. With this functionality.
            you're in full control.
          </p>
        </div>
      </div>
    </section>
  );
}
