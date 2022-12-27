import { createSlice } from "@reduxjs/toolkit"
// creamos el valor inicial del estado
const initialState = {
   isOpen: false 
}
// creamos el estado y asignamos las funciones para modificarlos
const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu: state => {
            state.isOpen = !state.isOpen
        }
    }
})
// exportamos las funciones que modifican el estado
export const {toggleMenu} = menuSlice.actions
//exportamos el estado
export default menuSlice.reducer