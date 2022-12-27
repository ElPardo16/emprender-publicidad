import Image from "next/image";
import { useSelector } from "react-redux";
import Units from "./Units";
//importamos las dependecias a usar
export default function Description({id,description,img}) {
   // traemos el estado del carrito
  const cartState = useSelector(state => state.cart)
  // esta funcion es para agregar un selector de unidades, si el producto esta en el carro
  function unit() {
    // si no hay items en el carro no renderizamos
    if(cartState.products.length == 0){
      return false
    }
    //si existe en el carro entoces guardamos el producto en una variable
    if(cartState.products.some(item => item.id === id)){
      const cartItem = cartState.products.find(item => item.id === id)
      // si la cantidad del producto es diferente de 0 entonces dibijamos el componente
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
            <Image src={`/img/${img}`}alt="Producto" fill={true} priority={true}/>
        </div>
        <div className="des">
            <h3>Descripcion:</h3>
            <p>{description}</p>
        </div>
        {/* ejecutamos la funcion */}
        {unit()}
       
    </div>
  )
}