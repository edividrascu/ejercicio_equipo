const teamMembers = [
  {
    name: "Edi",
    surname: "Vidrascu",
    age: "20",
    city: "Girona",
    hobby: "competitive Games",
    favoriteFood: "pasta",
    favoriteVideoGame: "csgo/cs2",
    favoriteFilm: "Nadie",
    favoriteBook: "",
    petName: "",
  },
  {
    name: "Michelle",
    surname: "Caicedo",
    age: "30",
    city: "Valencia",
    hobby: "Pintar",
    favoriteFood: "Hamburguesas",
    favoriteVideoGame: "Sims",
    favoriteFilm: "Spirited Away",
    favoriteBook: "Cien años de Soledad",
    petName: "Haru",
  },
  {
    name: "Manuel",
    surname: "Benitez",
    age: "29",
    city: "Palma",
    hobby: "Skate",
    favoriteFood: "Milanesa",
    favoriteVideoGame: "Catan",
    favoriteFilm: "",
    favoriteBook: "",
    petName: "",
  },
];
//- Print the team in age order (name age).
teamMembers.sort((a, b) => a.age - b.age);
teamMembers.forEach((teamOrder) => {
  console.log(`${teamOrder.name} ${teamOrder.age}`);
});

