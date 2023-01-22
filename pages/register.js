import styles from "../components/Register.module.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';

export default function reg() {
    const [rUser, setUser] = useState('')
    const [rEmail, setEmail] = useState('')
    const [rPass, setPass] = useState('')
    const [rCpass, setCpass] = useState('')
    const [flag, setFlag] = useState(false)
    const [regStatuseErr, setRegstaterr] = useState('')
    
    const register = () =>{
    
        Axios.post('http://localhost:3000/app',{
            username: rUser, 
            email: rEmail, 
            password: rPass,
            cpass: rCpass
        }).then((response)=>{
            console.log(response)
            if (response.data.message == "Successfully Registered"){
            window.location.href='./login'
            }else{
            setRegstaterr(response.data.message)
            setFlag(true);
            }
            
        })
    
    
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

                        {flag &&(<Alert color="primary" variant="danger">{regStatuseErr}</Alert>)}
                        
                        <div className="form-outline form-white mb-4">
                            <input type="text" className={styles.input1} onChange={(e)=>{setUser(e.target.value);}} id="regUsername" placeholder='Username' required />
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input type="text" className={styles.input1} onChange={(e)=>{setEmail(e.target.value);}} id="regEmail" placeholder='Email' required />
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input type="password" className={styles.input1} onChange={(e)=>{setPass(e.target.value);}} id="regPassword" placeholder='Password' required />
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input type="password" className={styles.input1} onChange={(e)=>{setCpass(e.target.value);}} id="regPasswordre" placeholder='Confirm Password' required />
                          </div>
                          <br/>
                          <button className={styles.btn1} onClick={register} type="submit">Signup</button>
                          <div>
                            <a href="/login">Already have an Account?</a>
                          </div>
                    </section>
                    
                    
                </div>
            
            </div>
        
        
        </div>
    
    );
};


