const FavoriteAnimals = () => {
  const animals = [
    { id: 110, name: "elephant" },
    { id: 5, name: "lion" },
    { id: 2, name: "giraffe" }
  ];
  const animalElements = animals.map((animal) => {
    return <li key={animal.id}>{animal.name}</li>;
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
