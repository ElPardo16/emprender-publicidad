import Head from 'next/head'
import FloatBtn from './FloatBtn';
import Footer from "./Footer";
import Header from "./Header";
import Menu from './Menu';
import Info from './Info';
import { useEffect, useState } from 'react';
import Search from './Search';
import Select from './Select';
import { useDispatch, useSelector } from 'react-redux';
import { orderArray, setPMax, setPMin } from '../utils/filterSlice';
//importamos las dependecias a usar
export default function Layout({ children, title }) {
    // traemos el disparador para cambiar los estados
    const dispatch = useDispatch()
    // traemos el estado de los filtros
    const filterState = useSelector(state => state.filter)
    // creamos 3 estados que guardan 3 filtros 
    // el precio minimo en el input
    const [min, setMin] = useState()
    // el precio maximo en el input
    const [max, setMax] = useState()
    // el radiobutton seleccionado, por defecto lo obtiene del estado globañ
    const [order, setOrder] = useState(filterState.options.order)
    // con el hook useEffect  cambiamos el estado de los filtros al cambiar
    //el estado global
    useEffect(_ => {
        dispatch(orderArray(order))
    }, [order])
    useEffect(_ => {
        dispatch(setPMin(min))
    }, [min])
    useEffect(_ => {
        dispatch(setPMax(max))
    }, [max])
    return (
        <>
            <Head>
                <title>Emprender Publicidad | {title}</title>
                <meta name="description" content="Tienda de emprender publicidad" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Menu/> */}
            <Info />
            <Header />
            <section>
                <aside>
                    <div className="filters">
                        <Search />
                        <h3>Categorias:</h3>
                        <Select />
                        <h3>Precio:</h3>
                        <div className="minmax">
                            {/* al tipear en los formularios guardamos su valor en el estado*/}
                            <input type="number" placeholder='min' onChange={e => void setMin(parseInt(e.target.value))} />
                            <span>-</span>
                            <input type="number" placeholder='max' onChange={e => void setMax(parseInt(e.target.value))} />
                        </div>
                        <h3>Ordenar:</h3>
                        <div className='con_radios'>
                            <label htmlFor="r1">
                                {/* al seleccionar el radiobuton guardamos su valor en el estado
                                y lo checkeamos */}
                                <input type="radio" name="order" value="0" id="r1" checked={order === "0"} onChange={e => void setOrder(e.target.value)} /> Por defecto
                            </label>
                            <label htmlFor="r2">
                                <input type="radio" name="order" value="1" id="r2" checked={order === "1"} onChange={e => void setOrder(e.target.value)} /> Precio mas bajo a alto
                            </label>
                            <label htmlFor="r3">
                                <input type="radio" name="order" value="2" id="r3" checked={order === "2"} onChange={e => void setOrder(e.target.value)} /> Precio mas alto a bajo
                            </label>
                            <label htmlFor="r4">
                                <input type="radio" name="order" value="3" id="r4" checked={order === "3"} onChange={e => void setOrder(e.target.value)} /> Alfabeticamente (A-Z)
                            </label>
                        </div>
                    </div>
                </aside>
                {children}
            </section>
            <FloatBtn />
            <Footer />

        </>
    )
}