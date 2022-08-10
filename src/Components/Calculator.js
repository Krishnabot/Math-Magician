/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.result = this.result.bind(this);
  }

  result(event) {
    const { element } = this.state;
    const NewEl = calculate(element, event.target.textContent);
    this.setState({ element: NewEl });
  }

  render() {
    const { element } = this.state;
    const Calc = this.result;
    return (
      <div className="container-wrap">
        <div className="output">{element.next || element.total || 0}</div>
        <div className="row">
          <div className="calc_key " onClick={Calc}>
            AC
          </div>
          <div className="calc_key" onClick={Calc}>
            +/-
          </div>
          <div className="calc_key" onClick={Calc}>
            %
          </div>
          <div className="calc_key operator_key" onClick={Calc}>
            ÷
          </div>
        </div>
        <div className="row">
          <div className="calc_key" onClick={Calc}>
            7
          </div>
          <div className="calc_key" onClick={Calc}>
            8
          </div>
          <div className="calc_key" onClick={Calc}>
            9
          </div>
          <div className="calc_key operator_key" onClick={Calc}>
            x
          </div>
        </div>
        <div className="row">
          <div className="calc_key" onClick={Calc}>
            4
          </div>
          <div className="calc_key" onClick={Calc}>
            5
          </div>
          <div className="calc_key" onClick={Calc}>
            6
          </div>
          <div className="calc_key operator_key" onClick={Calc}>
            -
          </div>
        </div>
        <div className="row">
          <div className="calc_key" onClick={Calc}>
            1
          </div>
          <div className="calc_key" onClick={Calc}>
            2
          </div>
          <div className="calc_key" onClick={Calc}>
            3
          </div>
          <div className="calc_key operator_key" onClick={Calc}>
            +
          </div>
        </div>
        <div className="last_row">
          <div className="calc_key zero_key" onClick={Calc}>
            0
          </div>
          <div className="calc_key" onClick={Calc}>
            .
          </div>
          <div className="calc_key operator_key" onClick={Calc}>
            =
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
