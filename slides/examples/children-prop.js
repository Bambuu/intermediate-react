const App = () => {
  return (
    <div>
      <Highlight>
        <HeroList />
      </Highlight>
    </div>
  );
};

// Containing component
const Highlight = (props) => {
  return (
    <div className="redBackground">
      {props.children}
    </div>
  );
}