import styles from "./Register.module.css";
import Link from 'next/link'

const forgot = () => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.head}>
                    <img src="/image/logo.png" />
                    <p>Tech</p>
                    <p>People</p>
                </div>
                <h3>Forgotten your password?</h3>
                <p>Enter your email address below, 
                and we'll email instructions for setting a new one.</p>
                <input type="text" placeholder="EMAIL"/>
                <input type="button" value="RESET" />
                <Link href="/">BACK</Link>
            </div>
        </div>
    );
};

export default forgot;