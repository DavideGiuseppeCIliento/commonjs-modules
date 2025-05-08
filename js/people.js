// # FUNZIONE COSTRUZIONE PERSONA

const getFullName = require("./names");
const getHobbies = require("./hobbies");

const init = () => {
  const fullName = getFullName("Davide", "Ciliento");
  const hobbies = getHobbies("lettura", "musica", "viaggi");

  const person = {
    fullName,
    hobbies,
  };

  return person;
};

console.log(init());
