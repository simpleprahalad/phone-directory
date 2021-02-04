import { Component } from "react";
import AddSubcriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name : "Prahalad",
                    phone: "123456"
                },
                {
                    id: 2,
                    name: "Rekha",
                    phone: "11111"
                }
            ]
        }
    }

    addSubsciberHandler = (newSubsciber) => {
        let subscibersList = this.state.subscribersList;
        if(subscibersList.length > 0) {
            newSubsciber.id = subscibersList[subscibersList.length - 1].id + 1;
        } else {
            newSubsciber.id = 1;
        }
        subscibersList.push(newSubsciber);
        this.setState({subscibersList: subscibersList})
        console.log(this.state.subscribersList)
    }

    render() {
        return (
            // <AddSubcriber addSubscibeHandler={this.addSubsciberHandler}/>
            <ShowSubscribers subscibersList={this.state.subscribersList} />
        )
    }
}

export default PhoneDirectory;