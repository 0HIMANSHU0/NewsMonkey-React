import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 6;
  apiKey = 'a2d5d02818c642889e1c4a607e00e159';
  state = {
    progress: 0,
  }
  setProgress = (progress)=> {
    this.setState({progress: progress})
  }
  render() { 
    return (
      <>
      {/* <BrowserRouter basename="/NewsMonkey-React"> */}
      <Router>
      <div>
      <Navbar />
      <LoadingBar
        heihgt={3}
        color='#f11946'
        progress={this.state.progress}
      />
      </div>
      <Routes>
          <Route exact path="/NewsMonkey-React" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general'/>}></Route>
          <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country='in' category='business'/>}></Route>
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country='in' category='entertainment'/>}></Route>
          <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general'/>}></Route>
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country='in' category='health'/>}></Route>
          <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country='in' category='science'/>}></Route>
          <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country='in' category='sports'/>}></Route>
          <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country='in' category='technology'/>}></Route>
        </Routes>
      </Router>
      {/* </BrowserRouter> */}
      </>
    );
  }
}
