import {FaWhatsapp} from 'react-icons/fa'
// traemos el icono de whatsapp
export default function FloatBtn() {
  // ponemos el numero del cliente
  const WA_NUM = "3503027393"
  // guardamos el mensaje que se mostrara en whats app
  // el %0a es un salto de linea
  const msg = "Buen dia %0aMe interesa cotizar un producto en especifico con ustedes"
  //generamos la url de whatsapp
  const wa_url = `https://api.whatsapp.com/send?phone=+57${WA_NUM}&text=${msg}`
  return (
    // al dar click al boton abrimos una nueva pestaña con la url
    <div className="float" onClick={_ => void window.open(wa_url, "_blank")}><FaWhatsapp size={40}/></div>
  )
}