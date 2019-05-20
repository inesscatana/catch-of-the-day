import React, {Component} from "react";
import {getFunName} from "../helpers";


class StorePicker extends Component {
    goToStore = event => {
        event.preventDefault();
        console.log(this);
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text"
                       required
                       placeholder="Store Name"
                       defaultValue={getFunName()}
                />
                <button type="submit">Visit Store →</button>
            </form>
        );
    }
}

export default StorePicker;