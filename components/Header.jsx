import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { MdShoppingCart, MdMenu, MdArrowCircleDown } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { show } from "../utils/dialogSlice";
import { cat } from "../utils/filterSlice";
import { toggleMenu } from '../utils/menuSlice'
import Menu from './Menu'

export default function Header() {
  const menuState = useSelector(state => state.menu)
  const cartState = useSelector(state => state.cart)
  const filterState = useSelector(state => state.filter)
  const productsState = useSelector(state => state.product)
  const dispatch = useDispatch()
  const listCat = [... new Set(productsState.map(item => item.category))]

  useEffect(_ => {
    if (menuState.isOpen) {
      gsap.set(".menu_container", {
        left: "0"
      })
      gsap.to("#btn_m", {
        rotate: 180,
        duration: .4,
        color: "black"
      })
    }else{
      gsap.set(".menu_container", {
        left: "-100%"
      })
      gsap.to("#btn_m", {
        rotate: 0,
        duration: .4,
        color: "white"
      })
    }
    menu.classList.toggle("show-menu")
    menu.nextSibling.classList.toggle("show-drawer")

  }, [menuState.isOpen])
  return (
    <header>
      <nav>
        <Menu />
        <a id="btn_m" onClick={_ => { dispatch(toggleMenu()) }}><MdMenu size={40} /></a>
        <Link className="logo" href="/"><Image src="/img/logoW.png" width={221} height={125} alt="Logo" /></Link>
        <a className={`cart${cartState.products != 0 ? " full" : ""}`} data-text={cartState.products.length} onClick={_ => dispatch(show({type: "cart"}))}><MdShoppingCart size={40} /></a>
      </nav>
      <div className="header_filter">
        <select defaultValue={filterState.category} onChange={e => void dispatch(cat(e.target.value))}>
          {listCat.map((item,index) => <option key={index} value={item.toLowerCase()}>{item}</option>)}
        </select>
        <a><MdArrowCircleDown size={30} /></a>
        <div className="filter_container">

        </div>
      </div>
    </header>
  )
}