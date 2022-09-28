import { React, Component } from "react";
import { ContextoDeAutenticacion } from "./ContextoDeAutenticacion";

class Login extends Component {

    static contextType = ContextoDeAutenticacion;

    componentDidMount() {
        const valoresDelContexto = this.context;
        console.log(valoresDelContexto); // {token: null, onLogin: ƒ, onLogout: ƒ}
    }

    render() {
        const valoresDelContexto = this.context;
        return (
            <main style={{ paddings: '20px' }}>
                <h4>Página de Login</h4>
                <button type="button" onClick={valoresDelContexto.onLogin}>
                    Autenticar
                </button>
            </main>
        );
    }
}

export default Login;
    


/*const Login = ({ onLogin }) => {
    return(
        <main style={{paddings: '20px'}}>
            <h4>Página de Login</h4>
            <button type="button" onClick={onLogin}>
                Autenticar
            </button>
        </main>
    );
};
export default Login;*/
    