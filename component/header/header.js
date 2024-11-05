import Logo from "./logo.js";
import Generations from "./Generations/Generations.js";

const Header = ({ logo, generations }) => (
  <header>
    <Logo {...logo} />
    <Generations {...generations} />
  </header>
);
