import styles from './analise.module.css'
import formStyles from '../../comuns/tituloForm.module.css'
import bikeStyles from '../../comuns/bicicleta.module.css'
import memberStyles from '../../comuns/membro.module.css'

export function Analise() {
  return (
    <body>
      <div className={formStyles['titulo']}>
        <h1>Analise a bicicleta registrada pelo usuário</h1>
        <p className={styles['subtitulo']}>
          Corrija o resultado da IA se você tiver julgado o resultado como
          errôneo.
        </p>
      </div>
      <hr />
      <h2 className={styles['titulo-foto']}>Bicicleta Analisada</h2>
      <div className={bikeStyles['bicicletas']}>
        <div className={bikeStyles['bicicleta-user']}>
          <div className={bikeStyles['bicicleta']}>
            <img src="./src/img/bicicletas/bicicleta1.png" alt="Bicicleta" />
            <div className={bikeStyles['bicicleta-infos']}>
              <h2 className={bikeStyles['modelo']}>GTS M1 TSI</h2>
              <div className={bikeStyles['linha']}>
                <h3 className={bikeStyles['marca']}>Stradivarius</h3>
                <h3 className={bikeStyles['nSerie']}>SF112301</h3>
                <h3 className={bikeStyles['nSerie']}>2023</h3>
              </div>
              <h3 className={bikeStyles['aprovado']}>APROVADO</h3>
              <h3 className={bikeStyles['preco']}>R$7300.00</h3>
            </div>
          </div>
          <div className={memberStyles['membro']}>
            <img src="./src/img/pessoas/usuario2.jpg" alt="Daryl Dixon" />
            <p className={memberStyles['nome-membro']}>Daryl Dixon</p>
            <p className={memberStyles['rm-membro']}>daryl@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles['fotos']}>
        <div className={styles['foto']}>
          <label htmlFor="name" className={styles['label']}>
            Foto de Frente
          </label>
          <img src="./src/img/analise/analise1.png" alt="Foto de Frente" />
        </div>
        <div className={styles['foto']}>
          <label htmlFor="name" className={styles['label']}>
            Foto de Lado
          </label>
          <img src="./src/img/analise/analise2.png" alt="Foto de Lado" />
        </div>
        <div className={styles['foto']}>
          <label htmlFor="name" className={styles['label']}>
            Foto Traseira
          </label>
          <img src="./src/img/analise/analise3.png" alt="Foto Traseira" />
        </div>
        <div className={styles['foto']}>
          <label htmlFor="name" className={styles['label']}>
            Foto Num. Serie
          </label>
          <img src="./src/img/analise/analise4.png" alt="Foto Num. Serie" />
        </div>
      </div>
      <div className={styles['botoesAnalise']}>
        <button className={styles['aceitar']} onClick={aceitarBicicleta}>
          Aceitar Bicicleta
        </button>
        <button className={styles['negar']} onClick={negarBicicleta}>
          Negar Bicicleta
        </button>
      </div>
    </body>
  )
}

function aceitarBicicleta() {
  alert('Bicicleta aceita!')
}

function negarBicicleta() {
  alert('Bicicleta negada!')
}
