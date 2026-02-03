import {Footer} from "./footer/footer";
import styles from './layout.module.scss';

export default function Layout({ children }) {
    return (
        <div id="background" className={styles["background"]}>
            <main style={{ flex: '1' }}>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
