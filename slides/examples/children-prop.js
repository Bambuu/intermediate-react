const Highlight = (props) => {
  return (
    <div className="redBackground">
      {props.children}
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Highlight>
        <HeroList />
      </Highlight>
    </div>
  );
};