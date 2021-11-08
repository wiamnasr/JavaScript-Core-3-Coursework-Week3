let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let acc_price = 0;
console.log("'''\nQTY\t\tITEM\t\t\tTOTAL");
for (let i in order) {
  let { itemName, quantity, unitPrice } = order[i];
  acc_price += unitPrice;
  console.log(`\n${quantity}\t\t${itemName}\t\t\t${unitPrice}`);
}

console.log(`TOTAL: ${acc_price}\n'''`);
