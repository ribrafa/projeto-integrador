import Menu from "./Menu"


function Cabecalho(){
    return(
        <div>
            <div className="container-cabecalho">
                
                <div className="cabecalho-logo">
                    <img src="logo1.png" alt="Logo"/>
                </div>
                <Menu/>
                <div className="cabecalho-login">
                    <img src="login.png" alt="Login" />
                </div>
            </div>
            
        </div>
    )
}

export default Cabecalho