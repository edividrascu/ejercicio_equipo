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
const nameCount = {};

teamMembers.forEach((member) => {
  const name = member.name;
  nameCount[name] = (nameCount[name] || 0) + 1;
});

for (const name in nameCount) {
  if (nameCount[name] > 1) {
    console.log(`El nombre "${name}" se repite ${nameCount[name]} veces en el equipo.`);
  }
}