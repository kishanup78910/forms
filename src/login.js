import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './login.css'
import computeOffsets from './../node_modules/@popperjs/core/dist/esm/utils/computeOffsets';

function Login(){


    return(
        <div>
            <div className="row justify-content-center  ">
                <div className="col-md-4">
                <h1>React Authentication</h1>
                    <form action="">
                        <input type="text" placeholder='username' className='form-control'/>
                        <input type="text" placeholder='password' className='form-control' />
                        <input type="submit" className='btn btn-primary ' />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;