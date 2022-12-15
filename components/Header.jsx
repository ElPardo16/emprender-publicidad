import Image from "next/image";
import Link from "next/link";
import {MdShoppingCart, MdMenu, MdArrowCircleDown} from 'react-icons/md'

export default function Header() {
  return (
    <header>
        <nav>
            <a><MdMenu size={40}/></a>
            <Link className="logo" href="/"><Image src="/img/logoW.png" width={221} height={125} alt="Logo"/></Link>
            <a className="cart" data-text={2}><MdShoppingCart size={40}/></a>
        </nav>
        <div className="header_filter">
            <select value="ploters">
                <option value="ploters">Ploters</option>
            </select>
            <a><MdArrowCircleDown size={30}/></a>
            <div className="filter_container">

            </div>
        </div>
    </header>
  )
}