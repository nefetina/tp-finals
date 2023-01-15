import styles from "./Register.module.css";
import Link from 'next/link'

const reg = () => {
    return (
        <div className={styles.container}>
  
           <div className={styles.content1}>
                <div className={styles.childcontent}>
                  
              
                    <div className={styles.text}>
                        <picture >
                          <img className={styles.logo} src="/image/logo.png" alt="none"/>
                        </picture>
                        
                        <p className = {styles.tech}>Tech</p>
                        <p className = {styles.people}>People</p>
    
                    </div>
                    <div className={styles.inputs}>
  
                      <input className={styles.input1} type="text" placeholder="Email"/>
                      <input className={styles.input1}type="text" placeholder="Password"/>
                      <input className={styles.input1}type="text" placeholder=" Confirm Password"/>
                    </div>
                    
                   
                   
                    <div className={styles.buttons}>
                        
                        <button className={styles.btn1}>Sign Up</button>
                        <div className={styles.lines}>
                          <div className={styles.line}></div>
                        </div>
                        
                        <button className={styles.btn2}>Back</button>
                        
                        
                    </div>
                    
                    
                    
                </div>
               
            </div>
         
           
        </div>
       
      );
};

export default reg;