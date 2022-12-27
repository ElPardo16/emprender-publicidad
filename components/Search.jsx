import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { search } from "../utils/filterSlice"
//importamos las dependecias a usar
export default function Search() {
  // traemos el disparador para cambiar los estados
  const dispatch = useDispatch()
  //traemos el estado del filtro
  const filterState = useSelector(state => state.filter)
  //destructuramos el json y obtenemos la propieda options
  const {options} = filterState
  // creamos un estado local para guardar lo que tipeemos en el input
  const [word,setWord] = useState(options.word)
  //esta funcion cambia el estado local
  function filterWord(wordInput){
    setWord(wordInput)
  }
  // al cambiar el estado cambiamos los filtros globales
  useEffect(_ => {
    dispatch(search(word))
  },[word])
  return (
    // al tippear cambiamos el estado y asignamos el valor del input
    <input className="search" type="text" placeholder="Buscar" onChange={e => void filterWord(e.target.value.toLowerCase())}/>
  )
}