import React, { Component } from 'react';
import './App.css';

const axios = require('axios').default;

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount () {
    try {
      // const res = await fetch('http://127.0.0.1:8000/api/');
      // const posts = await res.json();
      const res = await axios.get('http://127.0.0.1:8000/api/');
      const posts = await res.data
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.posts.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.content}</span>
          </div>
        ))}
        <button onClick={() => this.sendPost()}>send</button>
      </div>
    );
  }
}
export default App;
