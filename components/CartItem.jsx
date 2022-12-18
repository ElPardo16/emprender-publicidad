import Units from "./Units";

export default function CartItem() {
  return (
    <div className="cart_item">
        <img src="" alt="" srcset="" />
        <h4>Ploter 100cm</h4>
        <Units type={1}/>
        <p>Precio por unidad: $100.000</p>
    </div>
  )
}