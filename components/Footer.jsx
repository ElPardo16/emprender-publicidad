import Image from "next/image"
import Social from "./Social"
//importamos las dependecias a usar
export default function Footer() {
    return(
        <footer>
            <div className="f_info">
                <p><b>Calle 10 # 26-21</b></p>
                <p>Puerto Asís - Colombia</p>
            </div>
            {/* el componente image es propio de next, hace mejoras en la carga de imagenes */}
            <Image src="/img/logo.png" alt="Logo" width={222} height={124}/>
            <Social/>
        </footer>
    )
}