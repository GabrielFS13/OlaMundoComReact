import styles from './Banner.module.css';

export default function Banner(){
    return(
        <div className={styles.banner}>

            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                
                <p className={styles.paragrafo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nesciunt magnam quis, necessitatibus facere at ab veritatis porro dolorum voluptates dolores? Officia molestiae dolorum excepturi velit voluptatem fuga! Recusandae, porro?
                </p>
            </div>
            
            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                     src='./assets/circulo_colorido.png'
                     alt="Colorido"
                     aria-hidden={true} />
                <img className={styles.minhaFoto}
                     src='./assets/minha_foto.jpg'
                     alt="Minha foto"
                     aria-hidden={true} />
            </div>
        </div>
    )
}