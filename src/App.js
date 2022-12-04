import './App.css';
import {useState} from "react";
import MinMax from "./components/MinMax";


function App() {

    let [products, setProducts] = useState(productsStub());
    let [total, setTotal] = useState(0);
    console.log(total)

    let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0)

    let finalSum = () => {
        setTotal(products.map(item => item.cnt * item.price).reduce(
            (a, b) => a + b, 0))
    }

    let setCnt = (id, cnt) => {
        setProducts(products.map(pr => pr.id != id ? pr : ({...pr, cnt})));
    }

    let delProduct = (id) => {
        setProducts(products.filter(item => item.id !== id));
    }

    return (
        <div className="App">
            <h1>Products list:</h1>
            <table>
                <tbody>
                <tr>
                    <th>Number:</th>
                    <th>Title:</th>
                    <th>Price USD:</th>
                    <th>Counter:</th>
                    <th></th>
                    <th></th>
                    <th>Total USD:</th>
                </tr>

                {products.map((pr, i) => (
                    <tr key={pr.id}>
                        <td>{i + 1}</td>
                        <td>{pr.title}</td>
                        <td>{pr.price} $</td>
                        <td>
                            <MinMax
                                current={pr.cnt}
                                max={pr.rest}
                                onChange={cnt => setCnt(pr.id, cnt)}
                            />
                        </td>
                        <td>
                            <button
                                onClick={cnt => delProduct(pr.id)}
                            >del
                            </button>
                        </td>
                        <td>
                        </td>
                        <td>
                            <p>{pr.price * pr.cnt} $</p>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>

            <h1>Shopping cart: {total}<br/>
                <button
                    onClick={finalSum}
                >Final amount
                </button>
            </h1>

        </div>
    )
}


function productsStub() {
    return [
        {
            id: 100,
            title: 'Iphone X',
            price: 1200,
            rest: 20,
            cnt: 0,
        },
        {
            id: 101,
            title: 'Iphone 11',
            price: 1000,
            rest: 3,
            cnt: 0,
        },
        {
            id: 102,
            title: 'Iphone 12',
            price: 1200,
            rest: 13,
            cnt: 0,
        },
        {
            id: 103,
            title: 'Iphone 13',
            price: 1270,
            rest: 23,
            cnt: 0,
        },
        {
            id: 104,
            title: 'Iphone 13 MAX',
            price: 1500,
            rest: 33,
            cnt: 0,
        },
    ]


}

export default App;
