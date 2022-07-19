import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './login.css'
import computeOffsets from './../node_modules/@popperjs/core/dist/esm/utils/computeOffsets';

import swal from './../node_modules/sweetalert/';

function Login(){
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    function validate(event){
        event.preventDefault();
        if(username == 'javascript' && password=='react')
        {
            swal('login successfull','Congratulation your login is success','success')
        }
        else{
            swal("Failed login",'Please check youur credential','error')
        }
    }


    return(
        <div>
            <div className="row justify-content-center   ">
                <div className="col-md-4">
                <h1>React Authentication</h1>
                    <form onSubmit={validate} action="">
                        <input type="text" placeholder='username' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                        <input type="text" placeholder='password' className='form-control' value={password} onChange={(e)=>setpassword(e.target.value)} />
                        <input type="submit" className='btn btn-primary ' />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;