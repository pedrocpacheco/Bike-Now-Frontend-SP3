import styles from './ciclista.module.css'
import formStyles from '../../comuns/tituloForm.module.css'
import userStyles from '../../comuns/usuario.module.css'
import bikeStyles from '../../comuns/bicicleta.module.css'
import { Link } from 'react-router-dom'

export function Ciclista() {
  return (
    <>
      <div className={formStyles['titulo']}>
        <h1>Insira a Credencial do Cliente</h1>
        <p>
          Digite a sua credencial para receber todos os dados das bicicletas do
          ciclista. Escolha uma para enviar as fotos
        </p>
      </div>
      <form className={formStyles['form-api']}>
        <div className={styles['informacao']}>
          <label htmlFor="CPF">CPF:</label>
          <input placeholder="CPF" name="CPF" id="CPF" type="text" />
        </div>
        <button
          className={styles['enviar']}
          type="submit"
          onClick={ciclistaEncontrado}
        >
          Enviar
        </button>
      </form>
      <hr />
      <div className={userStyles['usuario-completo']}>
        <h2>Cliente</h2>
        <p>Selecione uma de suas bicicletas e envie as suas fotos</p>
        <div className={userStyles['usuario']}>
          <img src="./src/img/pessoas/usuario1.png" alt="Usuário" />
          <h3 className={userStyles['usuario-name']}>Andrew Costa Lincoln</h3>
          <h3 className={userStyles['usuario-email']}>andrew@gmail.com</h3>
        </div>
      </div>
      <hr />
      <div className={bikeStyles['bicicletas']}>
        <div className={bikeStyles['bicicleta-template']}>
          <div className={bikeStyles['bicicleta']}>
            <img src="./src/img/bicicletas/bicicleta1.png" alt="Bicicleta" />
            <div className={bikeStyles['bicicleta-infos']}>
              <h2 className={bikeStyles['modelo']}>South New R06 29</h2>
              <div className={bikeStyles['linha']}>
                <h3 className={bikeStyles['marca']}>Quadro South</h3>
                <h3 className={bikeStyles['nSerie']}>MS4103958</h3>
                <h3 className={bikeStyles['nSerie']}>2018</h3>
              </div>
              <h3 className={bikeStyles['naoAnalizado']}>NÃO ANALISADO</h3>
              <h3 className={bikeStyles['preco']}>R$4600.00</h3>
              <Link to="/fotos">
                <button className={bikeStyles['button']}>Enviar Fotos</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={bikeStyles['bicicleta-template']}>
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
              <Link to="/fotos">
                <button className={bikeStyles['button']}>Enviar Fotos</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

function ciclistaEncontrado() {
  alert('Ciclista Encontrado!')
}
