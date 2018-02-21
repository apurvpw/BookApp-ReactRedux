import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>No Book Selected </div>;
    }
    return (
      <div>
        <h3> Details For: </h3>
        <div> Title : {this.props.book.title} </div>
        <div> Written By : {this.props.book.writer} </div>
        <div> Pages : {this.props.book.pages} </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
