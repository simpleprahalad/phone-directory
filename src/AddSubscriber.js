import React, {Component} from 'react'
import Header from './Header'
import './AddSubscriber.css'

class AddSubcriber extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscibeHandler(this.state)
        this.setState({id: 0, name: '', phone: ''})
    }

    render() {
        const {name, phone} = this.state;
        return (
            <div className="component-container">
                <Header heading="Add Subsciber" />
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-contol">Name: </label> <br/>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}/> <br/> <br/>
                        <label htmlFor="phone" className="label-contol">Phone: </label> <br/>
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}/> <br/> <br/>
                        <div className="subscriber-info-container">
                            <span className="subsciber-to-add-heading">Subsciber to be added: </span> <br/>
                            <span className="subscriber-info">Name: {name} </span> <br />
                            <span className="subscriber-info">Phone: {phone} </span>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubcriber;