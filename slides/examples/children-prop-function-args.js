const Highlight = (props) => {
  return (
	<div className="redBorder">
	  {props.children('yellow')}
	</div>
  );
};

const App = () => {
  return (
    <div>
      <Highlight>
        {(textColor) => {
          const favHero = "Deadpool";
          return <HeroList hero={favHero} style={{color: textColor}}/>;
        }}
      </Highlight>
    </div>
  );
};