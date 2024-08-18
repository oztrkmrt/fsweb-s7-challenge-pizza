
import './App.css'
import Success from './Pages/Success'
import Home from "./Pages/Home"
import { Route, Switch } from 'react-router-dom'
import OrderPizza from './Pages/OrderPizza'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'


function App() {

  const [ingredients, setIngredients] = useState([]);
  const [numberOfIngs, setNumberOfIngs] = useState(0);
  const [numberOfOrder, setNumberOfOrder] = useState(1)
  const [chooseBoyut, setChooseBoyut] = useState("")
  const [chooseDough, setChooseDough] = useState("")
  const [note, setNote] = useState("")


  const buttonDisabled = (numberOfIngs < 4 || !chooseBoyut || !chooseDough)


  const handleChangeIng = (e) => {

    let newIngredients;

    if (ingredients.includes(e.target.value)) {
      newIngredients = ingredients.filter(item => item !== e.target.value);
    } else if (ingredients.length < 10) {
      newIngredients = [...ingredients, e.target.value];
    } else {
      return;
    }

    const newNumberOfIngs = newIngredients.length;
    setIngredients(newIngredients);
    setNumberOfIngs(newNumberOfIngs);

  };

  const handleChangeIncrease = () => {
    setNumberOfOrder(numberOfOrder + 1)
  }

  const handleChangeDecrease = () => {
    if (numberOfOrder > 1) {
      setNumberOfOrder(numberOfOrder - 1)
    }

  }

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/OrderPizza"><OrderPizza setChooseDough={setChooseDough} setChooseBoyut={setChooseBoyut}
          handleChangeIng={handleChangeIng} ingredients={ingredients} numberOfIngs={numberOfIngs} handleChangeIncrease={handleChangeIncrease}
          handleChangeDecrease={handleChangeDecrease} numberOfOrder={numberOfOrder} buttonDisabled={buttonDisabled} chooseBoyut={chooseBoyut} chooseDough={chooseDough}
          note={note} handleNoteChange={handleNoteChange} /></Route>
        <Route path="/Success"><Success note={note} numberOfOrder={numberOfOrder} numberOfIngs={numberOfIngs} chooseDough={chooseDough} chooseBoyut={chooseBoyut} ingredients={ingredients} /></Route>
      </Switch>
    </>
  )
}

export default App

