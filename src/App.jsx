import './App.css'
import {useState} from "react";
import {useForm} from "react-hook-form";
import Button from "./components/Button.jsx";

function App() {

    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [ageValue, setAgeValue] = useState(0);
    const [postalCodeValue, setPostalCodeValue] = useState("");
    const [orderFreq, toggleOrderFreq] = useState("week");
    const [timeslot, toggleTimeslot] = useState("");
    const [remarkValue, setRemarkValue] = useState("");
    const [conditionsValue, toggleConditionsValue] = useState(false)


    function resetFruits (){
        setKiwis(0);
        setBananas(0);
        setStrawberries(0);
        setAppels(0);
    }
    const {register, handleSubmit, formState:{errors},} = useForm();

    function handleSubmit(e){
        e.preventDefault(e);
        console.log(`Voornaam:' ${firstNameValue},
                    Achternaam: ${lastNameValue},
                    Leeftijd: ${ageValue},
                    Postcode: ${postalCodeValue},.
                    Bezorgfrequentie: ${orderFreq},
                    Opmerkingen: ${remarkValue},
                    Voorkeur bezorgmoment: ${timeslot},
                    Algemene voorwaarden: ${conditionsValue}`);

        console.log(`Fruitmand bestelling - aardbeien: ${strawberries} bananen: ${bananas}, appels:${appels}, kiwi's: ${kiwis}`)
    }

    return (
    <>
        <h1><img className="fruitbasket logo" src="/src/assets/screenshot-logo.png" alt="logo company fruit basket"/></h1>
        <section className="fruitcounters">
                <article>
                    <h2> 🍓 Aardbeien </h2>
                    <button type= "button" disabled={strawberries === 0} onClick= {()=> setStrawberries(strawberries -1)}> - </button>
                    <div> {strawberries}  </div>
                    <button type= "button" onClick={() => setStrawberries(strawberries+1)}> +</button>
                </article>
                <article>
                    <h2>🍌 Bananen </h2>
                    <button type = "button" disabled={bananas === 0} onClick= {()=> setBananas(bananas -1)}> - </button>
                    <div> {bananas} </div>
                    <button type= "button" onClick={() => setBananas( bananas +1)}> +</button>
                </article>
                <article>
                    <h2> 🍏 Appels </h2>
                    <button type = "button" disabled={appels === 0} onClick= {()=> setAppels(appels -1)}> -</button>
                    <div> {appels}  </div>
                    <button type= "button" onClick={() => setAppels( appels +1)}> +</button>
                </article>
                <article>
                    <h2> 🥝 Kiwi's </h2>
                    <button type = "button" disabled={kiwis === 0} onClick= {()=> setKiwis(kiwis -1)}> -</button>
                    <div> {kiwis} </div>
                    <button type= "button" onClick={() => setKiwis( kiwis +1)}> +</button>
                </article>
                <Button
                    type="button"
                    clickhandler={resetFruits}
                >
                 Reset
                </Button>

        </section>

        <form onSubmit={handleSubmit}>
                <section className="deliveryInfo">
                    <label htmlFor="firstName"> Voornaam </label>
                    <input type="text"
                           id="firstName"
                           name="firstName"
                           value={firstNameValue}
                           onChange={(e) => setFirstNameValue(e.target.value)}
                    />
                </section>

                <section className="deliveryInfo">
                    <label htmlFor="lastName"> Achternaam </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastNameValue}
                        onChange={(e) => setLastNameValue(e.target.value)}
                    />
                </section>

                <section className="deliveryInfo">
                    <label htmlFor="age"> Leeftijd </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={ageValue}
                        onChange={(e) => setAgeValue(parseInt(e.target.value))}
                    />
                </section>

                <section className="deliveryInfo">
                    <label htmlFor="postalCode"> Postcode </label>
                    <input
                        type= "text"
                        id="postalCode"
                        name="postalCode"
                        value={postalCodeValue}
                        onChange={(e)=> setPostalCodeValue(e.target.value)}
                    />
                </section>

                <section className="deliveryInfo deliveryFreq">
                    <label htmlFor="orderFreq"> Bezorgfrequentie </label>
                    <select
                        id="orderFreq"
                        name="orderFreq"
                        value={orderFreq}
                        onChange={(e) => toggleOrderFreq(e.target.value)}
                        >
                        <option value= "weekly"> iedere week </option>
                        <option value= "biweekly"> om de week </option>
                        <option value= "monthly"> iedere maand </option>
                    </select>
                </section>

                <section className="deliveryInfo">
                    <input
                        type="radio"
                        id="day"
                        name="timeslot"
                        value="day"
                        checked={timeslot==='day'}
                        onChange={(e)=> toggleTimeslot(e.target.value)}
                    />
                    <label htmlFor="day"> overdag </label>

                    <input
                        type="radio"
                        id="evening"
                        name="timeslot"
                        value="evening"
                        checked={timeslot==='evening'}
                        onChange={(e)=> toggleTimeslot(e.target.value)}
                    />
                    <label htmlFor="evening"> 's avonds </label>
                </section>

                <section className="deliveryInfo-container">
                    <label htmlFor="remark"> Opmerkingen </label>
                    <textarea
                        id="remark"
                        name="remarks"
                        value={remarkValue}
                        onChange={(e)=> setRemarkValue(e.target.value)}
                        rows="5"
                        cols="33">
                    </textarea>
                </section>

                <section className="deliveryInfo">
                    <input
                        type="checkbox"
                        id="conditions"
                        name="conditions"
                        checked={conditionsValue}
                        onChange={(e) => toggleConditionsValue(e.target.checked)}
                    />
                    <label htmlFor="conditions"> Ik ga akkoord met de voorwaarden</label>
                </section>

                <button className="submit"> Verzend </button>
        </form>
    </>
  )
}

export default App
