import React, { Component } from 'react';


import './App.css';

class App extends Component {
  state = {
    answer: 'by'
  };

  componentDidMount() {
    const data = JSON.stringify({
      title:"Title",
      body:"body"
    });
    fetch("/create", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: data
    })
      .then(res => res.json())
      .then(({ answer }) => {
        this.setState({ answer: answer });
      });

    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.answer}</p>
      </div>
    );
  }
}

export default App;