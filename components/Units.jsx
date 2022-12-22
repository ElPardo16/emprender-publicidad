import { MdAdd, MdDeleteOutline, MdRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../utils/cartSlice";

export default function Units({type = 0, id}) {
  const cartState = useSelector(state => state.cart)
  const cartItem = cartState.products.find(item => item.id === id)
  const removeItem = _ => {
    if(cartItem.quantity === 1){
      dispatch(remove(id))
      return
    }
    dispatch(update({id, val: -1}))
  }
  const dispatch = useDispatch()
  return (
    <div className="units">
        <div className="control">
            <MdAdd size={25} onClick={_ => void dispatch(update({id, val: 1}))}/>
            <span>{cartItem.quantity}</span>
            <MdRemove size={25} onClick={_ => void removeItem()}/>
        </div>
        {type == 1 && <MdDeleteOutline size={35} onClick={_ => void dispatch(remove(id))}/>}
    </div>
  )
}