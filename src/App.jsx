import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
function App() {
  const Data = [
    {
      id: 0,
      titleText: "Ksiądz Jerzy Popiełuszko",
      titleColor: "white",
      descriptionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      descriptionColor: "white",
      photoUrl: "#",
      bgColor: "red",
      textOrientation: "left"
    },
    {
      id: 1,
      titleText: "Komponent",
      titleColor: "white",
      descriptionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      descriptionColor: "white",
      photoUrl: "#",
      bgColor: "red",
      textOrientation: "left"
    },
    {
      id: 2,
      titleText: "Komponent",
      titleColor: "black",
      descriptionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      descriptionColor: "black",
      photoUrl: "#",
      bgColor: "white",
      textOrientation: "right"
    },
  ];
  return (
    <main>
      <Navbar />
      {Data.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </main>
  );
}

export default App;
