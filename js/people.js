// # FUNZIONE COSTRUZIONE PERSONA

const { firstName, lastName } = require("./names");
const { hobbyOne, hobbyTwo, hobbyThree } = require("./hobbies");

const init = () => {
  const fullName = `${firstName} ${lastName}`;
  const hobbies = `${hobbyOne} ${hobbyTwo} ${hobbyThree}`;

  person = {
    fullName,
    hobbies,
  };

  return person;
};

int();
