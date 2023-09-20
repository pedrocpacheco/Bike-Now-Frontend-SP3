import { Link } from 'react-router-dom'
import './header.css'

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="./src/img/logo.png" />
      </Link>
      <h2>Seleção de Tipo de Usuario</h2>
      <div className="botoes">
        <Link to="/ciclista">
          <button>Ciclista 🚲</button>
        </Link>
        <Link to="/analista">
          <button>Analista 🔎</button>
        </Link>
      </div>
    </header>
  )
}
