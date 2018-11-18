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
	<div className="redBorder">
	  {props.children()}
	</div>
  );
};