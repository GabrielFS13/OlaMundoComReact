import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada} from './marca_registrada.svg'; 

export default function Rodape(){
    return(
       <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido durante o curso "React: desenvolvendo em React Router com JavaScript" na platataforma Alura.
       </footer>
    )
}