import { MdAddShoppingCart } from "react-icons/md"
// importamos un icono de la libreria de react icons
export default function Button({ type = "cart", size = 40 ,txt = "Agregar", fun}) {
    //definimos unas props, las cuales son opcionales, la prop fun sirve para llamar un callback al dar click al boton
    return (
        <button className="btn" onClick={fun}><span>{txt}</span>{/* Usamos un operador && para que si el typo es cart entonces dibuje el icono */}{type == "cart" && <MdAddShoppingCart size={size} />}</button>
    )
}