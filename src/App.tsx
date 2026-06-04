import {BrowserRouter, Link} from "react-router-dom";
import {AppRoutes} from "./routes/AppRoutes.tsx";

function App () {
  return (
      <BrowserRouter>
        <nav>
          <Link to='/posts'>Лента новостей</Link>
          <Link to='/login'>Авторизация</Link>
          <Link to='/profile'>Личный кабинет</Link>
        </nav>
        <AppRoutes />
      </BrowserRouter>
  )
}
export default App