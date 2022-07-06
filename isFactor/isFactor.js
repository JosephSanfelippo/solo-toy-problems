//Given a base and a factor, return true if factor is a factor of base
//else return false

function checkForFactor (base, factor) {

  if (base <= 0) {
    return base === 0 ? true : false;
  }

 return checkForFactor((base - factor), factor);
}