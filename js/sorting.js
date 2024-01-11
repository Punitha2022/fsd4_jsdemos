let products = [
    {
      id: 2,
      title: "notebook",
      price: 200.0,
      quantity: 21,
    },
    {
      id: 2,
      title: "waterbottle",
      price: 130.0,
      quantity: 21,
    },
    {
      id: 2,
      title: "pencil",
      price: 120.0,
      quantity: 21,
    },
    {
      id: 2,
      title: "pen",
      price: 20.0,
      quantity: 21,
    },
    {
      id: 2,
      title: "crayons",
      price: 19.0,
      quantity: 21,
    },
  ];

  console.log(
    products.sort((p1,p2)=>p1.title.localeCompare(p2.title))
    )

 console.log(
    products.sort((p1,p2)=>p1.price - p2.price)
 )

 //map,find,forEach,reduce,shift,unshift,slice,splice,sort,filter,include






