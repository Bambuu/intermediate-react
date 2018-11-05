import React from "react";

export const Tester = props => {
  const animals = ["elephant", "lion", "giraffe"];
  const animalElements = animals.map(animal => (
    <li>{animal}</li>
  ));

  return <ul>{animalElements}</ul>;
};
