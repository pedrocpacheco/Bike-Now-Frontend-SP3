import styles from './footer.module.css'

export function Footer() {
  return (
    <footer>
      <h1 className={styles['nome-equipe']}>Equipe da Bike Now</h1>
      <p id="subtitulo-membros" className={styles['subtitulo-membros']}>
        Conheça os membros do projeto
      </p>
      <br />
      <div className={styles['membros']}>
        <div className={styles['membro']}>
          <img src="./src/img/membros/gabriel.png" alt="Gabriel Amancio" />
          <p className={styles['nome-membro']}>Gabriel Amancio</p>
          <p className={styles['rm-membro']}>RM: 97936</p>
        </div>
        <div className={styles['membro']}>
          <img src="./src/img/membros/pedro.png" alt="Pedro Pacheco" />
          <p className={styles['nome-membro']}>Pedro Pacheco</p>
          <p className={styles['rm-membro']}>RM: 98043</p>
        </div>
        <div className={styles['membro']}>
          <img src="./src/img/membros/henrique.png" alt="Henrique Baptista" />
          <p className={styles['nome-membro']}>Henrique Baptista</p>
          <p className={styles['rm-membro']}>RM: 97796</p>
        </div>
      </div>
    </footer>
  )
}
