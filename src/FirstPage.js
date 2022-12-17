import './App.css';
import {useState} from "react";
import MinMaxLazy from "./components/MinMaxLazy";
import BModal from 'react-bootstrap/Modal'

function FirstPage() {

    let [products, setProducts] = useState(productsStub());
    let [showDetails, setShowDetails] = useState(false);

    let total = products.reduce((sum, pr) => sum + (pr.price * pr.cnt), 0)

    let setCnt = (id, cnt) => {
        setProducts(
            products.map(pr => pr.id !== id ? pr : ({...pr, cnt}))
        )
    }

    const deleteProduct = (id) => {
        setProducts(
            products.filter(pr => pr.id !== id)
        )
    }

    return (
        <div
            className="App container-mt-1">
            <h3 onClick={() => setShowDetails(true)}>Products list:</h3>
            <BModal
                onHide={() => setShowDetails(false)}
                show={showDetails}>
                <p>Modal</p>
                <button onClick={() => setShowDetails(false)}>Close</button>

            </BModal>
            <hr/>
            <table>
                <tbody>
                <tr>
                    <th>Number:</th>
                    <th>Title:</th>
                    <th>Price USD:</th>
                    <th>Cnt:</th>
                    <th></th>
                    <th>Total USD:</th>
                    <th></th>
                </tr>

                {products.map((pr, index) => (
                    <tr key={pr.id}>
                        <td>{index + 1}</td>
                        <td>{pr.title}</td>
                        <td>{pr.price}</td>
                        <td>
                            <MinMaxLazy
                                current={pr.cnt}
                                onChange={cnt => setCnt(pr.id, cnt)}
                                max={pr.rest}/>
                        </td>
                        <td></td>
                        <td>{pr.cnt * pr.price}</td>
                        <td>
                            <button
                                className={'btn btn-danger'}
                                onClick={() => deleteProduct(pr.id)}
                            >Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <hr/>
            <h4
                onClick={() => setShowDetails(true)}
            >Total: {total} $
            </h4>
            <br/>
            <>
                {/*<ModalBootstrap total={total}>*/}
                {/*    <table>*/}
                {/*        <tbody>*/}
                {/*        <tr>*/}
                {/*            <th>Number:</th>*/}
                {/*            <th>Title:</th>*/}
                {/*            <th>Price USD:</th>*/}
                {/*            <th>Cnt:</th>*/}
                {/*            <th></th>*/}
                {/*            <th>Total USD:</th>*/}
                {/*            <th></th>*/}
                {/*        </tr>*/}

                {/*        {products.map((pr, index) => (*/}
                {/*            <tr key={pr.id}>*/}
                {/*                <td>{index + 1}</td>*/}
                {/*                <td>{pr.title}</td>*/}
                {/*                <td>{pr.price}</td>*/}
                {/*                <td>*/}
                {/*                    <MinMaxLazy*/}
                {/*                        current={pr.cnt}*/}
                {/*                        onChange={cnt => setCnt(pr.id, cnt)}*/}
                {/*                        max={pr.rest}/>*/}
                {/*                </td>*/}
                {/*                <td></td>*/}
                {/*                <td>{pr.cnt * pr.price}</td>*/}
                {/*                <td>*/}
                {/*                    <button*/}
                {/*                        className={'btn btn-danger'}*/}
                {/*                        onClick={() => deleteProduct(pr.id)}*/}
                {/*                    >Delete*/}
                {/*                    </button>*/}
                {/*                </td>*/}
                {/*            </tr>*/}
                {/*        ))}*/}
                {/*        </tbody>*/}
                {/*    </table>*/}


                {/*</ModalBootstrap>*/}

                {/*<Modal*/}
                {/*    showed={showDetails}*/}
                {/*    title={`${products.length} positions in list`}*/}
                {/*    onClose={() => setShowDetails(false)}*/}
                {/*>*/}
                {/*    <hr/>*/}
                {/*    <h4*/}
                {/*        onClick={() => setShowDetails(true)}*/}
                {/*    >Total: {total} $*/}
                {/*    </h4>*/}
                {/*    <br/>*/}
                {/*</Modal>*/}
            </>


            <hr/>
        </div>
    )
}

function productsStub() {
    return [
        {
            id: 100,
            title: 'Iphone X',
            price: 1200,
            rest: 300,
            cnt: 10,
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

export default FirstPage;


// function fn(i, ev) {
//
// }
// let elem = document.querySelector('some...');
// elem.forEach((el,i)=> {
//     el.addEventListener('click', e => fn(i, e));
// });
//