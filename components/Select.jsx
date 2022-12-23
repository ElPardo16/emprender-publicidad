import { useDispatch, useSelector } from "react-redux";
import { cat } from "../utils/filterSlice";

export default function Select() {
    const filterState = useSelector(state => state.filter)
    const productsState = useSelector(state => state.product)
    const dispatch = useDispatch()
    const listCat = [... new Set(productsState.map(item => item.category))]
    return (
        <select className="select" defaultValue={filterState.category} onChange={e => void dispatch(cat(e.target.value))}>
            {listCat.map((item, index) => <option key={index} value={item.toLowerCase()}>{item}</option>)}
        </select>
    )
}