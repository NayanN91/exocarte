import SmashCard from "./components/smashcards";
import "./App.css"
import Form from "./components/form";


function App() {
  const SmashChar = [
    {
      name: "Joker",
      image: "https://ssb.wiki.gallery/images/thumb/1/16/Joker_Thief_-_Persona.png/250px-Joker_Thief_-_Persona.png",
      description: "Joker est un combattant agile et rapide. Il utilise son arme, le pistolet, et peut invoquer des attaques puissantes grâce à son Persona. Sa mécanique de jauge unique en fait un adversaire imprévisible et redoutable.",
      nameColor: "red"
    },
    {
      name: "Byleth",
      image: "https://ssb.wiki.gallery/images/thumb/7/70/Fighter-byleth.png/250px-Fighter-byleth.png",
      description: "Byleth est un combattant puissant et méthodique. Il utilise l'épée Crépuscule ainsi que des attaques à distance avec des sorts magiques. Sa portée et sa capacité à changer entre différentes armes en font un adversaire polyvalent et redoutable.",
      nameColor: "green"
    },
    {
      name: "Cloud",
      image: "https://ssb.wiki.gallery/images/thumb/a/a5/Cloud_Advent_Children_SSB4.png/250px-Cloud_Advent_Children_SSB4.png",
      description: "Cloud est un combattant légendaire de Final Fantasy VII. Il manie son épée massive, la Buster Sword, et peut utiliser des attaques magiques puissantes telles que Lame Tranchante et Brasier. Sa limite, Omnislash, est une attaque dévastatrice.",
      nameColor: "grey"
    },
    {
      name: "Sora",
      image: "https://www.smashbros.com/assets_v2/img/fighter/sora/main2.png",
      description: "Sora est un combattant emblématique de la série de jeux vidéo Kingdom Hearts. Il manie la Keyblade et utilise une variété de sorts et de techniques acrobatiques. Sa présence apporte une touche magique et nostalgique au jeu.",
      nameColor: "#bdae25"
    },
    {
      name: "Amphinobi",
      image: "https://ssb.wiki.gallery/images/5/5e/Greninja_SSB4.png",
      description: "Amphinobi, le Pokemon grenouille ninja. Il utilise ses compétences ninja pour attaquer avec rapidité et précision. Ses mouvements aquatiques, tels que Hydrocanon, ajoutent une dimension stratégique à son gameplay.",
      nameColor: "blue"
    },
    {
      name: "Wolf",
      image: "https://ssb.wiki.gallery/images/thumb/8/8a/Wolf_SSBU.png/1200px-Wolf_SSBU.png",
      description: "Wolf est un combattant féroce dans Super Smash Bros. Ultimate. Il est un tireur habile, utilisant son pistolet blaster et ses attaques de griffes acérées. Sa vitesse et sa puissance en font un adversaire redoutable.",
      nameColor: "purple"
    },
    {
      name: "Lucina",
      image: "https://www.pngmart.com/files/13/Lucina-PNG-Background-Image.png",
      description: "Lucina est une combattante agile et précise dans Super Smash Bros. Ultimate. Elle manie l'épée Parallel Falchion avec habileté, offrant une portée et une vitesse équilibrées. Sa capacité à infliger des dégâts constants en fait un choix solide, et son contre peut renverser le cours d'un combat.",
      nameColor: "#9c283c"
    },
    {
      name: "Link",
      image: "https://ssb.wiki.gallery/images/thumb/8/84/Link_SSBU.png/1200px-Link_SSBU.png",
      description: "Link est un combattant polyvalent. Il utilise une variété d'armes, comme l'épée de légende, l'arc et les bombes, pour attaquer à distance ou au corps-à-corps. Sa panoplie de mouvements emblématiques, tels que le Spin Attack et le Boomerang, en font un adversaire redoutable à toutes les distances.",
      nameColor: "skyblue"
    }
  ];

  return (
    <div>
      <div className="Form">
        <Form />
      </div>

      <div className="AppGlobalSmashCards">
        {SmashChar.map((smashCard, index) => (
          <SmashCard
            key={index}
            name={smashCard.name}
            image={smashCard.image}
            description={smashCard.description}
            nameColor={smashCard.nameColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

