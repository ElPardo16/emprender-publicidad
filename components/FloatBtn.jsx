import {FaWhatsapp} from 'react-icons/fa'
export default function FloatBtn() {
  const WA_NUM = "3503027393"
  const msg = "Buen dia %0aMe interesa cotizar un producto en especifico con ustedes"
  const wa_url = `https://api.whatsapp.com/send?phone=+57${WA_NUM}&text=${msg}`
  return (
    <div className="float" onClick={_ => void window.open(wa_url, "_blank")}><FaWhatsapp size={40}/></div>
  )
}