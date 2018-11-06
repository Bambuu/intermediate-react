const FavoriteAnimals = () => {
  const animals = ["elephant", "lion", "giraffe"];
  const animalElements = animals.map(animal => (
    <li>{animal}</li>
  ));

  return <ul>{animalElements}</ul>;
};

/*
<ul>
  <li>elephant</li>
  <li>lion</li>
  <li>giraffe</li>
</ul>
*/
