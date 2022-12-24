import { useSelector } from "react-redux";
import { numberF } from "../utils/tools";
import Units from "./Units";

export default function CartItem({price,id}) {
  const productsState = useSelector(state => state.product)
  const product = productsState.find(item => item.id === id)
  return (
    <div className="cart_item">
        <img src={`/img/${product.img}`} alt=""/>
        <h4>{product.title}</h4>
        <Units type={1} id={id}/>
        <p>Precio por unidad: ${numberF.format(price)}</p>
    </div>
  )
}