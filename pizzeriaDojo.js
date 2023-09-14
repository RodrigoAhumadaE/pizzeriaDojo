function pizzaOven(tipoCorteza, tipoSalsa, queso, ingredientes){
  let pizza = {};
  pizza.tipoCorteza = tipoCorteza;
  pizza.tipoSalsa = tipoSalsa;
  pizza.queso = queso;
  pizza.ingredientes = ingredientes;
  return pizza;
}

let pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

let pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champoñones", "aceitunas", "cebollas"]);
console.log(pizza2);

let pizza3 = pizzaOven("delgada", "barbacoa", ["mozzarella"], ["tocino", "cebollas", "pimenton"]);
console.log(pizza3);

let pizza4 = pizzaOven("normal", "crema", ["mozzarella", "parmesano", "fontina"], ["choclo", "aceitunas"]);
console.log(pizza4);