import styles from "./Background.module.css";
import Link from 'next/link'

const bg = () => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.head}>
                    <img src="/image/logo.png" />
                    <p>Tech</p>
                    <p>People</p>
                </div>
                <input type="text" placeholder="EMAIL"/>
                <input type="text" placeholder="PASSWORD"/>
                <div>
                    <Link href="/forgot">FORGOT PASSWORD?</Link>
                </div>
                <Link href="/renderpage">LOGIN</Link>
                <Link href="/signup">SIGN UP</Link>
            </div>
        </div>
    );
};

export default bg;