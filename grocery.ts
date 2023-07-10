// grocery.ts

class Grocery {
  name: string;
  quantity: number;
  price: number;
 

  constructor(name: string, quantity: number, price: number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

// Create an array of grocery items
const groceries: Grocery[] = [
  new Grocery("Milk", 3, 2.99),
  new Grocery("Bread", 6, 1.99),
  new Grocery("Eggs", 11, 0.99),
  new Grocery("Pancake", 1, 11.99),
];

// Display groceries as HTML output
const groceryListHTML = groceries.map(
  (grocery) =>
    `<li>${grocery.name} - Quantity: ${grocery.quantity} - Price: $${grocery.price}</li>`
);

