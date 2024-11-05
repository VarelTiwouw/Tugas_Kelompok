import Search from "./Search";
import CardInfo from "./CardInfo/CardInfo";

const Home = ({ search, cardInfo }) => (
  <main>
    <Search {...search} />
    <CardInfo {...cardInfo} />
  </main>
);
