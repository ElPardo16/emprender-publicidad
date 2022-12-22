import Image from "next/image";
import { useSelector } from "react-redux";
import Units from "./Units";

export default function Description({id,description}) {
  const cartState = useSelector(state => state.cart)
  function unit() {
    if(cartState.products.length == 0){
      return false
    }
    if(cartState.products.some(item => item.id === id)){
      const cartItem = cartState.products.find(item => item.id === id)
      if(cartItem.quantity != 0){
        return (
          <div className="des_units">
                <h3>Cantidad</h3>
                <Units id={id} type={1}/>
            </div>
        )
      }
    }
  }
  return (
    <div className="des_con">
        <div className="des_img">
            <Image src="/img/bg1.jpg" alt="" fill={true}/>
        </div>
        <div className="des">
            <h3>Descripcion:</h3>
            <p>{description}</p>
        </div>
        {unit()}
       
    </div>
  )
}