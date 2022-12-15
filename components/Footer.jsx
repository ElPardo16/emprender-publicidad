import Image from "next/image"
import Social from "./Social"

export default function Footer() {
    return(
        <footer>
            <Image src="/img/logo.png" alt="Logo" width={222} height={124}/>
            <Social/>
        </footer>
    )
}