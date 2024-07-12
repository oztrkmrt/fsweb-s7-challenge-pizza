
import './App.css'
import Success from './Pages/Success'
import Home from "./Pages/Home"
import { Route } from 'react-router-dom'
import OrderPizza from './Pages/OrderPizza'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'


function App() {

  const [ingredients, setIngredients] = useState([]);
  const [numberOfIngs, setNumberOfIngs] = useState(0)



  const handleChangeIng = (e) => {
    const { value } = e.target.value;
    let newIngredients;

    if (ingredients.includes(value)) {
      newIngredients = ingredients.filter(item => item !== value);
    } else {
      newIngredients = [...ingredients, value];
    }

    const newNumberOfIngs = newIngredients.length;

    if (newNumberOfIngs <= 10 && newNumberOfIngs >= 4) {
      setIngredients(newIngredients);
      setNumberOfIngs(newNumberOfIngs);
    } else if (newNumberOfIngs > 10) {
      alert('En fazla 10 malzeme seçebilirsiniz!');
    } else if (newNumberOfIngs < 4 && newNumberOfIngs > 0) {
      alert('En az 4 malzeme seçmelisiniz!');
    }
  };

  return (
    <>
      <OrderPizza handleChangeIng={handleChangeIng} ingredients={ingredients} numberOfIngs={numberOfIngs} />
    </>
  )
}

export default App

{/*
  <>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/Order">
      <OrderPizza/>
    </Route>
    <Route path="Success">
      <Success/>
    </Route>
    </>
  */}
