import Image from 'next/image'
import Card from '../components/Card'
import CartItem from '../components/CartItem'
import Info from '../components/Info'
import Layout from '../components/Layout'
import Description from '../components/Description'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fillProducts } from '../utils/ProductsSlice'

export default function Shop({productsRemote}) {
  const dispatch = useDispatch()
  const productsState = useSelector(state => state.product)
  const filterState = useSelector(state => state.filter)
  const applyFilters = _ => {
    let productFilter = productsState.filter(item => item.category == filterState.category).filter(({title}) => title.toLowerCase().includes(filterState.options.word))

    if(filterState.options.price.min && filterState.options.price.max){
      productFilter = productFilter.filter(({price}) => price <= filterState.options.price.max && price >= filterState.options.price.min)
    }else if(!filterState.options.price.min && filterState.options.price.max){
      productFilter = productFilter.filter(({price}) => price <= filterState.options.price.max && price >= 0)
    }else if(!filterState.options.price.max && filterState.options.price.min){
      const maxPrice = Math.max(...productFilter.map(({price}) => price))
      productFilter = productFilter.filter(({price}) => price <= maxPrice && price >= filterState.options.price.min)
    }

    switch(filterState.options.order){
      case "1":
        productFilter.sort((a,b) => a.price - b.price)
        break
      case "2":
        productFilter.sort((a,b) => b.price - a.price)
        break
      case "3":
        productFilter.sort((a,b) => a.title.localeCompare(b.title))
        break
    }
    return productFilter
  }
  const products = applyFilters()
  /* const dialogState = useSelector(state => state.dialog) */
  useEffect(_ => void dispatch(fillProducts(productsRemote)),[])
  return (
      <Layout title="Tienda">
        <main>
          {products.length != 0 ? products.map((item, index) => <Card key={item.id} data={item} priority={index <= 2}/>) 
            : <h3 className='empty'>No hay productos para mostrar</h3>}
        </main>
      </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products")
  const json = await res.json()
  return {
    props: {
      productsRemote: json
    },
  }
}
