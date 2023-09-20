import styles from './fotos.module.css'
import formStyles from '../../comuns/tituloForm.module.css'
import bikeStyles from '../../comuns/bicicleta.module.css'
import memberStyles from '../../comuns/membro.module.css'

export function Fotos() {
  return (
    <body>
      <div className={formStyles['titulo']}>
        <h1>Envie as fotos da sua Bicicleta</h1>
        <p className={styles['subtitulo']}>
          Abra a sua câmera e envie cada uma das fotos requeridas para análise.
        </p>
      </div>
      <hr />
      <h2 className={styles['titulo-foto']}>Bicicleta Analisada</h2>
      <div className={bikeStyles['bicicletas']}>
        <div className={bikeStyles['bicicleta-user']}>
          <div className={bikeStyles['bicicleta']}>
            <img src="./src/img/bicicletas/bicicleta1.png" alt="Bicicleta" />
            <div className={bikeStyles['bicicleta-infos']}>
              <h2 className={bikeStyles['modelo']}>South New R06 29</h2>
              <div className={bikeStyles['linha']}>
                <h3 className={bikeStyles['marca']}>Quadro South</h3>
                <h3 className={bikeStyles['nSerie']}>MS4103958</h3>
                <h3 className={bikeStyles['nSerie']}>2018</h3>
              </div>
              <h3 className={bikeStyles['naoAnalizado']}>Enviando...</h3>
              <h3 className={bikeStyles['preco']}>R$4600.00</h3>
            </div>
          </div>
          <div className={memberStyles['membro']}>
            <img src="./src/img/pessoas/usuario1.png" alt="Andrew Lincoln" />
            <p className={memberStyles['nome-membro']}>Andrew Lincoln</p>
            <p className={memberStyles['rm-membro']}>andrew@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles['fotos']}>
        <div className={styles['foto']}>
          <label htmlFor="name" className={styles['label']}>
            Foto de Frente
          </label>
          <button
            className={styles['enviar']}
            type="submit"
            onClick={enviarFoto}
          >
            Enviar Foto 📷
          </button>
        </div>
        <div className={styles['foto']}>
          <label htmlFor="name" className={styles['label']}>
            Foto de Lado
          </label>
          <button
            className={styles['enviar']}
            type="submit"
            onClick={enviarFoto}
          >
            Enviar Foto 📷
          </button>
        </div>
        <div className={styles['foto']}>
          <label htmlFor="name" className={styles['label']}>
            Foto Traseira
          </label>
          <button
            className={styles['enviar']}
            type="submit"
            onClick={enviarFoto}
          >
            Enviar Foto 📷
          </button>
        </div>
        <div className={styles['foto']}>
          <label htmlFor="name" className={styles['label']}>
            Foto Num. Serie
          </label>
          <button
            className={styles['enviar']}
            type="submit"
            onClick={enviarFoto}
          >
            Enviar Foto 📷
          </button>
        </div>
      </div>
      <div className={styles['botoesAnalise']}>
        <button className={styles['aceitar']} onClick={finalizarFotos}>
          Confirmar Fotos
        </button>
      </div>
    </body>
  )
}

function enviarFoto() {
  alert('Foto Enviada!')
}

function finalizarFotos() {
  alert('Processo Finalizado!')
}
