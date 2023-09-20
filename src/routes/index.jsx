import { Outlet, Route, Routes } from 'react-router-dom'

import { Start } from '../pages/start'
import { Selecao } from '../pages/selecao'
import { Ciclista } from '../pages/ciclista'
import { Analista } from '../pages/analista'
import { Analise } from '../pages/analise'
import { Fotos } from '../pages/fotos'

import { Header } from '../components/header'
import { Footer } from '../components/footer'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />

      <Route element={<MainLayout />}>
        <Route path="/selecao" element={<Selecao />} />
        <Route path="/ciclista" element={<Ciclista />} />
        <Route path="/analista" element={<Analista />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/fotos" element={<Fotos />} />
      </Route>
    </Routes>
  )
}

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
