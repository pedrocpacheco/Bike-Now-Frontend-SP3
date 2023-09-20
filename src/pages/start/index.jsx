import styles from './start.module.css'
import { Link } from 'react-router-dom'

export function Start() {
  return (
    <>
      <div className={styles['inicio-todo']}>
        <div className={styles['inicio-conteudo']}>
          <h1>Bike Now</h1>
          <p>
            Desejam enviar as fotos da sua bicicleta, ou analisar as bicicletas
            cadastradas?
          </p>
          <Link to="/selecao">
            <button>Acessar</button>
          </Link>
        </div>
        <div className={styles['inicio-imagem']}>
          <img src="./src/img/logo.png" alt="Logotipo" />
        </div>
      </div>
    </>
  )
}
