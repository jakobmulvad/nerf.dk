import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const labels = [
  "react",
  "nodejs",
  "microservices",
  "mobile apps",
  "javascript"
];

const TechWheel: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActive(n => (n + 1) % labels.length);
    }, 2000);
    return () => clearInterval(i);
  }, [setActive]);

  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={active} timeout={2000} classNames="tech">
          <span className="tech">{labels[active]}?</span>
        </CSSTransition>
      </TransitionGroup>
      <span style={{ visibility: "hidden" }}>microservices</span>
    </>
  );
};

export default TechWheel;
