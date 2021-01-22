/*
 * Code reuse with any combination
 *
 * Composition Pattern >> Inheritance Pattern
 */

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  };
}

function SwimmingMonster(name) {
  const monster = { name: name };
  return {
    ...monster,
    ...swimmer(monster),
  };
}

// MAIN
const obj = SwimmingMonster("Monster");
obj.swim();
