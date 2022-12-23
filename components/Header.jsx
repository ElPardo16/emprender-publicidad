import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { MdShoppingCart, MdMenu, MdArrowCircleDown } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { show } from "../utils/dialogSlice";
/* import { cat } from "../utils/filterSlice"; */
import { toggleMenu } from '../utils/menuSlice'
import Menu from './Menu'
import Search from "./Search";
import Select from "./Select";

export default function Header() {
  const menuState = useSelector(state => state.menu)
  const cartState = useSelector(state => state.cart)
  /* const filterState = useSelector(state => state.filter) */
  /* const productsState = useSelector(state => state.product) */
  const dispatch = useDispatch()
/*   const listCat = [... new Set(productsState.map(item => item.category))] */
  function extendsFilter(){
    fc.classList.toggle("fc_show")
    ex_filter.classList.toggle("rotate")
  }
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
        <h2>Tienda</h2>
        <a className={`cart${cartState.products != 0 ? " full" : ""}`} data-text={cartState.products.length} onClick={_ => dispatch(show({type: "cart"}))}><MdShoppingCart size={40} /></a>
      </nav>
      <div className="header_filter">
        <Select/>
        {/* <select defaultValue={filterState.category} onChange={e => void dispatch(cat(e.target.value))}>
          {listCat.map((item,index) => <option key={index} value={item.toLowerCase()}>{item}</option>)}
        </select> */}
        <a id="ex_filter" onClick={_ => void extendsFilter()}><MdArrowCircleDown size={30} /></a>
        <div id="fc" className="filter_container">
          <Search/>
        </div>
      </div>
    </header>
  )
}