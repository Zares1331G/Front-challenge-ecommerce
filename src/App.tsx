// import { useContext } from "react"
import { /* StoreContext,  */StoreContextProvider } from "./context/StoreContext"
import AppRouter from "./router/AppRouter"
import Header from "./components/header"
import Footer from "./components/footer"
import './app.css'

const App = () => {
  //const { test } = useContext(StoreContext)

  return (
    <StoreContextProvider>
      <Header />
      <AppRouter />
      <Footer />
    </StoreContextProvider>
  )
}

export default App
