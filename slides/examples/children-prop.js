const App = () => {
  return (
    <div>
      <FancyBorder>
        <HeroList />
      </FancyBorder>
    </div>
  );
};

// Containing component
const FancyBorder = (props) => {
  return (
    <div className="redBorder">
      {props.children}
    </div>
  );
}