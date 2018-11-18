const FavoriteAnimals = () => {
  const animals = [
    { id: 2, name: "giraffe" },
    { id: 5, name: "lion" },
    { id: 9, name: "elephant" }
  ];
  const animalElements = animals.map((animal) => {
    return <li>{animal.name}</li>;
  });

  return <ul>{animalElements}</ul>;
};

/*
  <ul>
	<li>elephant</li>
	<li>lion</li>
	<li>giraffe</li>
  </ul>
  */