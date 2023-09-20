import { Link } from 'react-router-dom'
import formStyles from '../../comuns/tituloForm.module.css'
import userStyles from '../../comuns/usuario.module.css'
import bikeStyles from '../../comuns/bicicleta.module.css'
import memberStyles from '../../comuns/membro.module.css'
import styles from './analista.module.css'

export function Analista() {
  return (
    <>
      <div className={formStyles['titulo']}>
        <h1>Insira a Credencial do Analista</h1>
        <p>
          Digite a sua credencial para receber todos os dados dos ciclistas e
          suas bicicletas. Escolha uma para analisar
        </p>
      </div>
      <form className={formStyles['form-api']}>
        <div className={styles['informacao']}>
          <label htmlFor="RM">RM:</label>
          <input placeholder="RM" name="RM" id="RM" type="text" />
        </div>
        <button
          className={styles['enviar']}
          type="submit"
          onClick={analistaEncontrado}
        >
          Enviar
        </button>
      </form>
      <hr />
      <div className={userStyles['usuario-completo']}>
        <h2>Analista</h2>
        <p>
          Confira as suas informações, e as de todos os ciclistas cadastrados.
        </p>
        <div className={userStyles['usuario']}>
          <img src="./src/img/pessoas/analista.jpg" alt="Analista" />
          <h3 className={userStyles['usuario-name']}>Thiago Pereira Fritz</h3>
          <h3 className={userStyles['usuario-email']}>thiago@gmail.com</h3>
        </div>
      </div>
      <hr />
      <div className={bikeStyles['bicicletas']}>
        <div className={bikeStyles['bicicleta-user']}>
          <div className={bikeStyles['bicicleta']}>
            <img src="./src/img/bicicletas/bicicleta2.png" alt="Bicicleta" />
            <div className={bikeStyles['bicicleta-infos']}>
              <h2 className={bikeStyles['modelo']}>GTS M1 TSI</h2>
              <div className={bikeStyles['linha']}>
                <h3 className={bikeStyles['marca']}>Stradivarius</h3>
                <h3 className={bikeStyles['nSerie']}>SF112301</h3>
                <h3 className={bikeStyles['nSerie']}>2023</h3>
              </div>
              <h3 className={bikeStyles['aprovado']}>APROVADO</h3>
              <h3 className={bikeStyles['preco']}>R$7300.00</h3>
              <Link to="/analise">
                <button className={styles['button']}>Analisar</button>
              </Link>
            </div>
          </div>
          <div className={memberStyles['membro']}>
            <img src="./src/img/pessoas/usuario2.jpg" alt="Daryl Dixon" />
            <p className={memberStyles['nome-membro']}>Daryl Dixon</p>
            <p className={memberStyles['rm-membro']}>daryl@gmail.com</p>
          </div>
        </div>

        <div className={bikeStyles['bicicleta-user']}>
          <div className={bikeStyles['bicicleta']}>
            <img src="./src/img/bicicletas/bicicleta3.png" alt="Bicicleta" />
            <div className={bikeStyles['bicicleta-infos']}>
              <h2 className={bikeStyles['modelo']}>Index Aro 29</h2>
              <div className={bikeStyles['linha']}>
                <h3 className={bikeStyles['marca']}>Amazonas</h3>
                <h3 className={bikeStyles['nSerie']}>CH070116</h3>
                <h3 className={bikeStyles['nSerie']}>2016</h3>
              </div>
              <h3 className={bikeStyles['reprovado']}>REPROVADA</h3>
              <h3 className={bikeStyles['preco']}>R$2500.00</h3>
              <Link to="/analise">
                <button className={styles['button']}>Analisar</button>
              </Link>
            </div>
          </div>
          <div className={memberStyles['membro']}>
            <img src="./src/img/pessoas/usuario1.png" alt="Andrew Lincoln" />
            <p className={memberStyles['nome-membro']}>Andrew Costa Lincoln</p>
            <p className={memberStyles['rm-membro']}>andrew@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

function analistaEncontrado() {
  alert('Analista Encontrado!')
}
