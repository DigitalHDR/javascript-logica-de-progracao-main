//? O método includes() determina se um array
//? contém um determinado elemento, retornando
//? true ou false apropriadamente.

// const result = [1, 2, 3].includes(2)
// console.log(result)
//! true
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const result = [1, 2, 3].includes(4)
// console.log(result)
//! false
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const result = [1, 2, 3].includes(3, 3)
console.log(result)
//! false
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | + |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// [1, 2, 3].includes(3, -1); // true
// [1, 2, NaN].includes(NaN); // true
