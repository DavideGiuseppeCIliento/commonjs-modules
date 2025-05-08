// # FUNZIONE COSTRUZIONE PERSONA

const fullName = require("./names");
const hobbies = require("./hobbies");

const init = () => {
  const person = {
    fullName,
    hobbies,
  };

  return person;
};

console.log(init());
