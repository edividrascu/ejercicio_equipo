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
  {
    name: "Rafael",
    surname: "Coin",
    age: "27",
    city: "Malaga",
    hobby: "Libros",
    favoriteFood: "Ramen",
    favoriteVideoGame: "The binding of Isaac",
    favoriteFilm: "El señor de los Anillos",
    favoriteBook: "Stormlight Archive",
    petName: "Kal",
  },
];

const age = teamMembers.map (item => item.age);
  console.log(age);
  var number = age.map(Number);
  let edadMedia=0;
  console.log(number);
  for(let i=0; i<number.length; i++) {edadMedia+=number[i];}
  let media=edadMedia/number.length;
  console.log(media);