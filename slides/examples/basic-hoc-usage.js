const BaseOrderPizzaButton = props => {
  const isConnected = props.online; //Boolean

  return (
    <button disabled={!isConnected}>Order Pizzas</button>
  );
};

export const OrderPizzaButton = withNetwork(
  BaseOrderPizzaButton
);
