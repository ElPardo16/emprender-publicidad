import { createSlice } from "@reduxjs/toolkit"
// creamos el valor inicial del estado
const initialState = [
  /* {
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
    } */
]
// creamos el estado y asignamos las funciones para modificarlos
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fillProducts: (state, action) => {
      return action.payload.map(item => {
        const {_id, ...defItem} = item
        return {
          id: item._id,
          ...defItem
        }
      })
    }
  }
})
// exportamos las funciones que modifican el estado
export const { fillProducts } = productsSlice.actions
//exportamos el estado
export default productsSlice.reducer