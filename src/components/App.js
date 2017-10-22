import React, { Component } from 'react';
import '../App.css';
import BookList from '../containers/book_list'
import BookDetail from '../containers/book_detail'

class App extends Component {
  render() {
    return (
      <div className="row col-xs-12">
          <BookList />
          <BookDetail />       
      </div>
    );
  }
}

export default App;
