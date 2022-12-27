import Image from 'next/image'
import Card from '../components/Card'
import CartItem from '../components/CartItem'
import Info from '../components/Info'
import Layout from '../components/Layout'
import Description from '../components/Description'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fillProducts } from '../utils/productsSlice'
// importamos las dependencias

export default function Shop({ productsRemote }) {
  // traemos el disparador para cambiar los estados
  const dispatch = useDispatch()
  // traemos el estado de productos y de los filtros
  const productsState = useSelector(state => state.product)
  const filterState = useSelector(state => state.filter)
  // esta funcion aplica los filtros seleccionados
  const applyFilters = _ => {
    // filtramos la lista de productos por categoria, y posteriormente por la cadena que esta en el input
    // de busqueda
    let productFilter = productsState.filter(item => item.category == filterState.category).filter(({ title }) => title.toLowerCase().includes(filterState.options.word))
    // Aca filtramos por precio ya sea minimo, maximo o los dos
    if (filterState.options.price.min && filterState.options.price.max) {
      productFilter = productFilter.filter(({ price }) => price <= filterState.options.price.max && price >= filterState.options.price.min)
    } else if (!filterState.options.price.min && filterState.options.price.max) {
      productFilter = productFilter.filter(({ price }) => price <= filterState.options.price.max && price >= 0)
    } else if (!filterState.options.price.max && filterState.options.price.min) {
      // obtenemos el precio maximo de los productos filtrados
      const maxPrice = Math.max(...productFilter.map(({ price }) => price))
      productFilter = productFilter.filter(({ price }) => price <= maxPrice && price >= filterState.options.price.min)
    }
    // cambiamos el orden de los productos
    switch (filterState.options.order) {
      case "1":
        // con el metodo sort podemos ordenar un arreglo
        // lo ordenamos de precio menor a mayor
        productFilter.sort((a, b) => a.price - b.price)
        break
      case "2":
        // lo ordenamos de precio mayor a menor
        productFilter.sort((a, b) => b.price - a.price)
        break
      case "3":
        // lo ordenamos alfabeticamente
        // con localcompare obtenemos un valor de -1 a 1 dependiendo de cual caracter va primero
        // ya que sort recibe estos valores como parametros
        productFilter.sort((a, b) => a.title.localeCompare(b.title))
        break
    }
    // retornamos el arreglo filtrado
    return productFilter
  }
  // lo guardamos en una variable
  const products = applyFilters()
  /* const dialogState = useSelector(state => state.dialog) */
  // obtenemos los productos que recibimos como prop y los guardamos en el estado global
  useEffect(_ => void dispatch(fillProducts(productsRemote)), [])
  return (
    <Layout title="Tienda">
      <main>
        {/* llenamos el main con los productos */}
        {products.length != 0 ? products.map((item, index) => <Card key={item.id} data={item} priority={index <= 2} />)
          : <h3 className='empty'>No hay productos para mostrar</h3>}
      </main>
    </Layout>
  )
}
// esta funcion es porpia de next y sirve para obtener datos de una api y generar un SSG(static site generation) con esto la carga del sitio es mas rapida y tiene mejor SEO para ser indexada en google
export async function getStaticProps() {
  try {
    // obtenemos los datos de la api que creamos, osea de la DB
    const res = await fetch("https://ep-cliente.netlify.app/api/products")
    const json = await res.json()
    // retornamos la prop con los datos
    return {
      props: {
        productsRemote: json
      },
    }
  } catch (err) {
    // en caso de erro delvolvemos un arrai vacio
    console.log(err)
    return {
      props: {
        productsRemote: []
      },
    }
  }
}
