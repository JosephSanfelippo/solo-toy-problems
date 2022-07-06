//given 3 integers, a b and c, return true of they could make a triangle
//with each being the length of a  side, else return false;

function isTriangle(a,b,c)
{
  if (a + b <= c ||
      a + c <= b ||
      b + c <= a) {
    return false;
      } else {
    return true;
      }
}