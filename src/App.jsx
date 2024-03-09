import './App.css'
import {useState} from "react";

function App() {

    const [strawberries, setStrawberries] = useState(0)

    const [bananas, setBananas] = useState(0)
    const increaseBananas = () => {setBananas(prevState => prevState + 1);}
    const decreaseBananas = () => {setBananas(prevState => (prevState > 0 ? prevState -1: 0));}


    const [appels, setAppels] = useState(0)
    const increaseAppels = () => {setAppels(prevState => prevState + 1);}
    const decreaseAppels = () => {setAppels(prevState => (prevState > 0 ? prevState -1: 0));}

    const [kiwis, setKiwis] = useState(0)
    const increaseKiwis = () => {setKiwis(prevState => prevState + 1);}
    const decreaseKiwis = () => {setKiwis(prevState => (prevState > 0 ? prevState -1: 0));}


    function resetFruits (){
        setKiwis(0);
        setBananas(0);
        setStrawberries(0);
        setAppels(0);
    }

    const [formState, setFormState] = useState({
        firstNameValue: "",
        lastNameValue: "",
        ageValue: 0,
        postalCodeValue: "",
        orderFreq:"",
        remarkValue: "",
        timeslot:"",
        conditionsValue: "",
    });

    const [conditionsValue,toggleConditionsValue]=useState("")

    function handleChange(e) {
        const changedFieldName= e.target.name;

        const newValue= e.target.type === "checkbox" ? e.target.checked: e.target.value;

        setFormState({
            ...formState,
        [changedFieldName]: newValue,
        })
    }




  return (
    <>

        <h1><img className="fruitbasket logo" src="/src/assets/screenshot-logo.png" alt="logo company fruit basket"/></h1>
        <form >
                <fieldset className="fruitbox">
                    <p> 🍓 Aardbeien </p>
                    <button type= "button" disabled={strawberries === 0} onClick= {()=> setStrawberries(strawberries -1)}> -</button>
                    <div> {strawberries}  </div>
                    <button type= "button" onClick={() => setStrawberries(strawberries+1)}> +</button>
                </fieldset>

                <fieldset className="fruitbox">
                    <p>🍌 Bananen </p>
                    <button onClick={decreaseBananas}> -</button>
                    <div> {bananas} </div>
                    <button onClick={increaseBananas}> +</button>
                </fieldset>

                <fieldset className="fruitbox">
                    <p> 🍏 Appels </p>
                    <button onClick={decreaseAppels}> -</button>
                    <div> {appels}  </div>
                    <button onClick={increaseAppels}> +</button>
                </fieldset>

                <fieldset className="fruitbox">
                    <p> 🥝 Kiwi's </p>
                    <button onClick={decreaseKiwis}> -</button>
                    <div> {kiwis} </div>
                    <button onClick={increaseKiwis}> +</button>
                </fieldset>

                <fieldset className="fruitbox">
                    <button className="resetButton" onClick={resetFruits}> Reset</button>
                </fieldset>

                <fieldset className="deliveryInfo">
                    <label htmlFor="firstName"> Voornaam </label>
                    <input type="text"
                           id="firstName"
                           name="firstName"
                           value={formState.firstNameValue}
                           onChange={handleChange}
                    />
                </fieldset>

                <fieldset className="deliveryInfo">
                    <label htmlFor="lastName"> Achternaam </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formState.lastNameValue}
                        onChange={handleChange}
                    />
                </fieldset>

                <fieldset className="deliveryInfo">
                    <label htmlFor="age"> Leeftijd </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formState.ageValue}
                        onChange={handleChange}
                    />
                </fieldset>

                <fieldset className="deliveryInfo">
                    <label htmlFor="postalCode"> Postcode </label>
                    <input
                        type= "text"
                        id="postalCode"
                        name="postalCode"
                        value={formState.postalCodeValue}
                        onChange={handleChange}
                    />
                </fieldset>

                <fieldset className="deliveryInfo deliveryFreq">
                    <label htmlFor="orderFreq"> Bezorgfrequentie </label>
                    <select
                        id="orderFreq"
                        name="orderFreq">
                        value={formState.orderFreq}
                        onChange={handleChange}
                        <option value= "weekly"> iedere week </option>
                        <option value= "biweekly"> om de week </option>
                        <option value= "monthly"> iedere maand </option>
                    </select>
                </fieldset>

                <fieldset className="deliveryInfo">
                    <input
                        type="radio"
                        id="day"
                        name="timeslot"
                        value="day"
                        checked={formState.timeslot==="day"}
                        onChange={handleChange}
                    />
                    <label htmlFor="day"> overdag </label>

                    <input
                        type="radio"
                        id="evening"
                        name="timeslot"
                        value="evening"
                        checked={formState.timeslot==="night"}
                        onChange={handleChange}
                    />
                    <label htmlFor="evening"> 's avonds </label>
                </fieldset>

                <fieldset className="deliveryInfo-container">
                    <label htmlFor="remark"> Opmerkingen </label>
                    <textarea
                        id="remarks"
                        name="remarks"
                        value={formState.remarkValue}
                        onChange={handleChange}
                        rows="5"
                        cols="33">
                    </textarea>
                </fieldset>

                <fieldset className="deliveryInfo">
                    <input
                        type="checkbox"
                        id="form-conditions"
                        name="conditions"
                        checked={conditionsValue}
                        onChange={() => toggleConditionsValue(!conditionsValue)}
                    />
                    <label htmlFor="conditions"> Ik ga akkoord met de voorwaarden</label>
                </fieldset>

                <button className="submit"> Verzend </button>
        </form>
    </>
  )
}

export default App
