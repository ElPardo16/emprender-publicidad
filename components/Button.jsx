import { MdAddShoppingCart } from "react-icons/md"
export default function Button({ type = "cart", size = 40 ,txt = "Agregar", fun}) {
    return (
        <button className="btn" onClick={fun}><span>{txt}</span>{type == "cart" && <MdAddShoppingCart size={size} />}</button>
    )
}