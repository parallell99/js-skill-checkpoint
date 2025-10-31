// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
// const getuser = () => {
//   return fetch("https://jsonplaceholder.typicode.com/users");
// };
// const getuser2 = (response) => {
//   return response.json();
// };
// const onSuccess = (data) => {
//   return data;
// };
// const getuser3 = (data) => {
//   let result = [];
//   for (let item of data) {
//     result.push(item.name);
//   }
//   console.log(result);
// };
// const error = (error) => {
//   console.log(error);
// };
// getuser().then(getuser2).then(onSuccess).then(getuser3).catch(error);





const getdata = async () => {
  try{
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  let result = [];
  data.map((element) => {
    result.push(element.name);
  });
  console.log(result);
  }catch(error){
    console.log("Eror");
    
  }
}


getdata();
console.log("Loading...");
