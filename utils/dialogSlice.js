import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    showDialog: false,
    dialogType: "cart",
    selected: undefined 
 }
const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        show: (state, action) => {
            state.dialogType = action.payload.type
            state.showDialog = true
        },
        hide: state => {
            state.showDialog = false
        },
        select: (state,action) => {
            state.selected = action.payload
        }
    }
})

export const { show , hide , select } = dialogSlice.actions
export default dialogSlice.reducer