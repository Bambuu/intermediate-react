export const OrderPizzaButton = props => {
  const amount = props.amount; // number

  return (
    <Network>
      {(networkProps) => {
        return (
          <button disabled={!networkProps.online}>
            Order {amount} Pizzas
          </button>
        );
      }}
    </Network>
  );
};