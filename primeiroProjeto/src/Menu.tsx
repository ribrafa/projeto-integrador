import { Link } from "react-router-dom"

function Menu() {
    return (
        <div>
            <div className="container-menu">
                <div className="menu-div1">
                    <Link to={'/login'} className="link">LOGIN</Link>
                </div>

                <div className="menu-div1">
                    <Link to={'/eventos'} className="link">EVENTOS</Link>
                </div>
                <div className="menu-div1">
                    <Link to={'/feed'} className="link">FEED</Link>
                </div>   
            </div>
        </div>
    )
}

export default Menu