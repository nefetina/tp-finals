import styles from "../components/Register.module.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';


export default function log() {
    const [Email, setEmail] = useState('')
    const [NewPass, setNewPass] = useState('')
    const [CPass, setCPass] = useState('')
    const [flag, setFlag] = useState(false)
    
    const [StatuseErr, setstaterr] = useState('')
    
    const forgotpass = () =>{
    
        Axios.post('http://localhost:3000/forgotpass',{
            email: Email, 
            newpassword: NewPass,
            newpassword1: CPass
        }).then((response) => {
            if (response.data.message == 'Successfully Reset Password'){
              window.location.href='/login'
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
                            <input type="text" className={styles.input1} onChange={(e)=>{setEmail(e.target.value);}} id="emailfp" placeholder='Email' required />
                          </div>

                          <div>
                            <input type="password" className={styles.input1} onChange={(e)=>{setNewPass(e.target.value);}} id="Passwordfp" placeholder='New Password' required />
                          </div>
                          <div>
                            <input type="password" className={styles.input1} onChange={(e)=>{setCPass(e.target.value);}} id="Passwordfp" placeholder='Confirm Password' required />
                          </div>
                        
                          <br/>
                          <div>
                          <button className={styles.btn1} onClick={forgotpass} type="submit">Submit</button>
                          </div>
                          <div>
                            <a href="/login">Sign In</a>
                          </div>
                          <div>
                            <a href="/register">Sign Up</a>
                          </div>
                    </section>
                    
                    
                </div>
            
            </div>
        
        
        </div>
    
    );
};

