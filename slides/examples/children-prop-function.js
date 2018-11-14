const App = () => {
  return (
    <div>
      <FancyBorder>
        {() => {
          const favHero = "Deadpool";
          return <HeroList hero={favHero} />;
        }}
      </FancyBorder>
    </div>
  );
};

// Containing component
const FancyBorder = (props) => {
	return (
	  <p className="redBorder">
		{props.children()}
	  </p>
	);
  }
