import Button from "./Button";
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux";
import { add, update } from '../utils/cartSlice'
import { select, show } from "../utils/dialogSlice";
import { numberF } from "../utils/tools";

export default function Card({data, priority = false}) {
  const {id,title, price, description} = data
  const cartState = useSelector(state => state.cart)
  const dispatch = useDispatch()
  function handleClick(){
    dispatch(select(id))
    dispatch(show(payload))
  }
  function addToCart(){
    if(cartState.products.some(item => item.id === id)){
        dispatch(update({id, val : 1}))
        dispatch(show({type: "cart"}))
        return
    }
    dispatch(add({
        id,
        price,
        quantity: 1
    }))
  }
  const payload = {
    type: "product",
    ...data
  }
  return (
    <div className="card">
      <Image src="/img/bg1.jpg" alt="" fill={true} onClick={_ => {handleClick()}}/>
      <h2>{title}</h2>
      <div className="card_con">
        <p>${numberF.format(price)}</p>
        <Button type="cart" size={20} fun={addToCart}/>
      </div>
    </div>
  )
}