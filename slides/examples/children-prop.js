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
    <p className="redBorder">
      {props.children}
    </p>
  );
}