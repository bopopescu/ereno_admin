import React, { Component } from 'react';

class VendorReport extends Component {
  constructor(props){
   super(props);
   this.goBack = this.goBack.bind(this);
  }
  goBack(){
    this.props.history.goBack();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VendorReport</h1>
          <button onClick={this.goBack}>Go Back</button>
        </header>
      </div>
    );
  }
}

export default VendorReport;
