const BaseOrderPizzaButton = props => {
  const isConnected = props.online; // boolean
  const amount = props.amount; // number

  return (
    <button disabled={!isConnected}>
      Order {amount} Pizzas
    </button>
  );
};

export const OrderPizzaButton = withNetwork(
  BaseOrderPizzaButton
);
