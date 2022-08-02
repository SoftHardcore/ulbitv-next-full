import MainContainer from "../components/MainContainer";
import styles from "../styles/error404.module.css"

export default function Error() {
    return (
        <MainContainer>
            <p className={styles.textError}>404</p>
            <h1 className={styles.captionError}>
                Ой, мы не нашли страницу :&#125;
            </h1>
        </MainContainer>
    )
};