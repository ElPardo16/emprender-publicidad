import Image from 'next/image'
import Link from 'next/link'
import Social from './Social'
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/menuSlice"
import { gsap } from "gsap";
import { show } from '../utils/dialogSlice'

export default function Menu() {
    const dispatch = useDispatch()
    function clickMenu(item){
        dispatch(toggleMenu())
        switch(item){
            case 0:
                dispatch(show({type: "cart"}))
                break
            case 1:
                console.log("cotizar")
                break
        }
    }
    return (
        <div className="menu_container">
            <div onClick={_ => { dispatch(toggleMenu()) }} id="menu" className="menu_background"></div>
            <div className="menu">
                <div className="user">
                    <Image src="/img/logoW.png" alt="Imagen de perfil" width={150} height={150}/>
                    <p>Nombre Usuario</p>
                </div>
                {/* <div className="user_log"></div> */}
                <ul>
                    <li>
                        <Link className="select" href="/" onClick={_ => void dispatch(toggleMenu())}>Tienda</Link>
                    </li>
                    <li>
                        <a onClick={_ => {clickMenu(0)}}>Carrito</a>
                    </li>
                    <li>
                        <a onClick={_ => {clickMenu(1)}}>Cotizacion</a>
                    </li>
                </ul>
                <Social />
            </div>
        </div>
    )
}