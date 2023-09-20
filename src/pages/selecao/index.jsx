import { Link } from 'react-router-dom'
import styles from './selecao.module.css'

export function Selecao() {
  return (
    <>
      <div className={styles['titulo']}>
        <h1>Que tipo de usuário você é?</h1>
        <p>
          A nossa aplicação suporta dois tipos de usuários: Ciclistas e
          Analistas. Os ciclistas enviam as fotos de suas bicicletas, e os
          analistas podem validar ou não as mesmas.
        </p>
      </div>
      <div className={styles['usuarios']}>
        <div className={styles['usuario']}>
          <Link to="/ciclista">
            <img
              className={styles['img-usuario']}
              src="./src/img/icones/ciclista.png"
              alt="Ciclista"
            />
          </Link>
          <div className={styles['texto-usuario']}>
            <Link to="/ciclista">
              <h2 className={styles['nome-usuario']}>Ciclistas</h2>
            </Link>
            <p className={styles['descricao-usuario']}>
              Envie as fotos da sua bicicleta agora mesmo! Elas serão analisadas
              por uma IA de reconhecimento de imagem!
            </p>
          </div>
        </div>
        <div className={styles['usuario']}>
          <Link to="/analista">
            <img
              className={styles['img-usuario']}
              src="./src/img/icones/analista.png"
              alt="Agricultura Vertical"
            />
          </Link>
          <div className={styles['texto-usuario']}>
            <Link to="/analista">
              <h2 className={styles['nome-usuario']}>Analista</h2>
            </Link>
            <p className={styles['descricao-usuario']}>
              Analise as fotos enviadas pelos usuários. Garanta que a IA
              aplicada realizou uma análise correta! E à corrija se for
              necessário.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
