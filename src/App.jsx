import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Contact from "./components/Contact"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos/:slug" element={<ProductDetail />} />
      <Route path="*" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  )
}
