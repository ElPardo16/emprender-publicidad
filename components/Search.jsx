import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { search } from "../utils/filterSlice"

export default function Search() {
  const dispatch = useDispatch()
  const filterState = useSelector(state => state.filter)
  const {options} = filterState
  const [word,setWord] = useState(options.word)
  function filterWord(wordInput){
    setWord(wordInput)
  }
  useEffect(_ => {
    dispatch(search(word))
  },[word])
  return (
    <input className="search" type="text" placeholder="Buscar" onChange={e => void filterWord(e.target.value.toLowerCase())}/>
  )
}