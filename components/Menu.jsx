import Image from 'next/image'
import Link from 'next/link'
import Social from './Social'
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/menuSlice"

export default function Menu() {
    const dispatch = useDispatch()

    function hideMenu() {
        dispatch(toggleMenu())
        menu.classList.remove("show-menu")
        menu.nextSibling.classList.remove("show-drawer")
    }
    return (
        <div className="menu_container">
            <div onClick={_ => { hideMenu() }} id="menu" className="menu_background"></div>
            <div className="menu">
                <div className="user">
                    <Image src="" alt="Imagen de perfil" width={150} height={150} />
                    <p>Nombre Usuario</p>
                </div>
                {/* <div className="user_log"></div> */}
                <ul>
                    <li>
                        <Link className="select" href="/">item 1</Link>
                    </li>
                    <li>
                        <Link href="/">item 2</Link>
                    </li>
                    <li>
                        <Link href="/">item 3</Link>
                    </li>
                </ul>
                <Social />
            </div>
        </div>
    )
}