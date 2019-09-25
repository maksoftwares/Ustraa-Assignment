import React, { Component } from "react";
import CategoryTabs from "./components/CategoryTabs";
import Heading from "./components/Heading";
import Product from "./components/Product";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      categoryId: null 
    };
  }

  setCategoryId = categoryId => {
    this.setState({categoryId: categoryId});
  };

  render() {
    return (
      <div className="App">
        <Heading />
        <CategoryTabs setCategoryId={this.setCategoryId} />
        <Product categoryId = {this.state.categoryId}/>
      </div>
    );
  }
}

export default App;
