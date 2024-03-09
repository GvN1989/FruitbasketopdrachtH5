import './App.css'
import {useState} from "react";

function App() {

    const [strawberries, setStrawberries] = useState(0)
    const increaseStrawberries = () => {setStrawberries(prevState => prevState + 1);}
    const decreaseStrawberries = () => {setStrawberries(prevState => (prevState > 0 ? prevState -1: 0));}

    const [bananas, setBananas] = useState(0)
    const increaseBananas = () => {setBananas(prevState => prevState + 1);}
    const decreaseBananas = () => {setBananas(prevState => (prevState > 0 ? prevState -1: 0));}


    const [appels, setAppels] = useState(0)
    const increaseAppels = () => {setAppels(prevState => prevState + 1);}
    const decreaseAppels = () => {setAppels(prevState => (prevState > 0 ? prevState -1: 0));}

    const [kiwis, setKiwis] = useState(0)
    const increaseKiwis = () => {setKiwis(prevState => prevState + 1);}
    const decreaseKiwis = () => {setKiwis(prevState => (prevState > 0 ? prevState -1: 0));}


    const reset = () => {
        setKiwis(0),setBananas(0),setStrawberries(0),setAppels(0)
    }

  return (
    <>

        <h1> <img className="fruitbasked logo" src="/src/assets/screenshot-logo.png"/> </h1>
        <fieldset className="fruitbox">
            <p> 🍓 Aardbeien </p>
            <button onClick={decreaseStrawberries}> - </button>
            <div> {strawberries}  </div>
            <button onClick={increaseStrawberries}> + </button>
        </fieldset>
        <fieldset className="fruitbox">
            <p>🍌 Bananen </p>
            <button onClick={decreaseBananas}> - </button>
            <div> {bananas} </div>
            <button onClick={increaseBananas}> + </button>
        </fieldset>
        <fieldset className="fruitbox">
            <p> 🍏 Appels </p>
            <button onClick={decreaseAppels}> - </button>
            <div> {appels}  </div>
            <button onClick={increaseAppels}> + </button>
        </fieldset>
        <fieldset className="fruitbox">
            <p> 🥝 Kiwi's </p>
            <button onClick={decreaseKiwis}> - </button>
            <div> {kiwis} </div>
            <button onClick={increaseKiwis}> + </button>
        </fieldset>
        <fieldset className="fruitbox">
            <button className="resetButton" onClick={reset}> Reset </button>
        </fieldset>
    </>
  )
}

export default App
