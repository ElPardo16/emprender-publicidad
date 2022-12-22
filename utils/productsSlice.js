import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        title: "Ploter 100cm",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam asperiores numquam ex vitae minima aperiam velit error minus voluptates voluptatibus, aliquid vero ad? Repellat velit praesentium enim quisquam esse.",
        price: 100000,
        img: "./img/bg1.jpg",
        category: "pendones"
      },
      {
        id: 2,
        title: "Ploter 50cm",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam asperiores numquam ex vitae minima aperiam velit error minus voluptates voluptatibus, aliquid vero ad? Repellat velit praesentium enim quisquam esse.",
        price: 50000,
        img: "./img/bg1.jpg",
        category: "pendones"
      },
      {
        id: 3,
        title: "Ploter 150cm",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam asperiores numquam ex vitae minima aperiam velit error minus voluptates voluptatibus, aliquid vero ad? Repellat velit praesentium enim quisquam esse.",
        price: 150000,
        img: "./img/bg1.jpg",
        category: "pendones"
      },
      {
        id: 4,
        title: "Ploter 10cm",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam asperiores numquam ex vitae minima aperiam velit error minus voluptates voluptatibus, aliquid vero ad? Repellat velit praesentium enim quisquam esse.",
        price: 20000,
        img: "./img/bg1.jpg",
        category: "pendones"
      },
      {
        id: 5,
        title: "Regalo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 15000,
        img: "./img/bg1.jpg",
        category: "regalos"
      }
]

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fillProducts: (state, action) => [...action.payload]
    }
})
export default productsSlice.reducer