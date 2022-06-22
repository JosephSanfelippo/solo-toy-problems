//reverse numbers and return as array

function digitize(n) {
  //   return n.toString().split('').map(element => {
  //     return parseInt(element);
  //   }).reverse();
    return n.toString().split('').reduce((acc, numb) => {
      return [parseInt(numb),...acc];
    }, [])
  }