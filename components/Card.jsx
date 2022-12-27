import Button from "./Button";
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux";
import { add, update } from '../utils/cartSlice'
import { select, show } from "../utils/dialogSlice";
import { numberF } from "../utils/tools";
//importamos las dependecias a usar

export default function Card({data, priority = false}) {
  // desestructuramos el json
  const {id,title, price, img} = data
  // traemos el estado del carrito
  const cartState = useSelector(state => state.cart)
  //creamos el disparador de eventos para cambiar el estado
  const dispatch = useDispatch()
  //esta funcion se ejecuta al dar click al card
  function handleClick(){
    // cambia los estados globales y muestra un dialogo
    dispatch(select(id))
    dispatch(show({type: "product"}))
  }
  //esta funcion se ejecuta al dar click al boton
  function addToCart(){
    //si el producto esta en el carro entoces solo modifica su cantidad
    if(cartState.products.some(item => item.id === id)){
      // cambia los estados globales y muestra un dialogo de carrito
        dispatch(update({id, val : 1}))
        dispatch(show({type: "cart"}))
        return
    }
    //si no lo agrega
    dispatch(add({
        id,
        price,
        quantity: 1
    }))
  }

  return (
    <div className="card">
      <div className="bg" onClick={_ => {handleClick()}}></div>
      {/* usamos el componente image de next que trae varias optimizaciones */}
      <Image src={`/img/${img}`} alt="Producto" fill={true} priority={priority}/>
      <h2 onClick={_ => {handleClick()}}>{title}</h2>
      <div className="card_con">
        <p>${numberF.format(price)}</p>
        <Button type="cart" size={20} fun={addToCart}/>
      </div>
    </div>
  )
}