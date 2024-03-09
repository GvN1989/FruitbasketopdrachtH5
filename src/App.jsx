import './App.css'
import {useState} from "react";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import InputField from "./components/InputField.jsx";

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

    function handleSubmit(e){
        e.preventDefault();
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
                    <Counter
                        fruitCount={strawberries}
                        setFruitCount={setStrawberries}
                    />
                </article>
                <article>
                    <h2>🍌 Bananen </h2>
                    <Counter
                        fruitCount={bananas}
                        setFruitCount={setBananas}
                    />
                </article>
                <article>
                    <h2> 🍏 Appels </h2>
                    <Counter
                        fruitCount={appels}
                        setFruitCount={setAppels}
                    />
                </article>
                <article>
                    <h2> 🥝 Kiwi's </h2>
                    <Counter
                        fruitCount={kiwis}
                        setFruitCount={setKiwis} />
                </article>
                <Button
                    type="button"
                    clickHandler={resetFruits}
                >
                 Reset
                </Button>
        </section>
        <form onSubmit={handleSubmit}>
                <section className="deliveryInfo">
                    <InputField
                        label="Voornaam "
                        name = "firstName"
                        type="text"
                        value={firstNameValue}
                        changeHandler={setFirstNameValue}
                        />
                </section>

                <section className="deliveryInfo">
                    <InputField
                        label="Achternaam"
                        name="lastName"
                        type="text"
                        value={lastNameValue}
                        changeHandler={setLastNameValue}
                    />
                </section>

                <section className="deliveryInfo">
                    <InputField
                        label="Leeftijd"
                        name="age"
                        type="number"
                        value={ageValue}
                        changeHandler={setAgeValue}
                    />
                </section>

                <section className="deliveryInfo">
                    <InputField
                        label="Postcode"
                        name="postalCode"
                        type="text"
                        value={postalCodeValue}
                        changeHandler={setPostalCodeValue}
                        />
                </section>

                <section className="deliveryInfo deliveryFreq">
                    <label htmlFor="orderFreq"> Bezorgfrequentie </label>
                    <select>
                        id="orderFreq"
                        name="orderFreq"
                        value={orderFreq}
                        onChange={(e) => toggleOrderFreq(e.target.value)}
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

            <Button
            type="submit"
            >
                Verzend
            </Button>

        </form>
    </>
  )
}

export default App
