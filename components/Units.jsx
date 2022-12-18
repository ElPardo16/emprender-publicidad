import { MdAdd, MdDeleteOutline, MdRemove } from "react-icons/md";

export default function Units({type = 0}) {
  return (
    <div className="units">
        <div className="control">
            <MdAdd size={25}/>
            <span>1</span>
            <MdRemove size={25}/>
        </div>
        {type == 1 && <MdDeleteOutline size={35}/>}
    </div>
  )
}