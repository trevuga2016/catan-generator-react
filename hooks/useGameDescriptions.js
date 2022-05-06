export const useGameDescriptions = () => {
  const descriptions = [
    {
      title: "The Settlers of Catan",
      subtitle: "The game that started it all! Generate a random board setup for the original island of Catan",
      players: "3 - 4",
      imageUrl: "select-catan.png",
      pageUrl: "catan"
    },
    {
      title: "5 & 6 Player Extension",
      subtitle: "Generate a random board setup for the original island of Catan expanded for 5 or 6 players",
      players: "5 - 6",
      imageUrl: "select-catan-5_6.png",
      pageUrl: "catan5_6ext"
    }
  ];

  return { descriptions };
}