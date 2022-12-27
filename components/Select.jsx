import { useDispatch, useSelector } from "react-redux";
import { cat } from "../utils/filterSlice";
//importamos las dependecias a usar
export default function Select() {
    //traemos los estados de filtro y productos
    const filterState = useSelector(state => state.filter)
    const productsState = useSelector(state => state.product)
    // traemos el disparador para cambiar los estados
    const dispatch = useDispatch()
    // obtenemos la lista de categorias del estado
    // con set solo obtenemos valores unicos, no repetidos
    const listCat = [... new Set(productsState.map(item => item.category))]
    return (
        <select className="select" defaultValue={filterState.category} onChange={e => void dispatch(cat(e.target.value))}>
            {/* llenamos el select con las categorias */}
            {listCat.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select>
    )
}