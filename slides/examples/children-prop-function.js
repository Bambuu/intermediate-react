const Highlight = (props) => {
  return (
	<div className="redBorder">
	  {props.children()}
	</div>
  );
};

const App = () => {
  return (
    <div>
      <Highlight>
        {() => {
          const favHero = "Deadpool";
          return <HeroList hero={favHero}/>;
        }}
      </Highlight>
    </div>
  );
};