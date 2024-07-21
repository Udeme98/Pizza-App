const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 8 },
];

let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;

//challenge 1
const addNewPizza = (obj) => {
  return menu.push(obj);
};
// console.log(menu);

//challenge 2
const placeOrder = (pizzaName) => {
  let availablePizza = menu.find((pizza) => pizza.name === pizzaName);
  cashInRegister += availablePizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: availablePizza,
    status: "Ordered",
  };
  orderQueue.push(newOrder);
  //   console.log(orderQueue);
  return newOrder;
};

//challenge3
const completeOrder = (orderId) => {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
};
addNewPizza({ name: "Vanilla", price: 5 });
placeOrder("Veggie");
completeOrder("1");

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order Queue", orderQueue);
