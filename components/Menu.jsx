import Image from 'next/image'
import Link from 'next/link'
import Social from './Social'

export default function Menu() {
    return (
        <div className="menu_background">
            <div className="menu">
                <div className="user">
                    <Image src="" alt="Imagen de perfil" width={150} height={150}/>
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
                <Social/>
            </div>
        </div>
    )
}