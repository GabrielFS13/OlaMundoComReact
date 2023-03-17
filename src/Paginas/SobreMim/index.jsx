import PostModelo from "components/PostModelo";
import styles from './SobreMim.module.css';
export default function SobreMim(){
    return(
        <PostModelo fotoCapa="/assets/sobre_mim_capa.png" titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gabriel Falcão!
            </h3>
            
            <img 
                src="/assets/sobre_mim_foto.jpg"
                className={styles.fotoSobreMim}
                alt="minha foto"
            />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis dignissimos eum voluptates esse labore aspernatur maxime doloremque nemo quas! Aspernatur quis eaque aperiam illo sunt nam labore totam error!
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis dignissimos eum voluptates esse labore aspernatur maxime doloremque nemo quas! Aspernatur quis eaque aperiam illo sunt nam labore totam error!
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis dignissimos eum voluptates esse labore aspernatur maxime doloremque nemo quas! Aspernatur quis eaque aperiam illo sunt nam labore totam error!
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis dignissimos eum voluptates esse labore aspernatur maxime doloremque nemo quas! Aspernatur quis eaque aperiam illo sunt nam labore totam error!
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis dignissimos eum voluptates esse labore aspernatur maxime doloremque nemo quas! Aspernatur quis eaque aperiam illo sunt nam labore totam error!
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis dignissimos eum voluptates esse labore aspernatur maxime doloremque nemo quas! Aspernatur quis eaque aperiam illo sunt nam labore totam error!
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis dignissimos eum voluptates esse labore aspernatur maxime doloremque nemo quas! Aspernatur quis eaque aperiam illo sunt nam labore totam error!
            </p>
            

        </PostModelo>
    )
}