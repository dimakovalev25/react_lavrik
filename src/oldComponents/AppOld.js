import './FirstPage.css';
import {useState} from "react";
import MinMaxLazyRef from "./components/MinMaxLazyRef";
import Modal from "./modal/Modal";
import ModalBootstrap from "./modalBootstrap/ModalBootstrap";
import CounterClass from "./components/CounterClass";
import CounterFunc from "./components/MaxMin";

function FirstPage() {

    const [show, setShow] = useState(false);

    let [products, setProducts] = useState(productsStub());
    let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0)

    let setCnt = (id, cnt) => {
        setProducts(products.map(pr => pr.id !== id ? pr : ({...pr, cnt})));
    }

    let delProduct = (id) => {
        setProducts(products.filter(item => item.id !== id));
    }

    return (
        <div
            className="App container-mt-1">
            {/*<CounterClass/>*/}
            <CounterFunc min={0} max={5}/>
            <CounterFunc min={0} max={3}/>
            <hr/>
            <button
                onClick={() => setShow(!show)}
            >Show modal</button>
                <Modal
                    onClose={() => setShow(false)}
                    show={show}>

                    <h1>use props.Children</h1>
                </Modal>

            <ModalBootstrap/>


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
                            <MinMaxLazyRef
                                current={pr.cnt}
                                max={pr.rest}
                                onChange={cnt => setCnt(pr.id, cnt)}
                            />
                        </td>
                        <td>
                            <button
                                className={'btn btn-warning'}
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
            </h1>
            {/*<ProductCard/>*/}
        </div>
    )
}


function productsStub() {
    return [
        {
            id: 100,
            title: 'Iphone X',
            price: 1200,
            rest: 120,
            cnt: 0,
        },
        {
            id: 101,
            title: 'Iphone 11',
            price: 1000,
            rest: 93,
            cnt: 0,
        },
        {
            id: 102,
            title: 'Iphone 12',
            price: 1200,
            rest: 53,
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
