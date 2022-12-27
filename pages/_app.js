import '../styles/globals.css'
import { store } from '../utils/store'
import { Provider } from 'react-redux';
// usamos redux para el manejo de estados globales

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* englobamos todos los componentes con el provedor para poder acceder al estado */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
