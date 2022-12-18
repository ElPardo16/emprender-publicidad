import { MdAddShoppingCart } from "react-icons/md"
export default function Button({ type = "cart", size = 40 ,txt = "Agregar"}) {
    return (
        <button className="btn"><span>{txt}</span>{type == "cart" && <MdAddShoppingCart size={size} />}</button>
    )
}