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





/* Printing in alphabetical order */
var teamMembersSurname = [];
teamMembers.forEach((member,indx) => {
  teamMembersSurname.push([member.surname,indx]);
});
var orderedSurname = teamMembersSurname.sort();
var newTeamMembers = [];
orderedSurname.forEach((member,indx)=>{
  newTeamMembers.push(teamMembers[member[indx,1]])
})
console.log(newTeamMembers)
