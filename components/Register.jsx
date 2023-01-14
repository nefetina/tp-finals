import styles from "./Register.module.css";
import Link from 'next/link'

const reg = () => {
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
                <input type="text" placeholder="CONFRIM PASSWORD"/>
                <input type="button" value="SIGN UP" />
                <Link href="/">BACK</Link>
            </div>
        </div>
    );
};

export default reg;