import React from 'react';
import './calculator.css';

export class Calculator extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        numInput: 0,
      };
    }
  
    change = e => this.setState({ numInput: Number(e.target.value) });
  
    render() {
      return <div className="calculator" align="center">{this.props.featureName}
        <form>
            <div className="screen">
                <label>{this.props.result}</label>
            </div>
            <div>
            <label htmlFor="num-input">Input:</label>
            <input type="text" value={this.state.numInput} onChange={this.change} />
            </div>
            <div className="clearfix">
                <div className="keys-btn">
                <button className="calc_op imp" type="button" onClick={() => this.props.add(this.state.numInput)}>m+</button>
                <button className="calc_op imp" type="button" onClick={() => this.props.subtract(this.state.numInput)}>m-</button>
                <button className="calc_op imp" type="button" onClick={() => this.props.multiply(this.state.numInput)}>m*</button>
                <button className="calc_op imp" type="button" onClick={() => this.props.divide(this.state.numInput)}>m/</button>
                </div>
            </div>
        </form>
      </div>;
    }
  
  }