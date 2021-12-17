var heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

var teamName = heroes.squadName; //una forma
//var teamName = heroes["squadName"]; -> otra forma
console.log(teamName);

//Mostrar el nombre de la base secreta

var teamMembers = heroes.members; //una forma
//var teamMembers = heroes["members"]; -> otra forma
console.log(teamMembers);

//Mostrar uno de los integrantes
var member1 = teamMembers[0];
console.log(member1);

//Mostrar los superpoderes de la segunda integrante
var power = teamMembers[1].powers;
console.log(power);


function Persona(nombre,edad,ciudad,intereses){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.intereses = intereses;

    this.info = function(){
        let mensaje = this.nombre+" tiene "+this.edad+" años. Y vive en "+this.ciudad+".";
        alert(mensaje);
    };

    this.hobbies = function(){
        let mensaje = "Los intereses de "+this.nombre+" son: "+this.intereses[0]+" y "+this.intereses[1];
        alert(mensaje);
    }
}


