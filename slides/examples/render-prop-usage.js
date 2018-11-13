export const OrderPizzaButton = props => {
  const amount = props.amount; // number

  return (
    <Network>
      {({ online }) => {
        return (
          <button disabled={!online}>
            Order {amount} Pizzas
          </button>
        );
      }}
    </Network>
  );
};
