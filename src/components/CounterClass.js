import {Component} from "react";

export default class CounterClass extends Component {

    state = {
        current: 1
    }

    inc = () => {
        this.setState({
            current: this.state.current + 1
        })
    }

    dec = () => {
        this.setState({
            current: this.state.current - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Counter {this.state.current}</h2>
                <button
                    className={'btn btn-warning'}
                    onClick={this.inc}>+1
                </button>
                <button
                    className={'btn btn-warning'}
                    onClick={this.dec}>-1
                </button>
            </div>
        )
    }


}