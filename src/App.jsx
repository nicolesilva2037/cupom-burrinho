import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Stores from "./Pages/Stores";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Perfil from "./Pages/Perfil";
import HowCouponWorks from "./Pages/HowCouponWorks";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lojas" element={<Stores />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/como-funciona" element={<HowCouponWorks />} />
        </Routes>
      </main>
    </div>
  );
}
