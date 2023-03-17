import BotaoPrincipal from 'components/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';
import styles from './NaoEncontrada.module.css';

export default function NaoEncontrada(){
    const navegar = useNavigate()
    return(
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>
                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Verifique se o link foi digitado corretamente. 
                </p>

                <p className={styles.paragrafo}>
                    Caso esteja tudo certo o problema foi culpa do estagiário rsrs.
                </p>

                <div className={styles.botaoContainer} onClick={() => {navegar("/") /* se usar -1 volta a pagina anterior */}}>
                    <BotaoPrincipal tamanho='lg'>
                        Voltar
                    </BotaoPrincipal>
                </div>
            
                <img className={styles.imagemCachorro}
                    src="/assets/erro_404.png"
                    alt="Cachorro"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
        
    )
}