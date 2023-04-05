import produce from "immer";

const car1 = { name: "Benz", productionYear: 1966 };
const car2 = { name: "Lexus", productionYear: 1973 };
const car3 = { name: "Kia", productionYear: 2000 };
const newCar = produce([car1, car2, car3], (draft) => {
  draft[0].productionYear = 1965;
  draft[1].productionYear = 1974;
  draft[2].productionYear = 1999;
});

console.log(newCar);
