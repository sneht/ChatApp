import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
const PageNotFound = () => {
  return (
    <main class="Maincontainer">
      <article class="content">
        <p>
          <strong>404</strong> Page not found
        </p>
        <p>
          <button >
            <Link to="/" className="homeButton">Go back to Home. </Link>
          </button>
        </p>
      </article>
    </main>
  );
};

export default PageNotFound;
