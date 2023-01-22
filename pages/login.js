import styles from "../components/Register.module.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';


export default function log() {
    const [User, setUser] = useState('')
    const [Pass, setPass] = useState('')
    const [flag, setFlag] = useState(false)
    
    const [StatuseErr, setstaterr] = useState('')
    
    const LogIn = () =>{
    
        Axios.post('http://localhost:3000/LogIn',{
            username: User, 
            password: Pass,
        }).then((response) => {
            if (response.data.message == 'Verified'){
              window.location.href='/images'
            }else{
                setstaterr(response.data.message)
                setFlag(true);
            }
          });
    
    
        };

    
      
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
                    
                    <section>

                        
                    {flag &&(<Alert color="primary" variant="danger">{StatuseErr}</Alert>)}
                        <div>
                            <input type="text" className={styles.input1} onChange={(e)=>{setUser(e.target.value);}} id="Usernamelog" placeholder='Username' required />
                          </div>

                          <div>
                            <input type="password" className={styles.input1} onChange={(e)=>{setPass(e.target.value);}} id="Passwordlog" placeholder='Password' required />
                          </div>

                          <br/>
                          <button className={styles.btn1} onClick={LogIn} type="submit">Login</button>
                          <div>
                            <a href="/register">Sign Up</a>
                          </div>
                          <div>
                            <a href="/forgot">Forgot Password?</a>
                          </div>
                    </section>
                    
                    
                </div>
            
            </div>
        
        
        </div>
    
    );
};

