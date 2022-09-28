import { React, Component } from "react";
import { ContextoDeAutenticacion } from "./ContextoDeAutenticacion";

class Dashboard extends Component {
    static contextType = ContextoDeAutenticacion;
    componentDidMount() {
        const valoresDelContexto = this.context;
        console.log(valoresDelContexto); // {token: null, onLogin: ƒ, onLogout: ƒ}
    }

    render() {
        const valoresDelContexto = this.context;
        return (
            <>
                <main style={{ paddings: '20px' }}>
                    <h4>Página Dashboard con token {valoresDelContexto.token} </h4>
                </main>
            </>
        );
    }
}
export default Dashboard;
        

/*const Dashboard = () => {
    return (
        <main style={{ paddings: '20px' }}>
            <h4>Página Dashboard </h4>
        </main>
    );
};
export default Dashboard;*/
