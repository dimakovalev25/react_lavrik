import './App.css';
import Counter from "./components/Counter";
import {useState} from "react";

function App() {

    let [maxTest, setMaxTest] = useState(7);
    console.log(maxTest)
    let setMaxTest5 = () => setMaxTest(5);

    return (
        <div className="App">

            <Counter max={6} min={1}/>
            <hr/>


            <Counter max={maxTest} min={0} key={`1${maxTest}`}/>
            <button
                type={"button"}
                onClick={setMaxTest5}
            >set 5
            </button>

        </div>
    )
}


function productStub() {
    return [
        {
            id: 100,
            title: 'Iphone X',
            price: 1200
        },
        {
            id: 101,
            title: 'Iphone 11',
            price: 1000
        },
        {
            id: 102,
            title: 'Iphone 12',
            price: 1200
        },
        {
            id: 103,
            title: 'Iphone 13',
            price: 1270
        },
        {
            id: 104,
            title: 'Iphone 13 MAX',
            price: 1500
        },
    ]

}

export default App;
