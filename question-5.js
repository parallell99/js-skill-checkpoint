// Question 5: Calculating Total Price in User's Cart

// function calculateTotalPrice(arr) {
// เริ่มเขียนโค้ดตรงนี้

// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//   let total2 = arr[i].price * arr[i].quantity;
//   total += total2;
// }
// let total = arr.map(n => n.price * n.quantity).reduce((acc,curr) =>acc+curr,0)
// return total;

// }

function calculateTotalPrice() {
  // ตัวอย่างการใช้งาน

  let input = arguments[0];

  // let total = input.map(n => n.price * n.quantity).reduce((acc,curr) => acc + curr,0)
  let total = input.reduce((acc, curr) => {
    let sumprice = (acc += (curr.price * curr.quantity));
    return sumprice

  
  }, 0);
 
  return total;
}
const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
