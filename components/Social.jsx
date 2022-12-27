import { FaFacebook, FaInstagram } from "react-icons/fa"
//importamos los iconos de las redes sociales
export default function Social(){
    return (
        <div className="social">
             {/* al dar click al icono abrimos el link de la red social en otra pestaña */}
            <FaFacebook onClick={_ => void window.open("https://www.facebook.com/EmprenderPublicidad/","_blank")} size={50}/>
            <FaInstagram onClick={_ => void window.open("https://www.instagram.com/emprenderpublicidad/","_blank")} size={50}/>
        </div>
    )
}