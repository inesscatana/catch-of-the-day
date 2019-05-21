import React, {Component} from "react";

class AddFishForm extends Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event => {
        // 1. stop the form from submitting
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        // refresh the form
        event.currentTarget.reset();
    };

    render(){
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="name" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="price" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="description" ref={this.descRef}placeholder="Description"/>
                <input name="image" ref={this.imageRef} type="image" placeholder="Image"/>
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;