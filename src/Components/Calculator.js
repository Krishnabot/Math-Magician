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
          <button type="button" className="calc_key " onClick={Calc}>
            AC
          </button>
          <button type="button" className="calc_key" onClick={Calc}>
            +/-
          </button>
          <button type="button" className="calc_key" onClick={Calc}>
            %
          </button>
          <button
            type="button"
            className="calc_key operator_key"
            onClick={Calc}
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button type="button" className="calc_key" onClick={Calc}>
            7
          </button>
          <button type="button" className="calc_key" onClick={Calc}>
            8
          </button>
          <button type="button" className="calc_key" onClick={Calc}>
            9
          </button>
          <button
            type="button"
            className="calc_key operator_key"
            onClick={Calc}
          >
            x
          </button>
        </div>
        <div className="row">
          <button type="button" className="calc_key" onClick={Calc}>
            4
          </button>
          <button type="button" className="calc_key" onClick={Calc}>
            5
          </button>
          <button type="button" className="calc_key" onClick={Calc}>
            6
          </button>
          <button
            type="button"
            className="calc_key operator_key"
            onClick={Calc}
          >
            -
          </button>
        </div>
        <div className="row">
          <button type="button" className="calc_key" onClick={Calc}>
            1
          </button>
          <button type="button" className="calc_key" onClick={Calc}>
            2
          </button>
          <button type="button" className="calc_key" onClick={Calc}>
            3
          </button>
          <button
            type="button"
            className="calc_key operator_key"
            onClick={Calc}
          >
            +
          </button>
        </div>
        <div className="last_row">
          <button type="button" className="calc_key zero_key" onClick={Calc}>
            0
          </button>
          <button type="button" className="calc_key" onClick={Calc}>
            .
          </button>
          <button
            type="button"
            className="calc_key operator_key"
            onClick={Calc}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
