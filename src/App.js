import React, { Component } from "react";
import MyGallery1 from "./components/GalleryList/ImageGallery1";
import MyGallery2 from "./components/GalleryList/ImageGallery2";
import MyGallery3 from "./components/GalleryList/ImageGallery3";
import Gallery from "./components/Gallery";
import Option from "./components/Option";
import Tables from "./components/Tables";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Option} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/g1" component={MyGallery1} />
            <Route exact path="/g2" component={MyGallery2} />
            <Route exact path="/g3" component={MyGallery3} />
            <Route exact path="/table" component={Tables} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
