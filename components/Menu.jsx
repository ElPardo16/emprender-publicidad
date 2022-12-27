import Image from 'next/image'
import Link from 'next/link'
import Social from './Social'
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/menuSlice"
import { gsap } from "gsap";
import { show } from '../utils/dialogSlice'
//importamos las dependecias a usar
export default function Menu() {
    // traemos el disparador para cambiar los estados
    const dispatch = useDispatch()
    // al dar click fuera del menu se cierra
    function clickMenu(item) {
        //cambiamos el estado del menu
        dispatch(toggleMenu())
        switch (item) {
            case 0:
                dispatch(show({ type: "cart" }))
                break
            case 1:
                // ponemos el numero del cliente
                const WA_NUM = "3503027393"
                // guardamos el mensaje que se mostrara en whats app
                // el %0a es un salto de linea
                const msg = "Buen dia %0aMe interesa cotizar un producto en especifico con ustedes"
                //generamos la url de whatsapp
                const wa_url = `https://api.whatsapp.com/send?phone=+57${WA_NUM}&text=${msg}`
                //abrimos el link en otra pestaña
                window.open(wa_url, "_blank")
                break
        }
    }
    return (
        <div className="menu_container">
            <div onClick={_ => { dispatch(toggleMenu()) }} id="menu" className="menu_background"></div>
            <div className="menu">
                <div className="user">
                    <Image src="/img/logoW.png" alt="Imagen de perfil" width={150} height={150} />
                    {/* <p>Nombre Usuario</p> */}
                </div>
                {/* <div className="user_log"></div> */}
                <ul>
                    <li>
                        {/* al dar click cerramos el menu */}
                        <Link className="select" href="/" onClick={_ => void dispatch(toggleMenu())}>Tienda</Link>
                    </li>
                    <li>
                        {/* al dar click mostramos el carrito */}
                        <a onClick={_ => { clickMenu(0) }}>Carrito</a>
                    </li>
                    <li>
                        {/* al dar click abrimos el whatsapp para cotizar */}
                        <a onClick={_ => { clickMenu(1) }}>Cotizacion</a>
                    </li>
                </ul>
                <Social />
            </div>
        </div>
    )
}