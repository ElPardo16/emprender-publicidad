import { MdAdd, MdDeleteOutline, MdRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../utils/cartSlice";
//importamos las dependecias a usar
export default function Units({type = 0, id}) {
  // traemos el estado del carrito
  const cartState = useSelector(state => state.cart)
  // obtenemos el  item del carrito filtrando por id
  const cartItem = cartState.products.find(item => item.id === id)
  // esta funcion borra el item del carritp
  const removeItem = _ => {
    // si la cantidad es uno y vamos a restar 1 entoces borramos el item del carro
    if(cartItem.quantity === 1){
      dispatch(remove(id))
      return
    }
    // sino restamos una unidad
    dispatch(update({id, val: -1}))
  }
  const dispatch = useDispatch()
  return (
    <div className="units">
        <div className="control">
          {/* al dar click sumamos uno a la cantidad */}
            <MdAdd size={25} onClick={_ => void dispatch(update({id, val: 1}))}/>
            <span>{cartItem.quantity}</span>
            {/* al dar click restamos uno a la cantidad */}
            <MdRemove size={25} onClick={_ => void removeItem()}/>
        </div>
        {/* renderizamos el icono de la papelera par aborrar el item */}
        {type == 1 && <MdDeleteOutline size={35} onClick={_ => void dispatch(remove(id))}/>}
    </div>
  )
}