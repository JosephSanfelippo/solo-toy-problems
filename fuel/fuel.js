//given distanceToPump, mpg, and fuelLeft determine if you will make it
//to the pump before you run out of gas

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (distanceToPump <= (mpg * fuelLeft) ? true : false);
};