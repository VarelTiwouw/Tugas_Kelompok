import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  const appData = {
    header: {
      logo: {
        src: "/logo.png",
        alt: "Pokemon Logo",
      },
      generations: {
        gen1: { title: "Generation 1", years: "1996-1999" },
        gen2: { title: "Generation 2", years: "1999-2002" },
        gen3: { title: "Generation 3", years: "2002-2006" },
        gen4: { title: "Generation 4", years: "2006-2010" },
      },
    },
    home: {
      search: {
        placeholder: "Search Pokemon...",
        onSearch: (query) => console.log("Searching:", query),
      },
      cardInfo: {
        evolution: {
          stages: ["Basic", "Stage 1", "Stage 2"],
          conditions: "Level up, Stone, Trading",
        },
        typeEffect: {
          types: ["Fire", "Water", "Grass", "Electric"],
          effectiveness: {
            strong: ["Super effective", "Not very effective", "No effect"],
          },
        },
        logo: {
          src: "/pokemon-card-logo.png",
          alt: "Pokemon Card Logo",
        },
      },
    },
    footer: {
      copyright: "© 2024 Pokemon",
      links: ["About", "Contact", "Terms", "Privacy"],
    },
  };

  return (
    <div>
      <Header logo={appData.header.logo} generations={appData.header.generations} />
      <Home search={appData.home.search} cardInfo={appData.home.cardInfo} />
      <Footer copyright={appData.footer.copyright} links={appData.footer.links} />
    </div>
  );
};

export default App;