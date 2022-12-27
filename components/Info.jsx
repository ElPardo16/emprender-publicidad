import { MdClose } from "react-icons/md";
import Button from "./Button";
import { useDispatch, useSelector } from 'react-redux'
import { show, hide } from "../utils/dialogSlice";
import CartItem from '../components/CartItem'
import Description from '../components/Description'
import { numberF } from "../utils/tools";
import { add, update } from "../utils/cartSlice";

export default function Info() {
    const dialogState = useSelector(state => state.dialog)
    const cartState = useSelector(state => state.cart)
    const productsState = useSelector(state => state.product)
    const selectedItem = productsState.find(item => item.id === dialogState.selected)
    function total({ products }) {
        return products.reduce((acc, item) => {
            if (item.quantity > 1) {
                const subTotal = item.quantity * item.price
                return acc += subTotal
            }
            return acc += item.price
        }, 0)
    }
    function addToCart() {
        const { id, price } = selectedItem
        if (cartState.products.some(item => item.id === id)) {
            dispatch(update({ id, val: 1 }))
            dispatch(show({ type: "cart" }))
            return
        }
        dispatch(add({
            id,
            price,
            quantity: 1
        }))
    }
    function handlePay() {
        const WA_NUM = "3503027393"
        const main_msg = "Buen dia %0aMe interesa comprar los siguientes productos:%0a"
        const msg = cartState.products.reduce((txt, item) => txt += `${productsState.find(item2 => item2.id === item.id).title} und: ${item.quantity}%0a`, "")
        const def_msg = `${main_msg}${msg}%0aTotal: $${numberF.format(total(cartState))}`
        const wa_url = `https://api.whatsapp.com/send?phone=+57${WA_NUM}&text=${def_msg}`
        window.open(wa_url, "_blank")
    }
    const dispatch = useDispatch()
    return (
        dialogState.showDialog &&
        <div className="modal">
            <div className="modal_bg"></div>
            <div className="modal_content">
                <div className="modal_head">
                    <MdClose size={40} onClick={_ => { dispatch(hide()) }} />
                    <h2>{dialogState.dialogType == "cart" ? "Carrito" : selectedItem.title}</h2>
                </div>
                <div className="modal_info">
                    {dialogState.dialogType == "cart" ? cartState.products.length != 0 ?
                        cartState.products.map(item => <CartItem key={item.id} price={item.price} id={item.id} />) : <h3 className="empty">No hay productos en el carrito</h3>
                        : <Description id={selectedItem.id} description={selectedItem.description} img={selectedItem.img} />}
                </div>
                <div className="con_btn">
                    <h3>{dialogState.dialogType == "cart" ? `Total: $${numberF.format(total(cartState))}` : `Precio c/u: $${numberF.format(selectedItem.price)}`}</h3>
                    {dialogState.dialogType != "cart" ? <Button fun={addToCart} /> : <Button type="pay" txt="Pagar" fun={handlePay} />}
                </div>
            </div>
        </div>

    )
}