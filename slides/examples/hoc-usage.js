const BaseOrderPizzaButton = props => {
  const online = props.online; // boolean
  const amount = props.amount; // number

  return (
    <button disabled={!online}>
      Order {amount} Pizzas
    </button>
  );
};

export const OrderPizzaButton = withNetwork(
  BaseOrderPizzaButton
);

// usage of OrderPizzaButton
<OrderPizzaButton amount={4} />
