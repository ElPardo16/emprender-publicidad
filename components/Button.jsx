import {MdAddShoppingCart} from "react-icons/md"
export default function Button({type,size = 40}){
    switch(type){
        case "cart":
            return (
                <button className="btn">Agregar<MdAddShoppingCart size={size}/></button>
            )
    }
}