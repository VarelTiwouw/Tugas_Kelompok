import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "../../header/Logo";

const CardInfo = ({ evolution, typeEffect, logo }) => (
  <div className="card-info">
    <Evolution {...evolution} />
    <TypeEffect {...typeEffect} />
    <Logo {...logo} />
  </div>
);
