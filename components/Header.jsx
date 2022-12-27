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
//importamos las dependecias a usar
export default function Header() {
  // traemos el estado del menu y el carrito
  const menuState = useSelector(state => state.menu)
  const cartState = useSelector(state => state.cart)
  /* const filterState = useSelector(state => state.filter) */
  /* const productsState = useSelector(state => state.product) */
  // traemos el disparador para cambiar los estados
  const dispatch = useDispatch()
/*   const listCat = [... new Set(productsState.map(item => item.category))] */
// esta funcion muestra el menu de buscar
  function extendsFilter(){
    //toggle pone o quita una clase dependiendo si esta o no en la lista
    fc.classList.toggle("fc_show")
    ex_filter.classList.toggle("rotate")
  }
  // cuando el estado del menu cambie entonces se ejecutara la funcion en el hook
  useEffect(_ => {
    // si esta abierto el menu entonces cambiamos algunos colores y animaciones
    if (menuState.isOpen) {
      gsap.set(".menu_container", {
        left: "0"
      })
      gsap.to("#btn_m", {
        rotate: 180,
        duration: .4,
        color: "black"
      })
      menu.classList.add("show-menu")
      menu.nextSibling.classList.add("show-drawer")
    }else{
      // las animaciones se hicieron con gsap
      gsap.set(".menu_container", {
        left: "-100%"
      })
      gsap.to("#btn_m", {
        rotate: 0,
        duration: .4,
        color: "white"
      })
      menu.classList.remove("show-menu")
      menu.nextSibling.classList.remove("show-drawer")
    }
    // ocultamos o mostramos el menu cambiando su clase
    /* menu.classList.toggle("show-menu")
    menu.nextSibling.classList.toggle("show-drawer") */

  }, [menuState])
  return (
    <header>
      <nav>
        <Menu />
        {/* al dar click mostramos o cultamos el menu, solo en mobile */}
        <a id="btn_m" onClick={_ => { dispatch(toggleMenu()) }}><MdMenu size={40} /></a>
        <Link className="logo" href="/"><Image src="/img/logoW.png" width={221} height={125} alt="Logo" /></Link>
        <h2>Tienda</h2>
        <a className={`cart${cartState.products != 0 ? " full" : ""}`}/* con esto podemos dibujar una bolita con el numero de items en el carro, solo se muestra si no esta vacio */ data-text={cartState.products.length} /* al dar click abrimos el carrito */onClick={_ => dispatch(show({type: "cart"}))}><MdShoppingCart size={40} /></a>
      </nav>
      <div className="header_filter">
        <Select/>
        {/* <select defaultValue={filterState.category} onChange={e => void dispatch(cat(e.target.value))}>
          {listCat.map((item,index) => <option key={index} value={item.toLowerCase()}>{item}</option>)}
        </select> */}
        {/* void sirve para decir que no vamos a retornar nada en la funcion */}
        {/* al dar click mostramos el menu de busqueda */}
        <a id="ex_filter" onClick={_ => void extendsFilter()}><MdArrowCircleDown size={30} /></a>
        <div id="fc" className="filter_container">
          <Search/>
        </div>
      </div>
    </header>
  )
}