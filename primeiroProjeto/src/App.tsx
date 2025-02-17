import "./estilo/estilo.css"
import { Route, Routes } from 'react-router-dom'
import NotFound from "./pages/NotFound"
import Eventos from "./pages/Eventos"
import Feed from "./pages/Feed"
import Login from "./pages/Login"
import Home from "./pages/Home"


function App() {
  return (
    <div className="app-pagina">
      <Routes>
      <Route path='*' element= {<NotFound />} />
      <Route path='/' element= {<Home />} />
      <Route path='/feed' element= {<Feed />} />
      <Route path='/login' element= {<Login />} />
      <Route path='/eventos' element= {<Eventos />} />
    </Routes>

    </div>
  )
}

export default App
