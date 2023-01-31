// Rappel des types de datas

let string = "chaineDeCaractere";
let number = 25;
let boolean = true; // or false
let maVariable; // type Undefined

// Tableaux = array

let array = ["Bordeau", "Paris", "Toulouse"];
// console.log(array[0][3]); //affiche bordeau et la lettre d dans la console
let array2 = ["Bonjour", 25, true, [1, 2], { nom: "Name" }];
// console.log(array2[4].nom);

// object.adress = "22 rue du blabla";
let data = [
  {
    pseudo: "Liliane",
    age: 39,
    technos: ["JS", "React", "Node.js"],
    admin: false,
  },

  {
    pseudo: "Diane",
    age: 33,
    technos: ["PHP", "Synphony", "HTML"],
    admin: false,
  },

  {
    pseudo: "Jean",
    age: 43,
    technos: ["Java", "SQL", "Ruby"],
    admin: true,
  },
  {
    pseudo: "Rene",
    age: 43,
    technos: ["Java", "SQL", "Ruby"],
    admin: true,
  },
  {
    pseudo: "Pierre",
    age: 43,
    technos: ["Java", "SQL", "Ruby"],
    admin: true,
  },
];
// console.log(data[1].technos[0]);
//----------------------------------
// Les Structures de contrôle
//----------------------------------
if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //valeur si faux
}
// valeur à tester ? si vrai : si faux
//--------------------------------------
// While
let w = 1;

while (w < 10) {
  w++;
  //   console.log("la valeur de w est de : " + w);
}

// Do While
let d = 0;
do {
  d++;
  //   console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// On déclare la valeur de "i" | on dit jusqu'où on boucle | on incrémente "i" si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  //   console.log(i);
  //   console.log(data[i].technos[0]);
  //   document.body.innerHTML += "<h2>" + data[i].technos.join("/") + "</h2>";
}

// Switch
document.body.addEventListener("click", (e) => {
  switch (
    e.target.id // permet d'analyser un élément et si jamais il corespond au cas que l'on donne il applique le code qu'on lui donne
  ) {
    case "JavaScript":
      document.body.style.background = "yellow";
      break;
    case "PHP":
      document.body.style.background = "purple";
      break;
    case "PYTHON":
      document.body.style.background = "blue";
      break;
  }
});
