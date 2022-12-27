import { MdClose } from "react-icons/md";
import Button from "./Button";
import { useDispatch, useSelector } from 'react-redux'
import { show, hide } from "../utils/dialogSlice";
import CartItem from '../components/CartItem'
import Description from '../components/Description'
import { numberF } from "../utils/tools";
import { add, update } from "../utils/cartSlice";
//importamos las dependecias a usar
export default function Info() {
    // importamos los estados, del carrito, productos y los dialogos
    const dialogState = useSelector(state => state.dialog)
    const cartState = useSelector(state => state.cart)
    const productsState = useSelector(state => state.product)
    //obtenemos el item seleccionado filtrandolo por id
    const selectedItem = productsState.find(item => item.id === dialogState.selected)
    // esta funcion calcula el precio total de los productos en el carro
    function total({ products }) {
        // lo hacemos con el metodo reduce, y retornamos su valor
        return products.reduce((acc, item) => {
            // si la cantidad del item es mayor a uno entonces lo multiplicamos por el precio
            if (item.quantity > 1) {
                const subTotal = item.quantity * item.price
                return acc += subTotal
            }
            //si no solo sumamos el precio
            return acc += item.price
        }, /* iniciamos el total en 0 */0)
    }
    // esta funcion agrega porductos al carro
    function addToCart() {
        //desestructuramos el producto seleccionado y obtenemos id y precio
        const { id, price } = selectedItem
        //si existe en el carro solo actualizamos su cantidad
        if (cartState.products.some(item => item.id === id)) {
            dispatch(update({ id, val: 1 }))
            dispatch(show({ type: "cart" }))
            return
        }
        // si no lo agregamos
        dispatch(add({
            id,
            price,
            quantity: 1
        }))
    }
    // esta funcion se ejecuta al dar click en pagar
    function handlePay() {
        const WA_NUM = "3503027393"
        const main_msg = "Buen dia %0aMe interesa comprar los siguientes productos:%0a"
        // concatenamos los productos y sus cantidades en un string
        const msg = cartState.products.reduce((txt, item) => txt += `${productsState.find(item2 => item2.id === item.id).title} und: ${item.quantity}%0a`, "")
        //creamos el mensaje definitivo que se enviara a whatsapp
        const def_msg = `${main_msg}${msg}%0aTotal: $${numberF.format(total(cartState))}`
        const wa_url = `https://api.whatsapp.com/send?phone=+57${WA_NUM}&text=${def_msg}`
        // abrimos el link en una nueva pestaña
        window.open(wa_url, "_blank")
    }
    // traemos el disparador para cambiar los estados
    const dispatch = useDispatch()
    return (
        dialogState.showDialog &&
        <div className="modal">
            <div className="modal_bg"></div>
            <div className="modal_content">
                <div className="modal_head">
                    {/* al dar click cierra el dialogo */}
                    <MdClose size={40} onClick={_ => { dispatch(hide()) }} />
                    <h2>{dialogState.dialogType == "cart" ? "Carrito" : selectedItem.title}</h2>
                </div>
                <div className="modal_info">
                    {/* llenamos el dialogo con los items del carrito o su descripcion, depende de quien lo invoque */}
                    {dialogState.dialogType == "cart" ? cartState.products.length != 0 ?
                        cartState.products.map(item => <CartItem key={item.id} price={item.price} id={item.id} />) : <h3 className="empty">No hay productos en el carrito</h3>
                        : <Description id={selectedItem.id} description={selectedItem.description} img={selectedItem.img} />}
                </div>
                <div className="con_btn">
                    {/* mostramos un boton de agregar o pagar dependiendo el tipo de dialogo */}
                    <h3>{dialogState.dialogType == "cart" ? `Total: $${numberF.format(total(cartState))}` : `Precio c/u: $${numberF.format(selectedItem.price)}`}</h3>
                    {dialogState.dialogType != "cart" ? <Button fun={addToCart} /> : <Button type="pay" txt="Pagar" fun={handlePay} />}
                </div>
            </div>
        </div>

    )
}