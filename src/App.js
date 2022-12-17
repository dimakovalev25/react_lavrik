import './App.css';
import FirstPage from "./FirstPage";
import Order from "./Order";
import {useState} from "react";

function App() {

    let [page, setPage] = useState('FirstPage');

    let moveToOrder=()=> setPage('Order');
    let moveToFirstPage=()=> setPage('FirstPage');


    return (
        <div className="App container-mt-1">
            {page === 'FirstPage' && <FirstPage/>}
            {page === 'Order' && <Order/>}
        </div>
    )
}

export default App;
