import { MdClose } from "react-icons/md";
import Button from "./Button";

export default function Info({title, type = "cart", children}) {
  return (
    <div className="modal">
        <div className="modal_bg"></div>
        <div className="modal_content">
            <div className="modal_head">
                <MdClose size={40}/>
                <h2>{title}</h2>
            </div>
            <div className="modal_info">
                {children}
            </div>
            <div className="con_btn">
                <h3>{ type == "cart" ? "Total:" : "Precio c/u:"} ${100000}</h3>
                {type != "cart" ? <Button/> : <Button type="pay" txt="Pagar"/>}
            </div>
        </div>
    </div>
  )
}