import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PaginaPrincipal } from "./sections/PaginaPrincipal/PaginaPrincipal"
import { About } from "./sections/About/About"
import { Calendario } from "./sections/Calendario"
import { Trabajo } from "./sections/Trabajo"
import { Error404 } from "./sections/Error404/Error404"
import { NavBar } from "./components/NavBar/NavBar"
import { Event } from "./sections/Event"
import {NextUIProvider} from "@nextui-org/react";
import "./style.css"
import "./fonts.css"

function App() {

  return (
    <>
    <NextUIProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />}></Route>
          <Route path="/about/" element={<About />}></Route>
          <Route path="/calendario/" element={<Calendario />}></Route>
          <Route path="/trabajo/:numero" element={<Trabajo />}></Route>
          <Route path="/event/:id" element={<Event />}></Route>


          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
      </NextUIProvider>
    </>
  )
}

export default App
