import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Encabezado from '../Encabezado/Encabezado';
import UsuarioServicios from '../../servicios/UsuarioServicios';
import { ROLES } from '../../utils/Constantes';
import { encryptStorage } from '../../utils/Storage';
import './Login.css'

const Login = () => {

    let navigate = useNavigate();
    const [correo, setCorreo] = useState();
    const [password, setPassword] = useState();
    let usuario = [];
    let rol = "";
    let acceso = false;
    let tokenData = "";

    const validarUsuario = async e => {
        try{
            if(correo.trim() !== "" && password.trim() !== ""){
                UsuarioServicios.login(
                    {
                        "correo": correo,
                        "contrasenia": password
                    }
                ).then(response => {
                    acceso = true;
                    usuario = [response.data.usuario];
                    tokenData = response.data.tokenData;

                    console.log(usuario[0]);
                    console.log(usuario[0].rol.nombre);
                    encryptStorage.setItem('oC', usuario[0].correo);
                    encryptStorage.setItem('tokenData', tokenData);
                    rol = usuario[0].rol.nombre;
                    redirigir();
                }).catch(e => {
                    acceso = false;
                    console.log("catch -> e: " + e);
                })
            }else {
                acceso = false;
                console.log("catch -> e: " + e);
            }
        } catch (error) {
            console.log("error " + error);
        }
    }

    const redirigir = () => {
        try {
            console.log('rol: ' + rol);
            console.log('acceso: ' + acceso);
            encryptStorage.setItem('oR', rol);
            localStorage.clear();
            switch (rol) {
                case ROLES.ADMIN:
                    navigate('/admin');
                    break;
            }

        } catch (error) {
            console.log("error " + error);
        }
    }

    return (
        <>
            <Encabezado/>
            <div className='containerLogin'>
                <h2>Login Form</h2>

                <form action="/inicio" method="post">
                    <div className="imgcontainer">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required onChange={e => setCorreo(e.target.value)}/>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required onChange={e => setPassword(e.target.value)}/>

                        <button type="button" onClick={validarUsuario}>Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label> 
                    </div>

                    <div className="container">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Login;