export const useGameDescriptions = () => {
  const descriptions = [
    {
      title: "The Settlers of Catan",
      subtitle: "The game that started it all! Generate a random board setup for the original island of Catan",
      players: "3 - 4",
      imageUrl: "catan_icon.png"
    },
    {
      title: "5 & 6 Player Extension",
      subtitle: "Generate a random board setup for the original island of Catan expanded for 5 or 6 players",
      players: "5 - 6",
      imageUrl: "catan5_6_icon.png"
    }
  ];

  return { descriptions };
}