import React from "react";
import TechWheel from "./tech-wheel";
import GmailIcon from "./icons/gmail";
import LinkedInIcon from "./icons/linkedin";
import GithubIcon from "./icons/github";

/*
      <div
        className="segment"
        style={{ position: "static", left: "30vw", top: "50vh" }}
      >
        <div style={{ position: "relative" }}>
          <span>need help with </span>
          <TechWheel />
        </div>
      </div>
*/

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div>
        <div id="title">JAKOB MULVAD NIELSEN</div>
        <div style={{ display: "flex" }}>
          <span
            style={{
              borderTop: "1px solid rgba(0,0,0,.2)",
              whiteSpace: "nowrap",
              position: "relative"
            }}
          >
            <span>freelance senior </span>
            <span style={{ position: "absolute", top: "4vw" }}>
              <div style={{ position: "relative", left: "-2.5vw" }}>
                <img
                  src="arrow.png"
                  style={{ position: "relative", width: "5vw" }}
                />
                <div style={{ position: "absolute", left: "6vw", top: "4vw" }}>
                  <TechWheel />
                </div>
              </div>
            </span>
            <span> developer</span>
          </span>
          <div className="icon-list">
            <a href="mailto:mulvad@gmail.com" target="_blank">
              <GmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/jakob-mulvad-nielsen-5a53096/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/jakobmulvad" target="_blank">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
