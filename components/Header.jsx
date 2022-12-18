import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {MdShoppingCart, MdMenu, MdArrowCircleDown} from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import {toggleMenu} from '../utils/menuSlice'
import Menu from './Menu'

export default function Header() {
  const menuState = useSelector(state => state.menu)
  const dispatch = useDispatch()
 
  useEffect(_ => {
    if(menuState.isOpen){
      btn_m.classList.remove("spin-r")
      btn_m.classList.add("spin")
      menu.classList.add("show-menu")
      menu.nextSibling.classList.add("show-drawer")
    }else{
      btn_m.classList.add("spin-r")
      btn_m.classList.remove("spin")
      menu.classList.remove("show-menu")
      menu.nextSibling.classList.remove("show-drawer")
    }
  },[menuState.isOpen])
  return (
    <header>
        <nav>
          <Menu/>
            <a id="btn_m" onClick={_ => {dispatch(toggleMenu())}}><MdMenu size={40}/></a>
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