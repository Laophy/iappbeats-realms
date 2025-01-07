export const gamesData = {
  avalonia: {
    name: "Avalonia Online",
    url: "/avalonia",
    image: "https://i.imgur.com/iXWHpsh.png",
    description:
      "Avalonia online is an MMORPG created by Stefan Knorr in 2015. Enjoy thousands of players!",
    gameUrl: "https://avaloniaonline.com/",
    players: "856",
    rating: 4.5,
    releaseDate: "2015",
    creator: "Stefan Knorr",
    category: ["RPG", "Adventure"],
    status: "online",
  },
  corleone: {
    name: "Corleone Online",
    url: "/corleone",
    image: "https://i.imgur.com/ICdGJMh.png",
    description:
      "Corleone online is an MMORPG created by Stefan Knorr in 2017. Enjoy thousands of players!",
    gameUrl: "https://corleoneonline.com/",
    players: "943",
    rating: 4.6,
    releaseDate: "2017",
    creator: "Stefan Knorr",
    category: ["RPG", "Action"],
    status: "online",
  },
  etherion: {
    name: "Etherion Online",
    url: "/etherion",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2227990/ss_5dd4c284e52dde2608db60e13f6cd690f962c98f.1920x1080.jpg?t=1678488847",
    description:
      "Etherion online is an MMORPG created by Stefan Knorr and Shiz in 2021. Enjoy thousands of players!",
    gameUrl: "https://etheriononline.com/",
    players: "1.2K",
    rating: 4.8,
    releaseDate: "2021",
    creator: "Stefan Knorr, Shiz",
    category: ["RPG", "Adventure", "Action"],
    status: "online",
    featured: true,
  },
  westlaw: {
    name: "West Law",
    url: "/westlaw",
    image: "https://i.imgur.com/Nj7e5ED.png",
    description:
      "West Law is an online multiplayer game where players compete in intense PvP battles. Test your skills in this fast-paced combat arena!",
    gameUrl: "https://westlaw.iappsbeats.com/",
    players: "534",
    rating: 4.4,
    releaseDate: "2024",
    creator: "Stefan Knorr",
    category: ["PvP", "Action", "Combat"],
    status: "online",
    new: true,
  },
  kalamonia: {
    name: "Kalamonia",
    url: "/kalamonia",
    image: "https://i.imgur.com/YkkEK0w.png",
    description:
      "Kalamonia (Bullet Tavern) is a fast-paced online multiplayer game featuring intense PvP combat. Challenge other players in this action-packed battle arena where quick reflexes and strategy are key to victory!",
    gameUrl: "https://server4.iappsbeats.com/",
    players: "428",
    rating: 4.3,
    releaseDate: "2024",
    creator: "Stefan Knorr",
    category: ["PvP", "Action", "Combat"],
    status: "online",
    altName: "Bullet Tavern",
    new: true,
  },
};

export const getFeaturedGames = () => {
  return Object.values(gamesData).filter((game) => game.featured);
};

export const getTrendingGames = () => {
  return Object.values(gamesData).sort(
    (a, b) => parseFloat(b.players) - parseFloat(a.players)
  );
};

export const getGamesByCategory = (category) => {
  return Object.values(gamesData).filter((game) =>
    game.category.includes(category)
  );
};

export const getGameData = (gameId) => {
  return gamesData[gameId];
};

export const getNewGames = () => {
  return Object.values(gamesData).filter(
    (game) => game.new && game.status === "online"
  );
};
