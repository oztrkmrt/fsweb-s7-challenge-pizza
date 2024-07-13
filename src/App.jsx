
import './App.css'
import Success from './Pages/Success'
import Home from "./Pages/Home"
import { Route, Switch } from 'react-router-dom'
import OrderPizza from './Pages/OrderPizza'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/OrderPizza" component={OrderPizza} />
        <Route path="/Success" component={Success} />
      </Switch>
    </>
  )
}

export default App

