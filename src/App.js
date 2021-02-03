
import React, { Component } from 'react';
import Header from "./Header";
import './App.css';

class App extends Component {
  deleteHandler() {
    alert("Delete clicked !!!");
  }

  clickHandler(message) {
    alert(message)
  }

  constructor() {
    super();
    this.state = {
      subscriberListoShow: []
    }
  }

  render() {
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Prahalad",
    //     phone: "12345"
    //   },
    //   {
    //     id : 2,
    //     name: "Rekha",
    //     phone: "22222"
    //   },
    // ];
  
    return (
      <div>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

        {
          this.state.subscriberListoShow.map(sub => {
            return <div key={sub.id} className="grid-container">
            <span className="grid-item">{sub.name}</span>
            <span className="grid-item">{sub.phone}</span>
            <span className="grid-item action-btn-container">
               <button className="custom-btn delete-btn" onClick={this.deleteHandler}>Delete</button>
               {/* <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this, "Delete handler clicked !!!")}>Delete</button> */}
               {/* <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this)}>Delete</button> */}
            </span>
          </div>
          })
        }

        </div>
      </div>
    );
  }
}

export default App;
