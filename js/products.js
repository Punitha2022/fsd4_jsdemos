let product1 = {
  id: 1,
  title: "abc",
  price: 100.0,
  quantity: 20,
};
let products = [
  {
    id: 2,
    title: "Notebook",
    price: 200.0,
    quantity: 21,
  },
  {
    id: 2,
    title: "waterbottle",
    price: 200.0,
    quantity: 21,
  },
  {
    id: 2,
    title: "pencil",
    price: 200.0,
    quantity: 21,
  },
  {
    id: 2,
    title: "pen",
    price: 200.0,
    quantity: 21,
  },
  {
    id: 2,
    title: "crayons",
    price: 200.0,
    quantity: 21,
  },
];
products.forEach((p) =>
  console.log(`${p.id}  ${p.title} ${p.price} ${p.quantity} 
`)
);

//Filter products based on title
//-  eg. filter products which includes 'pe' in its title
//console.log(products.filter(p=>p.title.includes('pe')))

function searchByTitle(searchStr) {
  return products.filter((p) => p.title.includes(searchStr));
}

//or by using Arrow Function
//const searchByTitle=(searchStr)=>{return products.filter(p=>p.title.includes(searchStr))}

console.log(searchByTitle("pe"));
console.log(searchByTitle("n"));

function findProduct(id) {
  return products.find((p) => p.id === id);
}
console.log(findProduct(2));

const calculateTotalPrice = () => {
  return products.reduce((tot, p) => tot + p.price * p.quantity, 0);
};
console.log(calculateTotalPrice());

function displayProducts(){
  let totalPrice=0;
  products.map((p,index)=>{
    console.log(`${index+1}.  ${p.id} ${p.title} ${p.price} ${p.quantity} ${p.price * p.quantity}`)
    totalPrice=totalPrice+ p.price*p.quantity
  }
  )
  console.log(`Total Price ${totalPrice}`)
}
displayProducts();
console.log(products.sort((p1,p2)=>p1.title.localeCompare(p2.title)))